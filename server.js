'use strict';
// Import necessary modules
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');

fccTesting(app);

// Define salt rounds for bcrypt hashing (higher = more secure but slower)
const saltRounds = 12;

// Sample plaintext passwords for testing
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {   // Asynchronously hash the password
    console.log(hash);   // Log the hashed password
    bcrypt.compare(myPlaintextPassword, hash, (err,res) => {    // Asynchronously compare the plaintext password with the hash
        console.log(res);   // Log true if the password matches the hash, else false
    });
});
//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);    // Synchronously hash the password
console.log(hash);  // Log the hashed password

var result = bcrypt.compareSync(myPlaintextPassword, hash);     // Synchronously compare the plaintext password with the hash
console.log(result);    // Log true if the password matches the hash, else false
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
