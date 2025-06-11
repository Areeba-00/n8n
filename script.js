const catButtons = document.querySelectorAll('.cat-btn');
const catsSection = document.getElementById('categories');
const templatesContainer = document.getElementById('templates-container');
const listSection = document.getElementById('template-list');
const backToCats = document.getElementById('back-to-cats');

catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-cat');
    showTemplates(cat);
    listSection.classList.remove('hidden');
    catsSection.classList.add('hidden');
  });
});

function showTemplates(cat) {
  templatesContainer.innerHTML = '';
  templates[cat].forEach(temp => {
    const div = document.createElement('div');
    div.className = 'template-item';
    div.innerHTML = `
      <img src="images/i${temp.id}.jpg" alt="${temp.title}" />
      <div>
        <p><strong>${temp.title}</strong></p>
        <p>${temp.date}</p>
      </div>`;
    div.addEventListener('click', () => {
      window.location.href = `template.html?id=${temp.id}`;
    });
    templatesContainer.appendChild(div);
  });
}

backToCats.addEventListener('click', () => {
  listSection.classList.add('hidden');
  catsSection.classList.remove('hidden');
});