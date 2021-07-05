const jwt = require('jsonwebtoken');

const [ , , option, secret, nameOrToken] = process.argv; //processNode, archivoleyendo

if (!option || !secret){
    return console.log('Missing arguments!');
}

function signToken(payload, secret){
    return jwt.sign(payload, secret);
}

function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

if(option === 'sign'){
    console.log(signToken({ sub: nameOrToken}, secret));
} else if(option === 'verify'){
    console.log(verifyToken(nameOrToken, secret));
} else {
    return console.log('Option need to be "sign" or "verify"');
}

