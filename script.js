function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.add('active', 'animated-text');
    } else {
      section.classList.remove('active', 'animated-text');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active-link');
  });
  document.getElementById('nav-' + sectionId).classList.add('active-link');
        }
