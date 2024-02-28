import {  readable } from "svelte/store";

let count = 0;

export const timer = readable(count, (set) => {
   const interval = setInterval(() => {
        count++;
        set(count);
    },1000);

    return () => {
        clearInterval(interval);
    };
});

export const letter =readable('', (set) => {
    const letterinterval = setInterval(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * letters.length);
        const displayed = letters[randomIndex];
        set (displayed);
    },1000);
    
    return () => {
        clearInterval(letterinterval);
    };
});