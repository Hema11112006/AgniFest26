// Scroll reveal
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

// Countdown
const eventDate = new Date("feb14, 2026 9:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const gap = eventDate - now;

  const d = Math.floor(gap / (1000*60*60*24));
  const h = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((gap%(1000*60*60))/(1000*60));
  const s = Math.floor((gap%(1000*60))/1000);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
},1000);