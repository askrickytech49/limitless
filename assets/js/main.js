document.querySelectorAll('button,.btn,.navcta,.cardlink').forEach(control=>{control.textContent=control.textContent.replace(/[←→‹›]/g,'').trim()});const menu=document.querySelector('.menu');const nav=document.querySelector('.navlinks');if(menu&&nav){menu.textContent='☰';menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}))}
const featureBand=document.querySelector('.hero-features');const hero=document.querySelector('.hero');if(featureBand&&hero){hero.after(featureBand)}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.galleryitem[data-cat]').forEach(item=>item.classList.toggle('is-hidden',filter!=='all'&&item.dataset.cat!==filter))}));
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();let notice=form.querySelector('.form-notice');if(!notice){notice=document.createElement('p');notice.className='form-notice';form.append(notice)}notice.textContent='Thank you. We will be in touch shortly.';notice.setAttribute('role','status');form.reset()}));

const heroTitle=document.querySelector('.hero-title');
if(heroTitle)heroTitle.textContent='Learning Without Limits';
const heroButton=document.querySelector('.hero-content .btn');
if(heroButton)heroButton.innerHTML='Enroll Now <svg class="enroll-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M3.5 5.5A3.5 3.5 0 0 1 7 2h4.5v16H7a3.5 3.5 0 0 0-3.5 3.5V5.5Zm17 0A3.5 3.5 0 0 0 17 2h-4.5v16H17a3.5 3.5 0 0 1 3.5 3.5V5.5Z"/></svg>';

// Convert the learning indicators into branded, animated progress pills.
document.querySelectorAll('.progressrow').forEach((row,index)=>{
  const percentage=row.querySelector('b')?.textContent.trim()||'0%';
  const fill=row.querySelector('i');
  const width=fill?.style.width||percentage;
  const label=[...row.childNodes].find(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim())?.textContent.trim()||'Learning';
  row.innerHTML=`<div class="progress-pill progress-pill-${index + 1}"><i class="progress-fill" style="--progress:${width}"></i><span>${label}</span><b>${percentage} <em>→</em></b></div>`;
});

// A playful alphabet accent gives the main enrolment call-to-action a child-friendly feel.
const joinBand=document.querySelector('.cta-band');
if(joinBand&&!joinBand.querySelector('.cta-alphabet')){
  const alphabet=document.createElement('img');
  alphabet.className='cta-alphabet';
  alphabet.src='assets/images/Or_1.png';
  alphabet.alt='';
  alphabet.setAttribute('aria-hidden','true');
  joinBand.append(alphabet);
}

// Shared footer accents and social shortcuts.
const footer=document.querySelector('footer');
if(footer){
  const footerIntro=footer.querySelector('.footergrid>div:first-child');
  if(footerIntro&&!footerIntro.querySelector('.footer-socials')){
    const social=document.createElement('div');
    social.className='footer-socials';
    social.innerHTML='<a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2Z"/></svg></a><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8Z"/><path d="m10 15 5-3-5-3v6Z" fill="#fc4b14"/></svg></a><a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="9" width="3" height="11" rx=".5"/><circle cx="5.5" cy="5.5" r="1.8"/><path d="M10 9h3v1.5c.8-1.1 1.9-1.8 3.5-1.8 3 0 3.5 2 3.5 4.6V20h-3v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3V9Z"/></svg></a>';
    footerIntro.append(social);
  }
  if(!footer.querySelector('.footer-alphabet')){
    ['footer-alphabet left','footer-alphabet right'].forEach(className=>{
      const alphabet=document.createElement('img');
      alphabet.className=className;
      alphabet.src='assets/images/Or_1.png';
      alphabet.alt='';
      alphabet.setAttribute('aria-hidden','true');
      footer.append(alphabet);
    });
  }
}

// Use the school’s supplied Google Maps location on the contact page.
const contactMap=document.querySelector('.map');
if(contactMap){
  contactMap.innerHTML='<iframe title="Limitless Schools location" src="https://www.google.com/maps?q=Limitless%20Schools%20Owerri%20%405.493699%2C7.065978&amp;z=15&amp;hl=en&amp;output=embed" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><a class="map-open" href="https://www.google.com/maps?ll=5.493699,7.065978&amp;z=15&amp;hl=en" target="_blank" rel="noopener">Open in Google Maps <span aria-hidden="true">↗</span></a>';
}


// Hero image carousel: autoplay, arrows, dots and animated text.
(() => {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.hero-dot')];
  const prev = document.querySelector('.hero-prev');
  const next = document.querySelector('.hero-next');
  const progress = document.querySelector('.hero-progress');
  if (!slides.length) return;

  let current = 0;
  let timer;
  const duration = 6000;

  const paint = (index, instant=false) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((el,i)=>el.classList.toggle('active',i===current));
    dots.forEach((el,i)=>el.classList.toggle('active',i===current));
    progress.classList.remove('play');
    void progress.offsetWidth;
    progress.classList.add('play');
  };
  const start = () => { clearInterval(timer); timer=setInterval(()=>paint(current+1),duration); };
  next?.addEventListener('click',()=>{paint(current+1);start()});
  prev?.addEventListener('click',()=>{paint(current-1);start()});
  dots.forEach(dot=>dot.addEventListener('click',()=>{paint(Number(dot.dataset.slide));start()}));
  document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(timer):start());
  paint(0,true); start();
})();

// Testimonial carousel autoplay logic
(() => {
  const track = document.querySelector('.testgrid');
  const nextBtn = document.querySelector('.test-next');
  const prevBtn = document.querySelector('.test-prev');
  if (!track) return;
  
  let scrollInterval;
  let isScrolling = false;
  const cardWidth = 300; // approx card width + gap
  
  const scrollNext = () => {
    if(isScrolling) return;
    if(track.scrollLeft >= (track.scrollWidth - track.clientWidth - 10)) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };
  
  const scrollPrev = () => {
    if(isScrolling) return;
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };
  
  const startAutoplay = () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(scrollNext, 4000);
  };
  
  const stopAutoplay = () => clearInterval(scrollInterval);
  
  nextBtn?.addEventListener('click', () => { scrollNext(); startAutoplay(); });
  prevBtn?.addEventListener('click', () => { scrollPrev(); startAutoplay(); });
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  track.addEventListener('touchstart', stopAutoplay, {passive: true});
  track.addEventListener('touchend', startAutoplay, {passive: true});
  track.addEventListener('scroll', () => { isScrolling = true; clearTimeout(track.scrollTimer); track.scrollTimer = setTimeout(() => { isScrolling = false; }, 150); });
  
  startAutoplay();
})();
