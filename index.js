var container = document.getElementById('container')

var students = [
    {
        name: 'Faiz',
        age: 20,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'ABDUL',
        age: 15,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Abc',
        age: 15,
        fatherName: 'Khan',
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]





// var userdeta = [{
//     Name: prompt("what is your name"),
//     FatherName: prompt("whay is your father name"),
//     age: prompt("waht is your age"),
//     image: prompt()
// }
// ];


var Name = document.getElementById("name");
var fatherName = document.getElementById("father-name");
var Age = document.getElementById("age");
var image = document.getElementById("image");
var sbmitBtn = document.getElementById("sbmt-btn");
var container2 = document.getElementById("container2")


sbmitBtn.addEventListener("click", userDeta)

function userDeta() {

if(Name.value === "" || fatherName.value === "" || Age === ""){

    alert("please submit in the compeleted details.........")
} else{

    var userBox = `<div class = 'userbox'>
    <img src=${image.value} class = 'userImg' />
    <h6>Name :  ${Name.value}</h6>
    <h6>Father Name :  ${fatherName.value}</h6>
    <h6>Age :  ${Age.value}</h6>
    </div>`

    container2.innerHTML += userBox

    
    
}


}





// function Plan(name , price){
//     this.planName = name
//     this.price = price
// }

// var plan1 = new Plan("basic", 500)
// var plan2 = new Plan("standerd", 1500)


// console.log(plan1)
// console.log(plan2)






// var img = document.createElement("img")
// var box = document.createElement("div")
// img.src=image.value
// img.className = "userImg"
// // var nam = document.createElement("span")

// var h4 = document.createComment("h4")
// box.innerText =  " Name : " + Name.value  + "\n Father Name : " + fatherName.value + "\n Age : " + Age.value
// box.className = "userdeta-box"
// box.appendChild(img)
// box.appendChild(h4)
// container2.appendChild(box)