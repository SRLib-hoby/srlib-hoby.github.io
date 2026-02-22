
document.addEventListener('DOMContentLoaded',()=>{
  const reveals=document.querySelectorAll('.reveal');
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  reveals.forEach(el=>obs.observe(el));

  const sObs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){const el=x.target,t=parseInt(el.dataset.target),s=el.dataset.suffix||'';let c=0;const st=Math.max(1,Math.floor(t/60)),tm=setInterval(()=>{c+=st;if(c>=t){c=t;clearInterval(tm)}el.textContent=c+s},25);sObs.unobserve(el)}})},{threshold:.5});
  document.querySelectorAll('.stat__number').forEach(el=>sObs.observe(el));

  const hBg=document.querySelector('.hero__bg img');
  if(hBg){window.addEventListener('scroll',()=>{const y=window.scrollY;if(y<window.innerHeight)hBg.style.transform=`translateY(${y*.3}px) scale(1.1)`},{passive:true})}

  const lb=document.getElementById('lightbox'),lbI=lb.querySelector('.lightbox__img'),lbC=lb.querySelector('.lightbox__caption'),lbX=lb.querySelector('.lightbox__close');
  document.querySelectorAll('.gallery__item').forEach(item=>{item.addEventListener('click',()=>{const src=item.dataset.src||item.querySelector('img').src;const title=item.dataset.title||'';lbI.src=src;lbI.alt=title;lbC.textContent=title;lb.classList.add('active');document.body.style.overflow='hidden'})});
  function closeLb(){lb.classList.remove('active');document.body.style.overflow=''}
  lbX.addEventListener('click',closeLb);lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
});
