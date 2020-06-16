const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const api = express();

const serviceAccount = require('./secret.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

api.post('/api', (req, res) => {
    console.log(req.body);
    let idToken = req.body.token;
    admin.auth().verifyIdToken(idToken)
        .then(function(decodedToken) {
            let uid = decodedToken.uid;
            let email = decodedToken.email;

            return res.status(200).json({ status: 'success', uid: uid, email: email });
        }).catch(function(error) {
            return res.status(401).json({ status: 'failure' });
        });
});

exports.api = functions.https.onRequest(api);

