// 1. Create the container
const section = document.createElement('section');
section.style.padding = '40px';
section.style.fontFamily = 'Arial, sans-serif';

// 2. Create the Heading
const heading = document.createElement('h2');
heading.textContent = 'Top ranking universities';
section.appendChild(heading);

// 3. Create the grid container
const grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
grid.style.gap = '20px';
section.appendChild(grid);

// 4. Data
const universities = ['Stanford University', 'Stallion University', 'Covenant University'];

// 5. Generate cards using JS logic
universities.forEach(name => {
    const card = document.createElement('div');
    card.style.border = '1px solid #ddd';
    card.style.padding = '20px';
    card.style.textAlign = 'center';
    
    const title = document.createElement('h3');
    title.textContent = name;
    
    const link = document.createElement('a');
    link.textContent = 'See University';
    link.href = '#';
    link.style.display = 'block';
    link.style.marginTop = '10px';
    
    card.appendChild(title);
    card.appendChild(link);
    grid.appendChild(card);
});

// 6. Mount to the DOM
document.body.appendChild(section);