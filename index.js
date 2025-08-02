
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = "🌙 Dark Mode";
  toggleBtn.classList.add('toggle-btn');
  document.querySelector('header').appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });

