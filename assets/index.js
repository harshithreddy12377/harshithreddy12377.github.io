window.onload = function () {
    const target = document.getElementById("typing");
    const text = "Full Stack Developer";
    let index = 0;
  
    function type() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80); // Typing speed
      } else {
        setTimeout(erase, 1000); // Wait before erasing
      }
    }
  
    function erase() {
      if (index > 0) {
        target.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(erase, 50); // Erasing speed
      } else {
        setTimeout(type, 800); // Wait before typing again
      }
    }
  
    type();
  };