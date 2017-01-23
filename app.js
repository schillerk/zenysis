document.addEventListener("DOMContentLoaded", function(){
  var el = document.getElementById('nav-icon2')
  el.onclick = function(){
    el.classList.toggle('open');
  };
});

// http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
// fade out
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    // console.log(el.style);
    // console.log(el.style.left.slice(0,-2));
    // console.log(el.style.opacity);
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = 'none';
      el.classList.add('is-hidden');
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  if (el.classList.contains('is-hidden')){
    el.classList.remove('is-hidden');
  }
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    // if ((el.style.opacity += .04) > 1 || (el.style.left = parseInt(el.style.left.slice(0,-2)) - 4 + 'px') > 0) {
    if (!((val += .02) > 1) || (el.style.left = parseInt(el.style.left.slice(0,-2)) + 4 + 'px') > 0) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
