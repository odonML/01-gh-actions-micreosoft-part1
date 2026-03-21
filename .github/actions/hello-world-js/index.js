//.github/actions/hello-world-js/index.js
const core = require('./@actions/core');
const nameToGreet = core.getInput('who-to-greet');
console.log(`Hola ${nameToGreet}! Estás un paso más cerca de ser DevOps.`);