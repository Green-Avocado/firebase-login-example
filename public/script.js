function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(error.code, error.message);
    });
}

function register() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(error.code, error.message);
    });
}

