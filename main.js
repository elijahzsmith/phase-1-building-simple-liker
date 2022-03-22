// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hideErr = document.querySelector("div#modal")
console.log(hideErr)
hideErr.classList.add("hidden")

const hearts = document.querySelectorAll(".like-glyph") 

hearts.forEach(heart => heart.addEventListener("click", handleClick))

function handleClick(e) {
  mimicServerCall()
  .then(() => {
    if (!e.target.className.includes("activated-heart")) {
      e.target.classList.add("activated-heart")
      e.target.innerText = FULL_HEART
    } else { 
      e.target.classList.remove("activated-heart")
      e.target.innerText = EMPTY_HEART
    }
 })

  .catch((err) => {
    console.error(err)
    hideErr.classList.remove("hidden")
    setTimeout(() =>hideErr.classList.add("hidden"), 3000)
    hideErr.append(err)
  })
}


//  const heart = e.target
//  if (heart.className === "activated-heart") {
//    heart.className = ""
//    heart.innerText = EMPTY_HEART
//  } else { 
//    heart.className = "activated-heart"
//    heart.innerText = FULL_HEART
//  }
// }))
// window.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded")
// })

// modal = document.querySelector("div#modal")
// modal.className = "hidden"

// const body = document.body // select the body
// const listItems = document.body.querySelectorAll("li.like") // select the list items
// console.log(listItems) // log the list items: NodeList


// const likeLi = body.getElementsByClassName("like") // Select the like container
// console.log(likeLi) // log the like container
// const heart = document.body.querySelectorAll("span.like-glyph") // select the hearts
// console.log(heart) // log the heart
// console.log(heart.length); // length of html collection


// const handleClick = (NodeList) => {
//   heartArr = Array.from(NodeList) // get array from nodelist
//   console.log(heartArr) // log new array
//   heartArr.forEach(element => {
//     element.addEventListener("click", event => {
//       if (event.target.innerHTML === EMPTY_HEART) {
//         event.target.innerHTML = FULL_HEART
//       }else {
//         event.target.innerHTML = EMPTY_HEART
//       }
//     }) 
//   })
// }
// handleClick(heart) // invoking the handleclick

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
