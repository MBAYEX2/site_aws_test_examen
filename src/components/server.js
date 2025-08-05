const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Configuration Multer pour upload de fichier
const upload = multer({ dest: "uploads/" });

// Envoi de mail avec pièce jointe
app.post("/send-report", upload.single("report"), async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const filePath = req.file.path;
    const fileName = req.file.originalname;

    // Transporteur Nodemailer (exemple avec Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "votre.email@gmail.com",       // ⚠️ remplacez par votre adresse Gmail
        pass: "votre_mot_de_passe_app",      // ⚠️ utilisez un mot de passe d'application
      },
    });

    // Contenu de l'e-mail
    const mailOptions = {
      from: "votre.email@gmail.com",
      to: to,
      subject: subject,
      text: text,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    // Nettoyage du fichier temporaire
    fs.unlinkSync(filePath);

    res.status(200).send("Email envoyé avec succès !");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de l'envoi de l'e-mail");
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
