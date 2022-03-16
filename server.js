// Différents imports nécessaires:
const express = require("express");

// Création qui permet des réponses en json:
app.use(express.json());

// Création du serveur:
app.listen(8000, () => console.log("Listening on port 8000..."));
