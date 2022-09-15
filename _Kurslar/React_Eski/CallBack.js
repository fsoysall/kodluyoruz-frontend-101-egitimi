import { log, topla, Selam } from './my-module.js';
import fetch from 'node-fetch';

// setTimeout(tiHandler,tio?)
const tio = 2000;

setTimeout(() => { log("merhaba"); }, tio);


const sayHi = (cb) => { cb(); };

sayHi(() => { log("saying hellouwwwwwww") })
/*
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(q1 => q1.json())
    .then(q2 => {
        log("user'lar yüklendi.");
        log(q2);
    });

fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(w1 => w1.json())
    .then(w2 => log(w2))


async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/12")
    log(data);
}

getData();

*/

async function getData() {
    const user1 = await (fetch("https://jsonplaceholder.typicode.com/users/01")).json();
    const post1 = await (fetch("https://jsonplaceholder.typicode.com/posts/12")).json();
    const post2 = await (fetch("https://jsonplaceholder.typicode.com/posts/23")).json();

    log(user1);
    log(post1);
    log(post2);

}

getData();
