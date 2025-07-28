//navigation code
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });


  window.onload = function () {
    // --- Dynamic Text ---
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
  
    // --- Shuffle Wallpapers ---
    const gallery = document.querySelector('.gallery');
    const wallpapers = Array.from(gallery.children);
  
    for (let i = wallpapers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wallpapers[i], wallpapers[j]] = [wallpapers[j], wallpapers[i]];
    }
  
    wallpapers.forEach(wallpaper => gallery.appendChild(wallpaper));
  };
    


//code for download button
document.addEventListener('DOMContentLoaded', function () {
  const downloadLinks = document.getElementsByClassName('download-link');

  for (let i = 0; i < downloadLinks.length; i++) {
    downloadLinks[i].addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const url = this.href;

      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const a = document.createElement('a');
          const downloadUrl = URL.createObjectURL(blob);
          a.href = downloadUrl;

          // Optional: use filename from the URL
          const filename = url.substring(url.lastIndexOf('/') + 1);
          a.download = filename;

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(downloadUrl);
        });
    });
  }
});