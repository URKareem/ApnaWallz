//navigation code
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

//for dyanamic text
window.onload = function() {
    const lines = ["One Tap, Endless Wallpapers", "Your Phone, Your Style"];
    let currentLine = 0;
    let charIndex = 0;
    let typing = true;
    const speed = 100;
    const pauseBetween = 1500;
  
    const el = document.getElementById("dynamic-heading");
  
    function typeEffect() {
      const currentText = lines[currentLine];
  
      if (typing) {
        el.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
          typing = false;
          setTimeout(typeEffect, pauseBetween);
          return;
        }
      } else {
        el.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          typing = true;
          currentLine = (currentLine + 1) % lines.length;
          setTimeout(typeEffect, speed);
          return;
        }
      }
  
      setTimeout(typeEffect, speed);
    }
  
    typeEffect();
  };