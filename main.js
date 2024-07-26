// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartElements = document.querySelectorAll('.like-glyph')
const errorElement = document.querySelector('div')
//console.log(errorElement)

heartElements.forEach((element) => {
  element.addEventListener('click', () =>{
    mimicServerCall().then(response => {
      if(element.textContent === FULL_HEART){
        element.textContent = EMPTY_HEART
        element.className = 'not-activated-heart'
      }
      else{
      element.textContent = FULL_HEART
      element.className = "activated-heart"
      }
  })
    .catch(error => {
      errorElement.className ='nothidden'
      errorElement.textContent = error
      setTimeout(() => errorElement.className = 'hidden',3000)
    })

  }
  )
}
)


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
