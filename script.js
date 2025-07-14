/* ── preloader ── */
window.addEventListener("load",()=>{document.getElementById("preloader").style.display="none"});

/* ── copy email ── */
function copyEmail(e){
  e.preventDefault();
  navigator.clipboard.writeText("arjun.u1968@gmail.com").then(()=>alert("Email copied!"));
}

/* ── typewriter ── */
const words=["AI Enthusiast","Software Developer","Creative Thinker"];
let w=0,l=0,del=false;
function type(){
  const el=document.querySelector(".typewriter-text");
  if(!el) return;
  if(!del && l<=words[w].length){el.textContent=words[w].slice(0,l++)+"|"}
  else if(del && l>=0){el.textContent=words[w].slice(0,l--)+"|"}
  if(l===words[w].length){del=true;setTimeout(type,1000)}
  else if(l===0 && del){del=false;w=(w+1)%words.length}
  setTimeout(type,del?50:100);
}
window.addEventListener("DOMContentLoaded",type);

/* ── scroll progress ── */
window.addEventListener("scroll",()=>{
  const s=document.documentElement.scrollTop,h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width=(s/h)*100+"%";
});

/* ── reveal on scroll ── */
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100)el.classList.add("active");
  });
});

/* ── smooth anchor scroll ── */
document.querySelectorAll('a.nav-link').forEach(link=>{
  link.addEventListener("click",e=>{
    if(link.hash){e.preventDefault();document.querySelector(link.hash).scrollIntoView({behavior:"smooth"})}
  });
});

/* ── dark‑mode toggle with memory ── */
function toggleDarkMode(){
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme",document.body.classList.contains("dark-mode")?"dark":"light");
}
if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark-mode");
