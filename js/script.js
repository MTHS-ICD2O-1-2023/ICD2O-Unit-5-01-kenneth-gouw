// Copyright (c) 2024 Kenneth All rights reserved
//
// Created by: Kenneth
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1

function randomCheck() {
  const userNumber = parseInt(document.getElementById("num-entered").value)

  if (userNumber == randomNumber) {
    document.getElementById("answer").innerHTML = "Correct"
  }
  if (userNumber != randomNumber) {
    document.getElementById("answer").innerHTML = "Incorrect, try again"
  }
  // Output the answer to the user in the class "answer"
}
