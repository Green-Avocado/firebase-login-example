function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(error.code + ' ' + error.message);
    });
}

function register() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(error.code + ' ' + error.message);
    });
}

function secureRequest() {
    var user = firebase.auth().currentUser;

    if (user) {
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            console.log(idToken);
            postData('/api', { token: idToken })
                .then(data => {
                    console.log(data);
                    alert(data.status + ' ' + data.email + ' ' + data.uid);
                });
        });
    }
    else {
        alert('Please log in');
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


