// char at ,index of,replace,slice,trim,split,to lowercase,substr
let prompt = require("prompt-sync")();
let str = prompt("Enter a string :");
function variety_str() {
    let str1 = str.trim();
    let str2 = str.charAt(10);
    let str3 = str.indexOf("world",8);
    let str4 = str.substr(1,4);
    let str5 = str.replace("world","home");
    let str6 = str.toLowerCase();
    let str7 = str.slice(5,7);
    let str8 = str.split("");
    console.log(`input string :${str}`);
    console.log(`Trimmed  string :${str1}`);
    console.log(`charAt string :${str2}`);
    console.log(`indexOf string :${str3}`);
    console.log(`substring string :${str4}`);
    console.log(`replaced string :${str5}`);
    console.log(`lowercase string :${str6}`);
    console.log(`sliced string :${str7}`);
    console.log(`splitted string :${str8}`);
}
console.log(variety_str());
