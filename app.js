const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT))





app.get("/",(req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))

app.get ("/login",(req,res) => {
    res.sendFile(__dirname + "/views/login.html")
})

app.get ("/register",(req,res) => {
    res.sendFile(__dirname + "/views/register.html")
})