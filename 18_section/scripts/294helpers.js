// 294. Event Handlers in MVC: Publisher-Subscriber Pattern

import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./294config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
};

export const getJSON = async function(url) {
    try {
        const fetchPromise = fetch(url);
        const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);  
        const data = await res.json();
    
        if(!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }
    catch(err) {
        // console.log(err);
        throw err;
    };
};