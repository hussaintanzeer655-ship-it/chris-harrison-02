// Timeline glow toggle and theme
(function(){
  const btn=document.getElementById('themeBtn');
  if(btn){
    btn.addEventListener('click',()=>{
      const isDark=document.documentElement.style.getPropertyValue('--bg')==='rgb(0, 0, 0)';
      document.documentElement.style.setProperty('--bg', isDark?'#111':'#000');
      document.documentElement.style.setProperty('--fg', isDark?'#eee':'#fff');
    });
  }
})();