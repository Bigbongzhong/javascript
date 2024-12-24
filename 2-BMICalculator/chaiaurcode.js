const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const a=parseInt(document.querySelector('#height').value)
    const b=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const res=a+b;
    result.textContent= res;
    
    
})