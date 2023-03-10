console.log("Your index.js file is loaded correctly!");

$(window).load(function () {
      $('body').sakura();
  }); 

$('.navProj').on("click", function(e){
    e.preventDefault();
    var targetHref = $(this).attr('href');
    
  $('html, body').animate({
      scrollTop: $(targetHref).offset().top
  }, 1000);
});

// Get all the cards on the page
const cards = document.querySelectorAll('.card');

// Define the function to check if a card is in view
function isCardVisible(card) {
  const rect = card.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Define the function to handle scroll events
function handleScroll() {
  cards.forEach(card => {
    if (isCardVisible(card)) {
      card.classList.add('animation');
    }
  });
}

// Listen for scroll events and call the handleScroll function
window.addEventListener('scroll', handleScroll);
