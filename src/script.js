const delaytime = 2000;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let errorList = [];

function startMovaiConnection() {
    const usernameInput = document.getElementById("username").value.trim();
    let boolError = false;

    // Check if the username starts with an uppercase letter
    if (!usernameInput || usernameInput[0] !== usernameInput[0].toUpperCase()) {
        boolError = true;
        addToErrorList("Le nom d'utilisateur doit commencer par une majuscule.");
    }

    // Check if the username contains numbers
    if (/\d/.test(usernameInput)) {
        boolError = true;
        addToErrorList("Le nom d'utilisateur ne doit pas contenir de chiffre.");
    }

    // Check if the username contains special characters
    if (/[!@#$%^&*(),.?":_{}|<>-]/.test(usernameInput)) {
        boolError = true;
        addToErrorList("Le nom d'utilisateur ne peut pas contenir de caractères spéciaux.");
    }

    document.getElementById("loading").classList.remove("hidden");

    if (boolError) {
        // Delay before showing errors
        setTimeout(() => {
            // Show alert with accumulated errors
            alert(errorList.join('\n'));

            // Display errors on the site
            const errorElement = document.getElementById("error");
            errorElement.innerText = errorList.join('\n');

            document.getElementById("loading").classList.add("hidden");
            errorElement.classList.remove("hidden");
        }, delaytime);

        return;
    }

    setTimeout(async function() {
        document.getElementById("loading").innerText = "Étape 1 : Vérification du nom d'utilisateur...";

        await delay(delaytime);

        document.getElementById("loading").innerText = "Étape 2 : Authentification en cours...";

        await delay(delaytime);

        document.getElementById("loading").innerText = "Connexion réussie ! Redirection en cours...";

        await delay(delaytime);

        window.location.href = "email.html";
    }, delaytime);
}

function addToErrorList(error) {
    // Add error to the list if not already present
    if (!errorList.includes(error)) {
        errorList.push(error);
    }
}

// ... (the rest of your code remains unchanged)


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
