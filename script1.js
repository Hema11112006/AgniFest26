document.querySelectorAll(".round").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    card.style.boxShadow="0 0 25px #00ffe7";
  });
  card.addEventListener("mouseleave",()=>{
    card.style.boxShadow="none";
  });
});