let = ['Phước','Ngọc','Hân','Long']
localStorage.setItem('users', JSON.stringify(users))

let get_users = JSON.parse(localStorage.getItem('users'))
console.log(get_users)
let index = get_users.indexOf('Phước')
console.log(index)
get_users.splice(index,1,'Hà')
console.log(get_users)

localStorage.setItem('users', JSON.stringify(get_users))

let name_ha = get_users.indexOf('Hà')
get_users.splice(name_ha,1)
localStorage.setItem('users', JSON.stringify(get_users))

localStorage.removeItem('users')