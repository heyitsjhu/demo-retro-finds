window.addEventListener('load', function() {
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener("click", function() {
    var headerMainNav = document.querySelector('.header__main-nav');
    headerMainNav.classList.toggle('show-menu');
    console.log('hihi');
  });
});
