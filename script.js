const boxes = document.querySelectorAll('.inner');

const boxStates = {
    box1: { isDarkMode: false },
    box2: { isDarkMode: false },
    box3: { isDarkMode: false }
};

boxes.forEach(box => {
    const tick = box.querySelector('.tick');
    const image = box.querySelector('.image');
    const id = box.id; 

    tick.addEventListener('click', () => {
        const isDarkMode = !boxStates[id].isDarkMode;
        boxStates[id].isDarkMode = isDarkMode;
        if (id === 'box1') {
            if (isDarkMode) {
                tick.innerHTML = 
                    `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2" fill="#2e3343"/>
                        <path d="M16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#F1F3F4"/>
                    </svg>`;
                image.src = "prod_list_dark.svg";
                box.style.borderColor = "#2e3343";
            } else {
                tick.innerHTML = 
                    `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill=""></circle>
                    </svg>`;
                image.src = "prod_list_light.svg";
                box.style.borderColor = "#E3E3E3";
            }
        } 
        
        else if (id === 'box2') {
            if (isDarkMode) {
                tick.innerHTML = 
                    `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2" fill="#2e3343"/>
                        <path d="M16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#F1F3F4"/>
                    </svg>`;
                image.src = "prod_detail_dark.svg";
                box.style.borderColor = "#2e3343";
            } else {
                tick.innerHTML = 
                    `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill=""></circle>
                    </svg>`;
                image.src = "prod_detail_light.svg";
                box.style.borderColor = "#E3E3E3";
            }
        } 
        else if (id === 'box3') {
            if (isDarkMode) {
                tick.innerHTML = 
                    `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="black" stroke-width="2" fill="#2e3343"/>
                        <path d="M16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#F1F3F4"/>
                    </svg>`;
                image.src = "pdpl_dark.svg";
                box.style.borderColor = "#2e3343";
            } else {
                tick.innerHTML = 
                    `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill=""></circle>
                    </svg>`;
                image.src = "pdpl_light.svg";
                box.style.borderColor = "#E3E3E3";
            }
        }
    });
});


