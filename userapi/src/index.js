const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const db = require('./dbClient');
const promClient = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

// Création d'un collecteur de métriques par défaut
const collectDefaultMetrics = promClient.collectDefaultMetrics;

// Collecte des métriques toutes les 5 secondes
collectDefaultMetrics({ timeout: 5000 });

// Configuration du middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Point de terminaison pour les métriques de Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
});

// Autres routes de l'application
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/user', userRouter);

// Gestion des erreurs de connexion à la base de données
db.on("error", (err) => {
    console.error(err);
});

// Démarrage du serveur
const server = app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server listening the port " + port);
});

module.exports = server;
