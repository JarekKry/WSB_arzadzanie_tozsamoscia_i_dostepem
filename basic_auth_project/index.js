// Importowanie modułów
const express = require("express");
var path = require('path');

// Tworzenie instancji aplikacji Express
const app = express();

function authentication(req, res, next) {
    // Pobranie nagłówka 'Authorization' z żądania HTTP
    var authheader = req.headers.authorization;
    console.log(req.headers); // Wyprintowanie nagłówków

    // Sprawdzenie, czy istnieje nagłówek 'Authorizzation'
    if (!authheader) {
        // Jeśli nie, utworzenie błędu 401 (Unauthorized) i ustawienie nagłówka 'WWW-Authenticate'
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

    // Dekodowanie danych autoryzacyjnych z Base64
    var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    // Sprawdzenie, czy login i hasło są puste
    if (user == '' && pass == '') {
        // Jeśli użytkownik jest uwierzytelniony, przechodź do następnego kroku
        next();
    } else {
        // Uttworzenie błędu 401 (Unauthorized) i ustawienie nagłówka 'WWW-Authenticate'
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
}

// autentykacja klienta
app.use(authentication);

// Ustawienie serwowania plików z katalogu 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Konfiguracja serwera nasłuchującego na porcie 3000
app.listen(3000, () => {
    console.log("Server is Running");
});
