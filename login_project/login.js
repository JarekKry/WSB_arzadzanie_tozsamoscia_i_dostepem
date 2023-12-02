// Przypisanie referencji do zmiennych na podstawie ich ID
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Dodanie event listenera na przycisku zdefinowanym wyżej
loginButton.addEventListener("click", (e) => {
    // Zapobieganie domyślnej akcji przycisku submit (wysłanie formularza)
    e.preventDefault();

    // Pobranie wartości wprowadzonych przez użytkownika w polach username i password
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Sprawdzenie, czy oba pola są puste
    if (username === "" && password === "") {
        // Wyświetlenie alertu o pomyślnym zalogowaniu
        alert("You have successfully logged in.");

        // Refresh strony
        location.reload();
    } else {
        // Uwidocznienie loginErrorMsg
        loginErrorMsg.style.opacity = 1;
    }
});
