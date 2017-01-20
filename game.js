let sequence = []
function randomColor () {
  let number = Math.random() * 4
  if (number < 1) {
    return 'green'
  } else if (number < 2) {
    return 'red'
  } else if (number < 3) {
    return 'yellow'
  } else {
  return 'blue'
  }
}
for (let i = 0; i < 2; i++) {
  sequence.push(randomColor())
}
let gameSpeed = 1000

function flicker (button, speed) {
  console.log(button)
  button.style.opacity = 1;
  setTimeout(() => { turnOff(button) }, speed)
}
function turnOff (button) {
  button.style.opacity = 0.5
}
sequence.forEach((color, i) => {
  setTimeout(() => {
    let button = document.querySelector(`.${color}`)
    setTimeout(() => { flicker(button, gameSpeed * 0.9) }, gameSpeed)
  }, gameSpeed * 1.2 * i)
})


let buttons = document.querySelectorAll('.game button')
buttons.forEach(button => {
  button.addEventListener('click', recordClick)
})
let playerSequence = []
function recordClick (event) {
  let button = event.target
  let className = button.className
  flicker(button, gameSpeed * 0.8)
  let nextInSequence = playerSequence.length
  if (sequence[nextInSequence] !== className) {
    document.querySelector('body').style.backgroundColor = 'red'
  }
  playerSequence.push(className)
}

