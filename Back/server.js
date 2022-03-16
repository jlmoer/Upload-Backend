// Différents imports nécessaires:
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const upload = multer({ dest: "public/uploads/" });
const cors = require("cors");
app.use(cors());

// Création d'une variable pour stocker tous les utilisateurs:
const users = [];

// Création qui permet des réponses en json:
app.use(express.json());

// Création de l'accès au dossier public:
app.use(express.static("public"));

// Création de la route qui envoie le username au front:
app.get("/user", (_req, res) => {
    res.json({
        users
    })
})

// Création d'une route pour tester le fonctionnement:
app.get("/", (_req, res) => {
    res.send("Upoload API");
});

// Création de la route POST qui va recevoir une photo de profil dans le body et la sauvegarder dans le dossier public/uploads:
app.post("/upload", upload.single("image"), (req, res) => {
    fs.renameSync(
        req.file.path,
        path.join(req.file.destination, req.file.originalname)
    );
    users.push(req.body.username)
    res.send("Image Received");
});

// Création du serveur:
app.listen(8000, () => console.log("Listening on port 8000..."));
