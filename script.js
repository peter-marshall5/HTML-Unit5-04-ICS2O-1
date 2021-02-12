'use strict'

const input = document.getElementById('length')
const button = document.getElementById('submit')

function calculate (sideLength) {
  return Math.pow(sideLength, 2)
}

function onclick () {
  var area = calculate(input.value)
  alert('Area: ' + area)
}

button.addEventListener('click', onclick)
