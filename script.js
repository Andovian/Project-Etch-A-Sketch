const container = document.getElementById('container');
const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', () => {
    let size = prompt('Enter a size between 1 - 100');

    if (size < 1 || size > 100) {
        let size = prompt('Enter a size between 1 - 100');
        console.log(size);
    }  
    
    container.textContent = "";

    container.setAttribute('id', 'newContainer');
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    
    for (i = 0; i < size * size; i++) {
        let newBoxes = document.createElement('div');
        newBoxes.setAttribute('id', 'newBoxes');
        container.append(newBoxes);

        newBoxes.addEventListener('mouseenter', (box) => {
            box.target.style.background = 'black';
        });
    }
    wrapper.append(container);
});

for (i = 1; i < 257; i++) {
    let boxes = document.createElement('div');
    boxes.setAttribute('id', `boxes`);
    container.append(boxes);

    boxes.addEventListener('mouseenter', (box) => {
        box.target.style.background = 'black';
    });
}

















