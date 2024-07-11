// Get the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add event listener to the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark mode class on the body
  document.body.classList.toggle('dark-mode');
});

// Get the project containers
const projectContainers = document.querySelectorAll('.project-container');

// Add event listeners to the project containers
projectContainers.forEach((container) => {
  container.addEventListener('click', (event) => {
    // Get the project URL from the container's href attribute
    const projectUrl = event.currentTarget.getAttribute('href');

    // Open the project in a new tab or window
    window.open(projectUrl, '_blank');
  });
});
