var count = 0
var fullMessage = 'hi,'
var msg = [
  'rat', 'ball', 'cow', 'dog', 'sat', '.', 'kite', 'fan', 'hut', 'ink', 'junk', 'man', 'kilo', 'lung',
  'monday', 'soon', '.', 'sunday', 'poet', 'raw', 'sat', 'temple', 'user', 'van', 'xmas', 'now', 'owl', '.', 'fun',
  'now', 'roll', 'novel', 'climb', 'run', 'swim', 'went', 'play', 'rotten', 'surely', 'title', 'under', 'various',
  'expanded', 'data', 'brew', 'amazing', 'conversation', 'over', 'relaxing', 'under', 'conversation', 'chewing', 'peeling'
]

for (var i = 0; i < 10; i++) {
  var msgLength = Object.keys(msg).length
  var randNum = Math.floor((Math.random() * msgLength))
  if (msg[randNum] !== '.') {
    fullMessage += ' ' + msg[randNum] 
  } else {
    fullMessage += msg[randNum]
  }

  count++
}

function beginit () {
  day = new Date()
  startType = day.getTime()
  document.form.given.value = fullMessage
  document.form.typed.focus()
  document.form.typed.select()
}

function focusText () {
  document.form.typed.focus()
}

function done () {
  var dayTwo = new Date()
  var endType = dayTwo.getTime()
  var totalTime = ((endType - startType) / 1000)
  var spd = Math.round((count / totalTime) * 60)

  if (document.form.typed.value.length === document.form.given.value.length) {
    if (document.form.typed.value === document.form.given.value) {
      alert('\nYou typed  ' + count + ' word sentence in ' +
            totalTime + ' seconds, a speed of about ' + spd + ' words per minute!')
      window.location.reload()
    } else {
      alert('You made some error, ')
      window.location.reload()
    }
  } else {
    alert("You didn't typed the whole Sentence or You might have left something. " + ' ' + ' ' + 'Next Time Type Carefully...!!')
    window.location.reload()
  }
}

window.onload = function () {
  // Get the input field
  var input = document.getElementById('text')
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener('keypress', function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      document.getElementById('doneButton').click()
    }
  })
}
