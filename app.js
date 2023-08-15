(async function getData() {
    // console.log("hello")
    const response = await fetch("https://student-data.cyclic.app/v1/studentData/getStudent")
    const Data = await response.json()
    // console.log(Data.data.data)
    uiCreation(Data.data.data)
})();

function uiCreation(Data) {
    let student = document.getElementById('student-container')
    Data.forEach((item) => {
        const { className, rollNo, name, section } = item;
        let studentBox = document.createElement("div")
        studentBox.classList.add('student')
        studentBox.innerHTML = `<p>Roll No: ${rollNo}</p>
        <p>Name: ${name}</p>
        <p>Class: ${className}</p>
        <p>Section: ${section}</p>
        <div class="btns">
        <button id="edit">Edit</button>
        <button class="view" onclick="showProfile(${rollNo})">View</button>
        <button id="delete">Delete</button>
        </div>`
        // console.log(studentBox)
        student.appendChild(studentBox)
    })
}

const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('#close')

closeBtn.addEventListener('click', () => {
    document.querySelector('.show').classList.add('hide')
    document.querySelector('.overlay').classList.add('hide')
})

async function showProfile(rollNo) {
    document.querySelector('.show').classList.remove('hide')
    document.querySelector('.overlay').classList.remove('hide')
    console.log(rollNo)
    const response = await fetch(`https://student-data.cyclic.app/v1/studentData/getStudent/${rollNo}`)
    const Data = await response.json()

    console.log(Data)
    console.log(Data.data)
    console.log(Data.data.data)
}


