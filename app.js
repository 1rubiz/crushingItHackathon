  let currentNumber = 0;

// Increamenting function that increase the progress bar and the number of checked list
    function increaseProgress(increment) {
      currentNumber += increment;
      document.getElementById('numberDisplay').textContent = currentNumber;
      const width = progressBar.style.width

      const progressBar = document.getElementById('progressFill');
      const currentWidth = parseInt(width) + 20; // Assuming you want to reset the progress bar every 10 clicks
      progressBar.style.width = `${currentWidth}%`;
    }

// Increamenting function that decrease the progress bar and the number of checked list
    function decreaseProgress(){
      currentNumber += increment;
      document.getElementById('numberDisplay').textContent = currentNumber;
      const width = progressBar.style.width

      const progressBar = document.getElementById('progressFill');
      const currentWidth = parseInt(width) + 20; // Assuming you want to reset the progress bar every 10 clicks
      progressBar.style.width = `${currentWidth}%`; 
    }

// Toggle function to handle the checked and checked state of the sections
    function changeSvg() {
      // Get the SVG elements
      const defaultSvg = document.getElementById('defaultSvg');
      const checkSvg = document.getElementById('checkSvg');

      // Toggle visibility of SVGs
      defaultSvg.style.display = 'none';
      checkSvg.style.display = 'block';
    }

// Toggle function to handle the navigation panel
    function toggleNav() {
      // Get the elements by their IDs
      const element = document.getElementById(tag);

      // Toggle the display property
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }

// Toggle function to handle the notifiation panel
    function toggleNotification(tag) {
      // Get the elements by their IDs
      const element = document.getElementById(tag);

      // Toggle the display property
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }

// Toggle function to handle the details
    function toggleElements(tag) {
      // Get the elements by their IDs
      const element = document.getElementById(tag);

      // Toggle the display property
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }