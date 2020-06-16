const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request.body);
    response.send("Hello from Firebase!");
});

