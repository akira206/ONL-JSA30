const buttonQuery = document.querySelector("#button")
const h1Query = document.querySelector("#h1id")
const h2Query = document.querySelector("#h2id")
const h3Query = document.querySelector("#h3id")
const h4Query = document.querySelector("#h4id")
function Turnonprompt()
{
    const getName = prompt("nhập tên của bạn?")
    const getHeight = prompt("chiều cao của bạn?")
    const getWeight = prompt("cân nặng của bạn?")
    const getAge = prompt("tuổi của bạn?")

    const userInfo = {
        userName:getName,
        userHeight:getHeight,
        userWeight:getWeight,
        userAge:getAge,
    }

    h1Query.innerText = userInfo.userName
    h2Query.innerText = userInfo.userHeigh
    h3Query.innerText = userInfo.userWeight
    h4Query.innerText = userInfo.userAge
}
