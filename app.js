"use strict";
const newYear = "1 Jan 2024";

let daysDocument = document.getElementById("days");
let hoursDocument = document.getElementById("hours");
let minutesDocument = document.getElementById("minutes");
let secondsDocument = document.getElementById("seconds");

const timer = () => {
  const date = new Date();
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  let year = date.getFullYear();
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const difference = (newYearDate - currentDate) / 1000;

  const daysLeft = Math.floor(difference / 3600 / 24);
  const hoursLeft = Math.floor(difference / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 60) % 60;
  const secondsLeft = Math.floor(difference) % 60;

  console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

  daysDocument.textContent = daysLeft;
  hoursDocument.textContent = hoursLeft;
  minutesDocument.textContent = minutesLeft;
  secondsDocument.textContent = secondsLeft;
};

setInterval(timer, 1000);
