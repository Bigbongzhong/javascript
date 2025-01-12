const jokes=document.getElementById('joke')
const button=document.getElementById('next-joke-btn')
button.addEventListener('click', (e)=> {
    e.preventDefault();
    jokes.innerText="Loading.....🤔"
async function users() {
    
    try {
        const api='https://api.api-ninjas.com/v1/dadjokes'
        const header={
             headers : {'X-Api-Key' : 'dmPZj3DMVKcisGqd17IQAQ==I3zHSSyGXc8ZL0fq'}
            }
        const response = await fetch(api,header)
        const data= await response.json();
        console.log(data[0].joke);
        jokes.innerText= data[0].joke;
        
    } catch (error) {
        console.log("error",error);
        
    }
}
users()
})
