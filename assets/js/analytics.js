/* ==========================================================================
   dør · Analytics + cookie consent (GA4 G-ZQZ9PJ51JH)
   Consent-gated GA4 with a full event taxonomy for corporate decision-making:
   acquisition, conversion funnel, engagement, service/case interest, language,
   and consent rate. Bilingual cookie banner (JS-built, inline styles). Shared
   by every page. Events fire only after the visitor accepts (true gating).

   Event taxonomy (mark schedule_call_click, email_click and generate_lead as
   Key Events in GA4 → Admin → Events):
   - page_landed        acquisition: page_type, lang, utm_*, referrer
   - case_view          interest: which case detail is read (case)
   - language_switch    audience: ES↔EN toggles (to)
   - section_view       funnel depth: key sections seen (section)
   - scroll_depth       engagement: 25/50/75/90% (percent)
   - cta_click          funnel: primary CTA clicks (cta_label, cta_location)
   - nav_click          navigation: menu usage (destination)
   - case_card_click    interest: a case card opened (case, from)
   - service_click      interest: a service card opened (service)
   - schedule_call_click  CONVERSION: booking link (cta_location)  [Key Event]
   - email_click        CONVERSION: mailto (email)                 [Key Event]
   - cookie_consent     compliance: accept rate (choice)
   ========================================================================== */
(function(){
  var GA_ID='G-ZQZ9PJ51JH';
  var KEY='dor-cookie-consent';
  var ORANGE='#F26C3B', ORANGE_D='#DD5A2A';
  var COPY={
    es:{text:'Usamos cookies de Google Analytics para medir el tráfico y mejorar el sitio. Solo se activan si las aceptás; podés rechazarlas y seguir navegando.',
        policy:'Política de privacidad',accept:'Aceptar',reject:'Rechazar'},
    en:{text:'We use Google Analytics cookies to measure traffic and improve the site. They only activate if you accept; you can reject them and keep browsing.',
        policy:'Privacy policy',accept:'Accept',reject:'Reject'}
  };

  function lang(){
    try{ var p=new URLSearchParams(location.search).get('lang');
      if(p==='en'||p==='es')return p; }catch(e){}
    var h=(document.documentElement.lang||'').toLowerCase();
    if(h.indexOf('en')===0)return 'en';
    return 'es';
  }
  function curLang(){
    var h=(document.documentElement.lang||'').toLowerCase();
    if(h.indexOf('en')===0)return 'en'; if(h.indexOf('es')===0)return 'es';
    return lang();
  }
  function utm(){ var p=new URLSearchParams(location.search);
    return {source:p.get('utm_source')||'',medium:p.get('utm_medium')||'',
      campaign:p.get('utm_campaign')||'',content:p.get('utm_content')||'',term:p.get('utm_term')||''}; }

  /* ---- page/section context ---- */
  function pageType(){
    var b=document.body, k=b&&b.getAttribute('data-title-key');
    if(k==='partner')return 'partner';
    if(k==='about')return 'about';
    if(k==='cases')return 'cases_index';
    var p=location.pathname||'';
    if(p.indexOf('/casos/')>-1)return 'case_detail';
    if(p==='/'||p===''||/index\.html?$/.test(p))return 'home';
    return 'other';
  }
  function slugOf(href){
    if(!href)return ''; try{ href=href.split('#')[0].split('?')[0]; }catch(e){}
    var m=href.replace(/\/$/,'').split('/').pop()||'';
    return m.replace(/\.html?$/,'');
  }
  function nearestLoc(el){
    var loc=el.getAttribute&&el.getAttribute('data-track-loc'); if(loc)return loc;
    var s=el.closest&&el.closest('section[id],[id]');
    return (s&&s.id)||pageType();
  }

  /* ---- central tracker (no-op until consent loads gtag) ---- */
  function track(name, params){
    if(!window.gtag)return;
    params=params||{}; params.page_type=pageType(); params.page_lang=curLang();
    window.gtag('event', name, params);
  }
  window.dorTrack=track; // used by site.js (language_switch)

  function loadGA(){
    if(window.__dorGA)return; window.__dorGA=true; var u=utm();
    var s=document.createElement('script');
    s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
    gtag('js',new Date());
    gtag('config',GA_ID,{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false,
      campaign_source:u.source,campaign_medium:u.medium,campaign_name:u.campaign,campaign_content:u.content,campaign_term:u.term});
    track('page_landed',{event_category:'acquisition',utm_source:u.source,utm_medium:u.medium,
      utm_campaign:u.campaign,utm_content:u.content,referrer:document.referrer||'direct',landing_page:location.pathname});
    if(pageType()==='case_detail')track('case_view',{event_category:'interest',case:slugOf(location.pathname)});
    initEngagement();
  }

  /* ---- click funnel (delegated; track() guards consent) ---- */
  document.addEventListener('click',function(e){
    var t=e.target; if(!t||!t.closest)return;
    var a=t.closest('a,button'); if(!a)return;
    var href=a.getAttribute&&a.getAttribute('href')||'';
    var u=utm();
    if(href.indexOf('fantastical.app')>-1){
      track('schedule_call_click',{event_category:'conversion',cta_location:nearestLoc(a),
        utm_source:u.source,utm_campaign:u.campaign});
      return;
    }
    if(href.indexOf('mailto:')===0){
      track('email_click',{event_category:'conversion',email:href.replace('mailto:','')});
      return;
    }
    var caso=t.closest('.caso');
    if(caso){ track('case_card_click',{event_category:'interest',case:slugOf(caso.getAttribute('href')),from:pageType()}); return; }
    var card=t.closest('.card,.card--link');
    if(card){ var h=card.querySelector('h3'); track('service_click',{event_category:'interest',service:(h&&h.textContent||'').trim()}); return; }
    var navlink=t.closest('.nav a,.mnav a,.foot-col a');
    if(navlink){ track('nav_click',{event_category:'navigation',destination:navlink.getAttribute('href')||''}); return; }
    var btn=t.closest('.btn,.textlink,[data-cta]');
    if(btn){ track('cta_click',{event_category:'funnel',cta_label:(btn.textContent||'').trim().slice(0,60),cta_location:nearestLoc(btn)}); }
  },true);

  /* ---- engagement: section views + scroll depth (armed after consent) ---- */
  var engArmed=false;
  function initEngagement(){
    if(engArmed)return; engArmed=true;
    try{
      var io=new IntersectionObserver(function(es){
        es.forEach(function(en){ if(en.isIntersecting){
          var id=en.target.id||en.target.getAttribute('data-sect')||'section';
          track('section_view',{event_category:'engagement',section:id});
          io.unobserve(en.target);
        }});
      },{threshold:0.5});
      ['how','what','why','casos','contacto'].forEach(function(id){
        var el=document.getElementById(id); if(el)io.observe(el);
      });
      // also observe well-known blocks on subpages
      document.querySelectorAll('.case-result,.agenda,.founders,.stack-groups').forEach(function(el){
        if(!el.id){ io.observe(el); }
      });
    }catch(e){}

    var marks=[25,50,75,90], hit={}, raf=0;
    function onScroll(){
      if(raf)return; raf=requestAnimationFrame(function(){ raf=0;
        var de=document.documentElement, h=de.scrollHeight-de.clientHeight;
        if(h<=0)return; var pct=Math.min(100,Math.round((de.scrollTop||document.body.scrollTop)/h*100));
        marks.forEach(function(m){ if(pct>=m&&!hit[m]){ hit[m]=1; track('scroll_depth',{event_category:'engagement',percent:m}); } });
      });
    }
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }

  /* ---- consent banner (class-based; styled by site.css tokens) ---- */
  var banner=null, syncTimer=0;
  function setChoice(v){ try{localStorage.setItem(KEY,v);}catch(e){} }
  function buildBanner(){
    var b=document.createElement('div');
    b.className='cookie-banner'; b.id='dor-cc';
    b.setAttribute('role','dialog'); b.setAttribute('aria-live','polite'); b.setAttribute('aria-label','Cookies');
    b.innerHTML='<div class="wrap"><p data-cc-text></p>'+
      '<div class="cookie-banner__btns">'+
      '<button type="button" class="btn btn--ghost" data-cc="reject"></button>'+
      '<button type="button" class="btn" data-cc="accept"></button>'+
      '</div></div>';
    var pEl=b.querySelector('[data-cc-text]');
    var acc=b.querySelector('[data-cc="accept"]'), rej=b.querySelector('[data-cc="reject"]');
    var shownLang=null;
    function applyCopy(l){
      if(l===shownLang)return; shownLang=l; var c=COPY[l]||COPY.es;
      pEl.innerHTML=c.text+' <a class="policy-link" href="/privacidad.html">'+c.policy+'</a>.';
      acc.textContent=c.accept; rej.textContent=c.reject;
    }
    applyCopy(curLang());
    clearInterval(syncTimer); syncTimer=setInterval(function(){applyCopy(curLang());},400);
    acc.addEventListener('click',function(){ setChoice('accepted'); hide(); loadGA(); track('cookie_consent',{event_category:'compliance',choice:'accepted'}); });
    rej.addEventListener('click',function(){ setChoice('rejected'); window['ga-disable-'+GA_ID]=true; track('cookie_consent',{event_category:'compliance',choice:'rejected'}); hide(); });
    return b;
  }
  function show(){
    if(!banner){ banner=buildBanner(); }
    if(document.body && !banner.isConnected){ document.body.appendChild(banner); }
    requestAnimationFrame(function(){ if(banner) banner.classList.add('is-visible'); });
  }
  function hide(){
    if(!banner)return; banner.classList.remove('is-visible'); clearInterval(syncTimer);
    var b=banner; banner=null;
    setTimeout(function(){ if(b&&b.parentNode)b.parentNode.removeChild(b); },450);
  }
  // Withdraw / change consent from anywhere (e.g. the footer "Configurar cookies" link)
  window.dorOpenCookieSettings=show;
  document.addEventListener('click',function(e){
    var t=e.target&&e.target.closest&&e.target.closest('[data-cookie-settings]');
    if(t){ e.preventDefault(); show(); }
  },false);

  var choice=null;try{choice=localStorage.getItem(KEY);}catch(e){}
  if(choice==='accepted'){ loadGA(); }
  else if(choice==='rejected'){ window['ga-disable-'+GA_ID]=true; }
  else { if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show); else show(); }
})();
