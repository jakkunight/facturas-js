#!/usr/bin/node

const helper = require('./lib/helper');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
console.log("This program is ansmall utility to hash a password when loading test data on a db.");
console.log("Use it seriously.");

readline.question(`Insert a password to hash: `, async (password) => {
    try{
        console.log(await helper.encrypt_password(password));
    }catch(error){
        console.log(error);
        process.exit(-1);
    }
    readline.close();
    process.exit(0);
});