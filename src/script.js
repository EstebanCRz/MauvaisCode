const delaytime = 2000

function startMovaiConnection() {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(function() {
        document.getElementById("loading").innerText = "Étape 1 : Vérification du nom d'utilisateur...";

        setTimeout(function() {
            document.getElementById("loading").innerText = "Étape 2 : Authentification en cours...";

            setTimeout(function() {
                document.getElementById("loading").innerText = "Connexion réussie ! Redirection en cours...";

                setTimeout(function() {
                    window.location.href = "email.html";
                }, delaytime);

            }, delaytime);

        }, delaytime);

    }, delaytime);
}

function startMovaiEmail() {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(function() {
        document.getElementById("loading").innerText = "Traitement de l'adresse e-mail en cours...";

        setTimeout(function() {
            window.location.href = "password.html";
        }, delaytime);

    }, delaytime);
}

function startMovaiPassword() {
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(function() {
        document.getElementById("loading").innerText = "Authentification en cours...";

        setTimeout(function() {
            document.getElementById("loading").innerText = "Connexion réussie ! Redirection en cours...";

            setTimeout(function() {
                window.location.href = "index.html";
            }, delaytime);

        }, delaytime);

    }, delaytime);
}
