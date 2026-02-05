window.addEventListener("scroll", reveal);

function reveal(){
  const cards = document.querySelectorAll(".reveal");
  cards.forEach(card=>{
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      card.classList.add("active");
    }
  });
}