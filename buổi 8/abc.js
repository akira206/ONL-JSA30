let demo_text = document.getElementById('demo')
let title = document.querySelector('.posts')
console.log(title)
title.innerHTML = 'abc'
demo_text.innerHTML = 'Demo'
console.log(demo_text);
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        // let get_data = data.map( (item,index) =>{
        //     return item.title
        // })
        // console.log(data)
        for ( let post of data){
            console.log(title)
            title.innerHTML += `
                <div class="post">
                    <h1>${post.title}</h1>
                    <img src="${post.url}" alt=""> 
                </div>
            `
        }
    })
    .catch(err => {
        console.log(err)
    })

let num = [1,2,3,4]
let get_num = num.map( (value, index) =>{
    return value*2
})    
console.log(num)
console.log(get_num)