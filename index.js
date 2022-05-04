var fs = require("fs");
var http = require("http");
var https = require("https");
var privateKey = fs.readFileSync("sslcert/privatekey.pem", "utf8");
var certificate = fs.readFileSync("sslcert/server.crt", "utf8");
const path = require("path");

var credentials = {
  key: privateKey,
  cert: certificate,
  //En caso de que protejan su llave agreguen el atributo passphrase: '<su frase>'
};
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "public")));

// your express configuration here

app.get("/principal", (req, res) => {
  console.log("Entre");
  res.sendFile(path.join(__dirname, "..", "prueba.html"));
});

//No es necesario que tengan tanto el protocolo http y https funcionando al mismo tiempo
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => console.log("Corriendo http 8080"));
httpsServer.listen(443, () => console.log("Corriendo HTTPS 8443"));
