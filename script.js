// Generate 20 templates with different prices and names
const templates = {};
for(let i=1; i<=20; i++){
    // Set prices with a pattern for example:
    // 1-10: $50, $55, $60, $65,...; 11-20: $100, $110, etc.
    let price;
    if(i <= 10){
        price = "$" + (45 + i*5); // $50, $55, $60, ...
    } else {
        price = "$" + (90 + (i-10)*10); // $100, $110, $120, ...
    }

    templates[i] = {
        price: price,
        email: "beba128242005@gmail.com",
        message: "Contact to buy this template.",
        imgSrc: `https://via.placeholder.com/600x400?text=Template+${i}+Large`,
        name: `Template ${i}`
    };
}

// Get references to DOM elements
const homeSection = document.getElementById('home');
const templateListDiv = homeSection.querySelector('.template-list');
const detailsSection = document.getElementById('details');
const templateDetailsDiv = document.getElementById('templateDetails');
const backBtn = document.getElementById('backBtn');

// Dynamically create template items in homepage
function createTemplateItems(){
    for(let id in templates){
        const template = templates[id];

        const div = document.createElement('div');
        div.classList.add('template-item');
        div.setAttribute('data-id', id);

        // Image and name inside
        div.innerHTML = `
            <img src="https://via.placeholder.com/300x200?text=Template+${id}" alt="${template.name}" />
            <p>${template.name}</p>
        `;

        // Click event to show details
        div.addEventListener('click', () => {
            showDetails(id);
        });

        templateListDiv.appendChild(div);
    }
}

// Show details section and populate content based on selected template
function showDetails(id) {
    const template = templates[id];

    templateDetailsDiv.innerHTML = `
        <h2>${template.name}</h2>
        <img src="${template.imgSrc}" alt="${template.name}" />
        <p><strong>Price:</strong> ${template.price}</p>
        <p><strong>Contact:</strong> <a href="mailto:${template.email}">${template.email}</a></p>
        <p>${template.message}</p>
    `;

    // Hide homepage and show details
    homeSection.classList.add('hidden');
    detailsSection.classList.remove('hidden');

    // Scroll to top so details visible immediately
    window.scrollTo(0,0);
}

// Back button returns to homepage
backBtn.addEventListener('click', () => {
    detailsSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
});

// Initialize homepage templates on page load
createTemplateItems();
