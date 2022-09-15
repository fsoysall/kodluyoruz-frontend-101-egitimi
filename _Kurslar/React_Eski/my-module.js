function log(l) { console.log(l); }
function log2(...l) { console.log(l); }

const topla = (a, b) => { return a + b; }


const Selam = () => log("SELAMM [my-module.js]");



export { log, topla, Selam , log2 };