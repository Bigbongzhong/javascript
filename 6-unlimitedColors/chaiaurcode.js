const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<=5; i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
document.querySelector('#start').addEventListener('click', (e)=>{
    function cbc(){
        document.body.style.backgroundColor = randomColor()
    }
        if (!intervalId) {
            intervalId=setInterval(cbc,1000);
        }
})
document.querySelector('#stop').addEventListener('click', (e)=>{
    clearInterval(intervalId)
    intervalId = null;
})
