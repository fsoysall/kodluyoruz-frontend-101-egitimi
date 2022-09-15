import { log, log2 } from '../my-module.js';
/*
-  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. 
    Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.

-  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
-  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. 
    İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. 
    İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

     [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

-  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.
    İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

    [https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

-  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. 
    Bu iki veriyi birleştirip return edin. 
    Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.
*/
import axios from "axios";

/* 

const getUser = (pId) => {
    return new Promise(async (rs, rj) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + pId);
        rs(user);
        rj("ohh noo : getUser")
    })
}
*/


const getUser = (pId) => {
    return new Promise(async (rs, rj) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + pId);
        rs(user);
        rj("ohh noo : getUser")
    })
}

const getPost = (pId) => {
    return new Promise(async (rs, rj) => {
        const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/?userId=${1}`, { params: { _limit: 3 } });
        rs(data);
        rj("ohh noo : getPost")
    })
}


// Promise.all( [getUser(1), getPost(23)]).then(log).catch(log);
async function getData(userId) {
    var user = await getUser(userId);
    var Posts = await getPost(userId);
    var r = { user, "Posts": Posts };
    log(r);
}

export default getData;




