const hamb=document.getElementById("hamb");
const nav=document.getElementById("nav");
hamb?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  hamb.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  hamb?.setAttribute("aria-expanded","false");
}));

const tabs=document.querySelectorAll(".tabs button");
const panels=document.querySelectorAll(".panel");
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    const key=tab.dataset.x;
    tabs.forEach(t=>t.classList.toggle("active",t===tab));
    panels.forEach(p=>p.classList.toggle("active",p.dataset.y===key));
  });
});

document.getElementById("form")?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const name=data.get("name");
  const phone=data.get("phone");
  const message=data.get("message");
  const text=`Hello United Fast Food & BBQ!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AOrder/Message: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/923066254999?text=${text}`,"_blank");
});

document.getElementById("year").textContent=new Date().getFullYear();
