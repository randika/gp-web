import React, { useEffect, useRef, useState, useCallback } from 'react';

const slidesData = [
  {
    image: 'https://images.unsplash.com/photo-1588776814546-3f76ec9a2c07?auto=format&fit=crop&w=2000&q=85',
    caption: 'Welcome to Southern Cross Medical Clinic — modern facilities and caring staff.'
  },
  {
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
    caption: 'A welcoming environment for you and your family.'
  },
  {
    image: 'https://images.unsplash.com/photo-1588776814635-2f93d3f3be3f?auto=format&fit=crop&w=1600&q=80',
    caption: 'Experienced doctors dedicated to your health and wellbeing.'
  }
];

export default function Carousel(){
  const base = import.meta.env.BASE_URL || '/';
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const lockedRef = useRef(false);
  const startXRef = useRef(null);

  const setSlide = useCallback((i)=>{
    setIndex(prev => ( (i + slidesData.length) % slidesData.length));
  },[]);

  const update = useCallback(()=>{
    const track = trackRef.current;
    const container = containerRef.current;
    if(!track || !container) return;
    const offset = -(index * container.clientWidth);
    track.style.transform = `translateX(${offset}px)`;
  },[index]);

  const auto = useCallback(()=>{
    clearInterval(timerRef.current);
    timerRef.current = setInterval(()=>{
      setSlide(index+1);
    },5000);
  },[index,setSlide]);

  useEffect(()=>{ update(); auto(); return ()=>clearInterval(timerRef.current); },[index, update, auto]);

  useEffect(()=>{ const handler = ()=>update(); window.addEventListener('resize', handler); return ()=>window.removeEventListener('resize', handler); },[update]);

  const onTouchStart = e => { startXRef.current = e.touches[0].clientX; };
  const onTouchMove = e => {
    if(startXRef.current === null) return;
    const dx = e.touches[0].clientX - startXRef.current;
    if(Math.abs(dx) > 50 && !lockedRef.current){
      lockedRef.current = true;
      setSlide(index + (dx < 0 ? 1 : -1));
      auto();
      setTimeout(()=>{ lockedRef.current = false; },300);
      startXRef.current = null;
    }
  };
  const onTouchEnd = ()=>{ startXRef.current = null; };

  return (
    <section className="carousel" aria-label="Clinic highlights" ref={containerRef}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      <div className="carousel-track" ref={trackRef}>
        {slidesData.map((s,i)=> (
          <div className={"slide" + (i===index? ' is-active':'')} key={i}>
            <img {...(i===0? {fetchpriority:'high', loading:'eager'} : {loading:'lazy'})} decoding="async" src={s.image} alt={s.caption} onError={(e)=>{ if(e.currentTarget.dataset.fallback) return; e.currentTarget.dataset.fallback='1'; e.currentTarget.src= base + 'placeholder.svg'; }} />
            <div className="slide-caption">{s.caption}</div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" aria-label="Previous slide" onClick={()=>{ setSlide(index-1); auto(); }}>‹</button>
      <button className="carousel-btn next" aria-label="Next slide" onClick={()=>{ setSlide(index+1); auto(); }}>›</button>
      <div className="carousel-dots" aria-hidden="true">
        {slidesData.map((_,i)=> (
          <button key={i} className={i===index? 'active':''} onClick={()=>{ setSlide(i); auto(); }} />
        ))}
      </div>
    </section>
  );
}
