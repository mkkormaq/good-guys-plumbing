// fetch('https://api.thecatapi.com/v1/images/search')
//     .then(res => res.json())
//     .then(data => {
//         const img = data[0].url
//         document.querySelector('#bannerImage').style.backgroundImage = `url(${img})`
//     })
//     .catch(err => console.error(err))

// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}