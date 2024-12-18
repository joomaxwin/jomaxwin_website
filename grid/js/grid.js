window.onload = function() {
    const gridContainer = document.getElementById('gridContainer');

    // Sample images array
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg'
    ];

    // Create grid items
    images.forEach(image => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        const img = document.createElement('img');
        img.src = image;
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
};
