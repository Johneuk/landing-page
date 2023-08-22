window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxSpeed = 0.5; // Adjust the speed as needed
    var backgroundPosition = (scrollPosition * parallaxSpeed) - 2000; // Subtract a value to move the image up
    document.querySelector('.parallax-background').style.transform = 'translateY(' + backgroundPosition + 'px)';
  });