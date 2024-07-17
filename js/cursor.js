document.addEventListener('mousemove', function(e) {
    const cursorX = e.clientX;
    const cursorY = e.clientY;
  
    // Update the position of the interactive background element
    const interactiveElement = document.getElementById('interactive-background');
    if (interactiveElement) {
      const rect = interactiveElement.getBoundingClientRect();
      const offsetX = (cursorX - rect.left - rect.width / 2) / rect.width * 20;
      const offsetY = (cursorY - rect.top - rect.height / 2) / rect.height * 20;
  
      interactiveElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  });
  