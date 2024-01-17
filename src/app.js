/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronouns = ["the", "her"];
let adjs = ["extraordinary", "awesome"];
let nouns = ["caries", "team"];
let domain = [".es", ".com", ".net"];

for (let i = 0; i <= pronouns.length - 1; i++) {
  // console.log(pronouns[i]);
  for (let j = 0; j <= adjs.length - 1; j++) {
    // console.log(pronouns[i] + adjs[j]);
    for (let k = 0; k <= nouns.length - 1; k++) {
      // console.log(pronouns[i] + adjs[j] + nouns[k]);
      for (let l = 0; l <= domain.length - 1; l++) {
        console.log(nouns[k] + domain[l].substring(1, domain[l].length + 1));
        if (
          nouns[k].substring(nouns[k].length - domain[l].length + 1) ==
          domain[l].substring(1, domain[l].length + 1)
        ) {
          console.log(
            pronouns[i] +
              adjs[j] +
              nouns[k].substring(0, nouns[k].length - domain[l].length + 1) +
              domain[l]
          );
        } else {
          console.log(pronouns[i] + adjs[j] + nouns[k] + domain[l]);
        }
      }
    }
  }
}
