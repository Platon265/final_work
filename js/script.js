"use strict";

const formRun = document.querySelector("form");
const buttonEl = document.querySelector(".bottom_submit_button");
const pass = document.querySelector(".bottom_signup_form_entry_field");
const rePass = document.querySelector(
  ".bottom_signup_form_entry_field_re"
);
const emailEl = document.querySelector(".bottom_signup_form_entry_field_email");

formRun.addEventListener("input", (e) => {
  if (rePass.value === pass.value) {
    pass.setAttribute("style", "outline: 1px solid green");
    rePass.setAttribute("style", "outline: 1px solid green");
  } else {
    pass.setAttribute("style", "outline: 1px solid red");
    rePass.setAttribute("style", "outline: 1px solid red");
  }
});

formRun.addEventListener("submit", (e) => {
  if (pass.value === "") {
    e.preventDefault();
    pass.setAttribute("style", "outline: 1px solid red");
    rePass.setAttribute("style", "outline: 1px solid red");
  }
  if (emailEl.value === "") {
    e.preventDefault();
    emailEl.setAttribute("style", "outline: 1px solid red");
  }
});

formRun.addEventListener("input", (e) => {
  if (emailEl.value === "") {
    e.preventDefault();
    emailEl.setAttribute("style", "outline: 1px solid red");
  } else {
    emailEl.removeAttribute("style");
  }
});







const stars = document.querySelectorAll(".star");

function rate(rating) {
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("rated");
    } else {
      stars[i].classList.remove("rated");
    }
  }
}