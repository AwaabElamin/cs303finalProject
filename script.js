// class User {
//     constructor(userName, password) {
//         this.userName = userName;
//         this.password = password;
//     }
// }
let users = new Map();
users.set("Awaab", "Password");
let courses = new Map();
Map.prototype.sort = function () {
    console.log("sort");
}
courses.set("CS105", "Problem Solving");
courses.set("STC506A", "The Science and Technology of Consciousness");
courses.set("CS201", "Procedural Programming");
courses.set("CS203", "Object Oriented Programming");
courses.set("CS272", "Discrete Structures");
courses.set("CS221", "Data Structures");
courses.set("STC506B", "Leadership for Technical Managers");
courses.set("CS301", "Intro to Programming with JavaScript");
courses.set("CS303", "Object-Oriented Programming in JavaScript");

function login() {
    if (document.getElementById("btnLogin").innerHTML === "loging") {
        let userName = document.getElementById("userName").value;
        let password = document.getElementById("password").value;
        if (users.get(userName) === password) {
            document.getElementById("main").style.display = "table";
            document.getElementById("btnLogin").innerHTML = "logout";
            document.getElementById("btnCreate").style.display = "none";
            document.getElementById("loginBlock").style.display = "none";
        } else {
            document.getElementById("errorLogin").innerHTML = "We do not have this user";
        }

    } else {
        document.getElementById("main").style.display = "none";
        document.getElementById("btnLogin").innerHTML = "loging";
        document.getElementById("btnCreate").style.display = "block";
        document.getElementById("loginBlock").style.display = "block";
    }

}
function newUser() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (isValidStringInput(userName) && isValidStringInput(password)) {
        if (users.get(userName) === undefined) {
            users.set(userName, password);
            console.log(users);
        } else {
            console.log("user already defined");
        }
    } else {// the input is not valid (user didn't enter values)
        document.getElementById("errorLogin").innerHTML = "invalid Input";
    }

}
function isValidStringInput(value) {
    let result = value.trim();
    if (result.length === 0) {
        return false;
    }
}
function viewAllCourses() {
    printOutInMainView(courses);

}
function sortCoursesByCode() {
    let sortedMap = new Map([...courses.entries()].sort());
    printOutInMainView(sortedMap);
}
function sortCoursesByCourseName(){
    let sortedMap = new Map([...courses.entries()].sort((a, b) => b[1] - a[1])); 
    printOutInMainView(sortedMap);
}
function printOutInMainView(items) {
        let result = "";
        for (let [key, value] of items) {
            result += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        document.getElementById("viewData").innerHTML = result;
}
function searchByName(){
    let searchByName = document.getElementById("searchByName").value;
    let result = "";
    for (let [key, value] of courses) {
        if (value.includes(searchByName)) {
            result += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
    }
    document.getElementById("viewData").innerHTML = result;
}

