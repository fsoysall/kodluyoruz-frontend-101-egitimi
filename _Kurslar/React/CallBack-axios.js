import { log2, log, topla, Selam } from './my-module.js';
import axios from 'axios';
import fetch from 'node-fetch';

const getComments = (n) => {
    return new Promise((resolve, reject) => {
        if (n == 1) { resolve({ text: "re-sollllvvved" }); }
        else if (n == 2) { reject({ text: "ühhüü ühüüü" }); }
        else { reject({ text: "! INGGG !" }); }
    })
}

getComments(1).then(d => { log(d); }).catch(c => { log(c); });
getComments(2).then(d => { log(d); }).catch(c => { log(c); });
getComments(3).then(d => { log(d); }).catch(c => { log(c); });



const getUser = (pId) => {
    return new Promise(async (rs, rj) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + pId);
        rs(user);
        rj("ohh noo : getUser")
    })
}

const getPost = (pId) => {
    return new Promise(async (rs, rj) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + pId);
        rs(data);
        rj("ohh noo : getPost")
    })
}


// (async () => {
//     try {
//         const user = await getUser(1);
//         log(user);
// 
//          const post = await getPost(23);
//          log(post);
//     } catch (err) { log(err); }
// })()

Promise.all([getUser(1), getPost(23)]).then(log).catch(log);



/*
async function getData() {
    const user1 = await (fetch("https://jsonplaceholder.typicode.com/users/01")).json();
    const post1 = await (fetch("https://jsonplaceholder.typicode.com/posts/12")).json();
    const post2 = await (fetch("https://jsonplaceholder.typicode.com/posts/23")).json();

    log(user1);
    log(post1);
    log(post2);

}

getData();


(
    async () => {
        const { data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/1");
        const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/12");
        const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/23");

        log2("user1:", user1);
        log2("post1", post1);
        log2("post2", post2);

    }
)();

//getData();
*/