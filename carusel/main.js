const Form =document.querySelector('.form');
const Ism=document.querySelector('#ism');
const Familya=document.querySelector('#firstname');
const Yosh=document.querySelector('#age');
const Tbody=document.querySelector('.tbody');
let i=1;
Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(Ism.value=='' || Familya.value=='' || Yosh.value==''){
        alert('Iltimos barcha maydonlarni to\'ldiring');
    }else{
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${i++}</td>
        <td>${Ism.value}</td>
        <td>${Familya.value}</td>
        <td>${Yosh.value}</td>
        `
        Tbody.appendChild(tr);

        
       
    }
    Ism.value='';
    Familya.value='';
    Yosh.value='';
})
