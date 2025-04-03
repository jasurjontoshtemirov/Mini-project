window.addEventListener('DOMContentLoaded', function () {
    let open = this.document.querySelector('.open'),
     modal = this.document.querySelector('.Modal-container'),
     cancelModal=this.document.querySelector('#btn-cancel'),
     shopButton=this.document.querySelectorAll('.adds');
     console.log(shopButton);
     


    open.addEventListener('click', () => {
        modal.classList.toggle('suctesOff')
    });
    cancelModal.addEventListener('click',()=>{
        modal.classList.add('suctesOff')
    });


});