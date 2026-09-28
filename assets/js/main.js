(function(){
  // Mobile menu: built from the desktop nav links
  var menuBtn=document.querySelector('button[aria-controls="mobile-nav"]');
  var nav=document.querySelector('nav[aria-label="Main"]');
  if(menuBtn&&nav){
    var panel=document.createElement('div');
    panel.id='mobile-nav';panel.className='sn-panel';
    nav.querySelectorAll('a').forEach(function(a){
      var c=document.createElement('a');c.href=a.getAttribute('href');c.textContent=a.textContent.trim();
      c.addEventListener('click',function(){toggle(false)});panel.appendChild(c);
    });
    var book=document.querySelector('a[href="#book"]');
    if(book){var b=document.createElement('a');b.href='#book';b.textContent='Book Appointment';
      b.style.cssText='background:#1f6b4f;color:#fff;text-align:center;margin-top:6px';
      b.addEventListener('click',function(){toggle(false)});panel.appendChild(b);}
    document.body.appendChild(panel);
    function toggle(open){
      if(typeof open!=='boolean')open=!panel.classList.contains('open');
      panel.classList.toggle('open',open);
      menuBtn.setAttribute('aria-expanded',open);
      menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
    }
    menuBtn.addEventListener('click',function(){toggle()});
  }
  // Floating contact button
  var fab=document.querySelector('button[aria-label="Open contact options"]');
  if(fab){
    var box=document.createElement('div');box.className='sn-contact';
    [['Call us','tel:+251911234567'],['WhatsApp','https://wa.me/251911234567'],
     ['Telegram','https://t.me/selamhealthclinic'],['Email','mailto:hello@selamhealth.example']]
    .forEach(function(x){var a=document.createElement('a');a.textContent=x[0];a.href=x[1];
      if(x[1].indexOf('http')===0){a.target='_blank';a.rel='noopener';}box.appendChild(a);});
    fab.parentNode.insertBefore(box,fab);
    fab.addEventListener('click',function(){
      var o=!box.classList.contains('open');box.classList.toggle('open',o);
      fab.setAttribute('aria-expanded',o);
    });
  }
})();
