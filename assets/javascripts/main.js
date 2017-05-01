window.addEventListener('load', function() {
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener("click", function() {
    var headerMainNav = document.querySelector('.header__main-nav');
    headerMainNav.classList.toggle('show-menu');
  });

  var searchField = document.querySelector('.navbar__search-field');
  if(window.innerWidth < 961) {
    if(searchField.placeholder != "Search") {
      searchField.placeholder = "Search";
    }
  }
});


window.addEventListener('resize', function() {
  var searchField = document.querySelector('.navbar__search-field');
  if(window.innerWidth < 961) {
    if(searchField.placeholder != "Search") {
      searchField.placeholder = "Search";
    }
  } else {
    if(searchField.placeholder != "Find your next vintage camera") {
      searchField.placeholder = "Find your next vintage camera";
    }
  }
});

