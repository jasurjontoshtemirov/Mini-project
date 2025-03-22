window.addEventListener('DOMContentLoaded', function () {

    let product = document.querySelectorAll('.card'),
        ProductButton = document.querySelectorAll('.btn'),
        OpenButton = document.querySelectorAll('.open');

    function createCart() {
        let card = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement('button');
            card.classList.add(`card`);
            field.classList.add(`field`);
            close.classList.add(`close`);
            heading.textContent="Sizning mahsulotlaringiz";
            close.textContent="Close";
            document.body.appendChild(card);
            card.appendChild(heading);
            card.appendChild(field);
            card.appendChild(close)


    }

    createCart()

    
    OpenButton.addEventListener('click', function () {
        card.style.display = 'block';
    });





});