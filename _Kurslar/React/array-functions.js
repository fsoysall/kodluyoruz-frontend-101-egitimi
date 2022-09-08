import { log2, log, topla, Selam } from './my-module.js';
import axios from 'axios';
import fetch from 'node-fetch';

const users = ["ali", "mali", "veli"];
const userNs = [{ namme: "ali", age: 21 }, { namme: "mali", age: 29 }, { namme: "veli", age: 33 }];

/* push, pop // map, find, filter ,some, every , includes */

users.map(i => { log(i) })
log("");
userNs.map(i => { log(i) })
log("");
userNs.map(i => { log(i.namme) })

log("");

log("find");
const findIt1 = users.find((i) =>  i == "ali" );
const findIt2 = userNs.find((i) =>  i.namme == "veli" );

log(findIt1);
log("");
log(findIt2);



log("");
log("filter");
const filterIt1 = users.filter((i) =>  i == "ali" );
const filterIt2 = userNs.filter((i) =>  i.namme == "veli" );

log(filterIt1);
log("");
log(filterIt2);


