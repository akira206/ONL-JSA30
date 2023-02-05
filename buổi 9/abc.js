let demo = document.querySelector('.post')
let title = document.querySelector('.post')
// let url = document.querySelector('.post')
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        let get_data = data.map((item,index) => {
            return item.title
        })
        console.log(data)
        console.log(get_data)
        for ( let post of data){
            console.log(title)
            title.innerHTML += `
                <div class="post">
                    <img src="${post.image_link}" alt="">
                    <h1>${post.name}</h1>
                    <p>${post.price}</p>
                </div>
            `
        }
    })
    .catch(err => {
        console.log(err)
    })
