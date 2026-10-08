(function(){
  "use strict";
  const select=(el,all=false)=>{el=el.trim();return all?[...document.querySelectorAll(el)]:document.querySelector(el)};
  const on=(type,el,listener,all=false)=>{const s=select(el,all);if(!s)return;if(all)s.forEach(e=>e.addEventListener(type,listener));else s.addEventListener(type,listener)};
  const scrollto=(el)=>{const e=select(el);if(e)window.scrollTo({top:e.offsetTop,behavior:'smooth'})};
  const navbarlinks=select('#navbar .scrollto',true);
  const navbarlinksActive=()=>{let position=window.scrollY+200;navbarlinks.forEach(a=>{if(!a.hash)return;const sec=select(a.hash);if(!sec)return; if(position>=sec.offsetTop&&position<=sec.offsetTop+sec.offsetHeight){a.classList.add('active')}else a.classList.remove('active')})};
  window.addEventListener('load',navbarlinksActive);window.addEventListener('scroll',navbarlinksActive);
  on('click','.mobile-nav-toggle',function(){select('body').classList.toggle('mobile-nav-active');this.classList.toggle('bi-list');this.classList.toggle('bi-x')});
  on('click','.scrollto',function(e){if(select(this.hash)){e.preventDefault();if(select('body').classList.contains('mobile-nav-active')){select('body').classList.remove('mobile-nav-active');const t=select('.mobile-nav-toggle');if(t){t.classList.toggle('bi-list');t.classList.toggle('bi-x')}}scrollto(this.hash)}},true);
  const typed=select('.typed');if(typed&&window.Typed){new Typed('.typed',{strings:typed.getAttribute('data-typed-items').split(','),loop:true,typeSpeed:70,backSpeed:40,backDelay:1800})}
  const skills=select('.skills-content');if(skills&&window.Waypoint){new Waypoint({element:skills,offset:'80%',handler:function(){select('.progress .progress-bar',true).forEach(el=>el.style.width=el.getAttribute('aria-valuenow')+'%')}})}
  const back=select('.back-to-top');if(back){const toggle=()=>{if(window.scrollY>100)back.classList.add('active');else back.classList.remove('active')};window.addEventListener('scroll',toggle);window.addEventListener('load',toggle)}
  on('submit','#whatsapp-form',function(e){e.preventDefault();const name=select('#name').value.trim();const email=select('#email').value.trim();const subject=select('#subject').value.trim();const message=select('#message').value.trim();const text=`Hello Aizazullah, my name is ${name}.\n\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`;const status=select('#whatsapp-status');if(status){status.style.display='block'}window.open('https://wa.me/93784592505?text='+encodeURIComponent(text),'_blank','noopener,noreferrer')});
  window.addEventListener('load',()=>{if(window.AOS)AOS.init({duration:1000,easing:'ease-in-out',once:true,mirror:false})});
})();
