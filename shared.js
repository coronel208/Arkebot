// shared.js — landing pages
function toggleMenu(){
  const ham=document.getElementById('ham');
  const mob=document.getElementById('mob');
  if(!ham||!mob)return;
  ham.classList.toggle('open');
  mob.classList.toggle('open');
}

function applySidebarState(){
  const shell=document.getElementById('appShell');
  if(!shell)return;
  const collapsed=localStorage.getItem('arkebot_sidebar_collapsed')==='1';
  shell.classList.toggle('collapsed',collapsed);
}

function toggleSidebar(){
  const shell=document.getElementById('appShell');
  if(!shell)return;
  const collapsed=!shell.classList.contains('collapsed');
  shell.classList.toggle('collapsed',collapsed);
  localStorage.setItem('arkebot_sidebar_collapsed',collapsed?'1':'0');
}

if(typeof window!=='undefined'){
  window.toggleSidebar=toggleSidebar;
  window.addEventListener('DOMContentLoaded',()=>{
    applySidebarState();
    if(typeof IntersectionObserver!=='undefined'){
      const revealEls=document.querySelectorAll('.reveal');
      if(revealEls.length){
        const obs=new IntersectionObserver(entries=>{
          entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});
        },{threshold:0.1});
        revealEls.forEach(el=>obs.observe(el));
      }
    }
  });
}
