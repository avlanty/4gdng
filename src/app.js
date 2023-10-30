/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    const domain = generateDomain();
    document.querySelector("#domain").textContent = domain;
  });
  const initialDomain = generateDomain();
  document.querySelector("#domain").textContent = initialDomain;
  console.log("Hello!");
};

let generateDomain = () => {
  let www = ["www."];
  let name1 = ["shock", "cars", "steer", "hideous", "nail", "kindly"];
  let name2 = ["event", "subtract", "tenuous", "vacation", "breath"];
  let name3 = ["unite", "poised", "furniture", "throne"];
  let end = [".com", ".org", ".edu", ".co", ".net", ".io"];
  let wwwIndex = Math.floor(Math.random() * pronoun.length);
  let name1Index = Math.floor(Math.random() * subject.length);
  let name2Index = Math.floor(Math.random() * action.length);
  let name3Index = Math.floor(Math.random() * possession.length);
  let endIndex = Math.floor(Math.random() * where.length);
  return (
    www[wwwIndex] + name1[name1Index] + name2[name2Index] + name3[name3Index] + end[endIndex]
  );
};