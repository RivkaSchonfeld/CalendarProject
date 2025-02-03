
//when you write new  Date("2024/04/02") this gives you the date that is put in the brackets 
//but if you write  Date("2024/04/02") without the 'new' even with the date inside it gives you todays date 


const users = [
    { id: 1, name: "Rivka Schonfeld", password: "1234", email: "r1234@gmail.com", city: "Ramat Beit Shemesh", phone: "0583294142" },
    { id: 2, name: "Michal Schonfeld", password: "1235", email: "m1235@gmail.com", city: "Ramat Beit Shemesh", phone: "0583294102" }
];

const days = [//the array of days according to user and date, each day has its list of reminders
    { id: 1, user: 2, date: new Date("2024/04/02"), list: ["Get the boys at 5", "Piano at 4"] },
    { id: 2, user: 1, date: new Date("2024/04/10"), list: ["Have a test in math"] },
    { id: 3, user: 1, date: new Date("2024/04/11"), list: ["'till today I can sign up for the lesson", "Dentist oppointment at 2"] },
    { id: 4, user: 2, date: new Date("2024/04/04"), list: ["Happy birthday to me!"] }
];



//this is if the user is new or the day is empty
const extraDays = ["Appointment at 4", "Rosh Chodesh", "Abba and Imma's anniversary",
    "I took the library book", "Test in history", "Today the contest finishes",
    "Starting school", "The three months finished", "Chana's wedding",
    "Vacation", "Lag Ba'omer", "Go babysit at 3", "Today is the last day to pay",
    "Ballet at 6", "Driving test at 3", "Isru Chag", "Soon is my birthday!", "Bagrut in computers"];



const tasks = [//list of tasks connect to its user
    { id: 1, user: 1, task: "Clean up your room" },
    { id: 2, user: 1, task: "Fix the light" },
    { id: 3, user: 2, task: "Finish writing the poem" },
    { id: 4, user: 2, task: "Must give the library book back" }
];

//this is if the user is new or the day is empty
const extraTasks = ["Give maaser", "Buy shoes", "Sew the skirt", "Paint the wall",
    "Try baking the cake", "Practice piano", "Find a good tune for the song",
    "Check the essay", "Read the book", "Sharpen all the pencils",
    "Neaten up the draw", "Cut your hair", "Order the couch", "Give the bags to the gemach",
    "Must study for navi", "Try building the bookshelf", "Call Bobby",
    "Suggest the shidduch", "Throw out all the junk", "Milk the cow"];


const eraseremindersandtasks = [];//this array will contain the texts that were erased

if (localStorage.getItem("days") == null) //if the arrays are not stored in local storage then store them there
    localStorage.setItem("days", JSON.stringify(days));

if (localStorage.getItem("tasks") == null)
    localStorage.setItem("tasks", JSON.stringify(tasks));

if (localStorage.getItem("usersArray") == null)
    localStorage.setItem("usersArray", JSON.stringify(users))


localStorage.setItem("dateOpened", new Date());//now i know what date is opened

// this function takes the information from logging in and checks if it is valid.
function getInformationFromLogin(event) {

    const target = event.target;
    const name = target.name.value;
    const password = target.password.value;
    // verify this user
    let i;
    const users1 = JSON.parse(localStorage.getItem("usersArray"));
    for (i = 0; i < users1.length; i++) {
        const user = users1[i];
        if (user.name == name && user.password == password)
            break;
    }

    if (i != users1.length) {
        alert("Hello " + users1[i].name + " welcome back");
        localStorage.setItem("user", users1[i].id);//sent the users id to the local storage
        localStorage.setItem("usersArray", JSON.stringify(users1));//prob extra
        return true;//i must know if it worked to continue on
    }

    else
        return false;//tell the function that called you that the details are incorrect



}//was tested
//this function was called by the function loginButton()


//this function takes the information from registry and makes a new user
//it also verifies the password
function registry(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const password = target.password1.value;
    const passVeri = target.passwordVerification.value;
    const email = target.email.value;
    const city = target.city.value;
    const phone = target.phone.value;
    const userArray=JSON.parse(localStorage.getItem("usersArray"));
    if (password != passVeri)
        alert("please verify your password");
    else {
        //making a new user
        alert("Thank you for joining us " + name)
        const objUser = { id: users.length + 1, name, password, email, city, phone };
        userArray.push(objUser);// and putting it in the users array
        localStorage.setItem("usersArray",JSON.stringify(userArray));
        localStorage.setItem("user", objUser.id);//puting the user's id in the local storage to know who we are dealing with
        //sending the new user to know what to show him
        showChoosingPage();
    }
}//was tested


//------------------show and hide functions

//I chose to show and hide with classes because the html of the pages are static!!

function showLoginPage() {  //adding show and hide classes for the pages that need

    const login = document.getElementById("loginDiv");
    login.classList.add("show");
    login.classList.remove("hide");

    const reg = document.getElementById("registryDiv");
    reg.classList.remove("show");
    reg.classList.add("hide");

    const choose = document.getElementById("choosingPage");
    choose.classList.remove("show");
    choose.classList.add("hide");

    const calendar = document.getElementById("myCalendar");
    calendar.classList.remove("show");
    calendar.classList.add("hide");

    const task = document.getElementById("taskPage");
    task.classList.remove("show");
    task.classList.add("hide");


}


function showRegisterPage(event) {  //adding show and hide classes for the pages that need
    event.preventDefault();

    const login = document.getElementById("loginDiv");
    login.classList.remove("show");
    login.classList.add("hide");

    const reg = document.getElementById("registryDiv");
    reg.classList.add("show");
    reg.classList.remove("hide");

    const choose = document.getElementById("choosingPage");
    choose.classList.remove("show");
    choose.classList.add("hide");

    const calendar = document.getElementById("myCalendar");
    calendar.classList.remove("show");
    calendar.classList.add("hide");

    const task = document.getElementById("taskPage");
    task.classList.remove("show");
    task.classList.add("hide");
}


function showChoosingPage() {//adding show and hide classes for the pages that need

    const login = document.getElementById("loginDiv");
    login.classList.remove("show");
    login.classList.add("hide");

    const reg = document.getElementById("registryDiv");
    reg.classList.remove("show");
    reg.classList.add("hide");

    const choose = document.getElementById("choosingPage");
    choose.classList.add("show");
    choose.classList.remove("hide");

    const calendar = document.getElementById("myCalendar");
    calendar.classList.remove("show");
    calendar.classList.add("hide");

    const task = document.getElementById("taskPage");
    task.classList.remove("show");
    task.classList.add("hide");


}


function showCalendarPage() {//adding show and hide classes for the pages that need

    const login = document.getElementById("loginDiv");
    login.classList.remove("show");
    login.classList.add("hide");

    const reg = document.getElementById("registryDiv");
    reg.classList.remove("show");
    reg.classList.add("hide");

    const choose = document.getElementById("choosingPage");
    choose.classList.remove("show");
    choose.classList.add("hide");

    const calendar = document.getElementById("myCalendar");
    calendar.classList.add("show");
    calendar.classList.remove("hide");

    const task = document.getElementById("taskPage");
    task.classList.remove("show");
    task.classList.add("hide");

}


function showTasksPage() {//adding show and hide classes for the pages that need

    const login = document.getElementById("loginDiv");
    login.classList.remove("show");
    login.classList.add("hide");

    const reg = document.getElementById("registryDiv");
    reg.classList.remove("show");
    reg.classList.add("hide");

    const choose = document.getElementById("choosingPage");
    choose.classList.remove("show");
    choose.classList.add("hide");

    const calendar = document.getElementById("myCalendar");
    calendar.classList.remove("show");
    calendar.classList.add("hide");

    const task = document.getElementById("taskPage");
    task.classList.add("show");
    task.classList.remove("hide");

}

//--------the end of hiding and showing functions


//render functions:::::::::::::::;

//this function finds the day that was searched for and renders its content
//if it is empty it will fill the day with random reminders and make an object for this user on this day

let amountOfTimesTheDayWasEmpty = 0;
function renderDay() {
    const user = parseInt(localStorage.getItem("user"));
    const date = localStorage.getItem("dateOpened");
    const day = document.getElementById("ulInReminders");
    day.innerHTML = "";

    const days2 = JSON.parse(localStorage.getItem("days"));

    //this will find the date that im looking for according to the user , year, month and day.
    let index;
    let dayObj;
    for (index = 0; index < days2.length; index++) {
        const obj = days2[index];
        if (obj.user == user && new Date(obj.date).getFullYear() === new Date(date).getFullYear() && new Date(obj.date).getMonth() === new Date(date).getMonth() && new Date(obj.date).getDate() === new Date(date).getDate()) {
            dayObj = obj;
            break;
        }

    }//to find the day I am looking for

    if (dayObj == undefined) {//if the day is empty for this specific user then make fake reminders but only up to two times
        amountOfTimesTheDayWasEmpty++;

        if (amountOfTimesTheDayWasEmpty < 3) {//so that i wont fill the days too many times
            const addition1 = Math.floor(Math.random() * (extraDays.length - 1)) + 1;
            const addition2 = Math.floor(addition1 / 2);//to choose 2 reminders without going over the same one

            const temp = { id: days2.length + 1, user, date, list: [extraDays[addition1], extraDays[addition2]] };

            days2.push(temp);
            localStorage.setItem("days", JSON.stringify(days2));
            //now i made an objects for this new user and pushed two reminders in the day that is opened  and pushed the object in the array
            //and saved it in the local storage

            /*if i wouldn't do recoursion i would have to do this */
            // const forHtml1 = `<li>${extraDays[addition1]}</li>`;//adding the first random reminder
            // day.innerHTML += forHtml1;
            // const forHtml2 = `<li>${extraDays[addition2]}</li>`;//adding the second random reminder
            // day.innerHTML += forHtml2;

            renderDay();

            alert("the day is empty but we will fill it in for you");
        }

        else
            alert("the day is empty but will not be filled in");

    }
    //render
    //if the day is not empty then show its content
    else {// if the object was defined
        for (let i = 0; i < dayObj.list.length; i++) {
            const forHtml = `<li  onclick="eraseLi(event,'d',${index},${i})">${dayObj.list[i]}</li>`;
            day.innerHTML += forHtml;
        }

        //this is to say the date that is shown example: Date: 08/08/2024
        const opened = document.getElementById("dateThatIsOpened");

        let a = new Date(date).getDate();
        if (a < 10)
            a = "" + "0" + a;//i did this for it to look good

        let b = new Date(date).getMonth();
        if (b < 9) {
            b++;//i did this because get month gives a month before
            b = "" + "0" + b;
        }

        const forhtml = `Date: ${a}/${b}/${new Date(date).getFullYear()}`;
        opened.innerHTML = forhtml;

    }
    renderDates();

}



//render tasks


function renderTasks() {//was tested
    const user = parseInt(localStorage.getItem("user"));

    const tasks2 = JSON.parse(localStorage.getItem("tasks"));

    const taskArray = tasks2.filter(i => i.user == user);//to find the users list
    const list = document.getElementById("listOfTasks");
    list.innerHTML = "";

    if (taskArray.length == 0) {//if the user has no list

        const addition1 = Math.floor(Math.random() * (extraTasks.length - 1)) + 1;
        const addition2 = Math.floor(addition1 / 2);//to choose 2 tasks without going over the same one

        const temp1 = { id: tasks2.length + 1, user: user, task: extraTasks[addition1] };
        tasks2.push(temp1);
        const temp2 = { id: tasks2.length + 1, user, task: extraTasks[addition2] };
        tasks2.push(temp2);
        //now i made two objects for this new user and pushed it in the original array

        // const forHtml1 = `<li>${extraTasks[addition1]}</li>`;//adding the first random task
        // list.innerHTML += forHtml1;
        // const forHtml2 = `<li>${extraTasks[addition2]}</li>`;//adding the second random task
        // list.innerHTML += forHtml2;

        localStorage.setItem("tasks", JSON.stringify(tasks2));


        renderTasks();
        alert("the list is empty but we will fill it in for you");

    }
    else {//if the list has content then put the real content
        for (let i = 0; i < taskArray.length; i++) {
            const forHtml = `<li onclick="eraseLi(event,'t',0,${i})">${taskArray[i].task}</li>`;
            list.innerHTML += forHtml;
        }
        showTasksPage();
    }

}


//         onclick functions---------------  (;


function loginButton(event) {//this function will be called by the login button and checks how we can continue
    event.preventDefault();
    const isTheUserCorrect = getInformationFromLogin(event);
    if (isTheUserCorrect)//checks if the user is registered, if so we'll continue
        showChoosingPage();
    else
        alert("the user is not registered please register or try again");

}//was tested



function calendarButton() {
    const today = new Date();//if put a string it gives the real date as a date, this itself gives today
    localStorage.setItem("dateOpened", today);
    // const user = localStorage.getItem("user");
    renderDay();//right when the user connects it will open up to today
    showCalendarPage();
} //was tested





function addAReminder() {
    const reminder = document.getElementById("addReminder").value;
    document.getElementById("addReminder").value = "";
    const user = parseInt(localStorage.getItem("user"));
    const openedDate = localStorage.getItem("dateOpened");

    const days2 = JSON.parse(localStorage.getItem("days"));

    const dayObj = days2.find(i => i.user === user && new Date(i.date).getFullYear() === new Date(openedDate).getFullYear() && new Date(i.date).getMonth() === new Date(openedDate).getMonth() && new Date(i.date).getDate() === new Date(openedDate).getDate());//to find the day I am looking for according to the user and the date
    if (dayObj != undefined) {
        dayObj.list.push(reminder);

    }
    else {
        const newObj = { id: days2.length + 1, user, date: openedDate, list: [reminder] }
        days2.push(newObj);
    }
    localStorage.setItem("days", JSON.stringify(days2));

    renderDay();
}

function goToDate() {
    const date = document.getElementById("goToDate").value;
    localStorage.setItem("dateOpened", date);
    renderDay();
}


function addATask() {
    const newTask = document.getElementById("addATask").value;
    document.getElementById("addATask").value = "";
    const user = parseInt(localStorage.getItem("user"));

    const tasks2 = JSON.parse(localStorage.getItem("tasks"));

    const obj = { id: tasks2.length + 1, user, task: newTask };
    tasks2.push(obj);
    localStorage.setItem("tasks", JSON.stringify(tasks2));
    renderTasks();
}


function renderDates() {//this function shows the monthly view of the dates

    const calendar = document.getElementById("bottomRightCalendar");
    calendar.innerHTML = "";

    const date = new Date(localStorage.getItem("dateOpened"));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    let day = new Date(month + "/01/" + year).getDay();//the first day in the month


    const flag = new Date(month + "/31/" + year).getFullYear() > 0;//if bigger then 0 it is defined ,,it has 31 in the month
    //else, it is not defined .But it doesnt work it always says its defined
    for (let i = 0; i < 5; i++) {//number of weeks
        const html1 = `<div class="spanDivs" id="sd${i}"><div/>`
        calendar.innerHTML += html1;

        for (let j = 0; j < 7; j++) {//number of days
            const inCalendar = document.getElementById("sd" + i);
            let num = (i * 7 + j - day + 1) > 0 && (i * 7 + j - day + 1) < 32 ? (i * 7 + j - day + 1) : "0";
            if (num < 10)
                num = "0" + num;

            else if (!flag && num == 31)
                num = "00";//this means if the month does not have a 31st then dont show it but it doesnt work

            let html = `<span class="spans"> ${num} </span>`;

            if (num == date.getDate())
                html = `<span class="spans" style="color:blue;"> ${num} </span>`;
            else if (num == "00")
                html = `<span class="spans" style="color:rgba(240, 248, 255, 0.01);"> ${num} </span>`;
            inCalendar.innerHTML += html;


        }
        calendar.innerHTML += `</div>`;
    }

}




function eraseLi(event, arrayName, index, indexInList) {//this function adds and removes the x from the li
    const target = event.target;
    let html = "";
    let i;
    for (i = 0; i < target.innerHTML.length; i++) {//check if the li has a button to erase
        html += target.innerHTML[i];//always add the original text
        if (i < target.innerHTML.length - 1 && target.innerHTML[i + 1] == '<')
            break;//if it has a button already so go out
    }

    if (i == target.innerHTML.length)//if it didnt break then add the button
        html += `<button onclick="eraseThroughX('${arrayName}',${index},${indexInList})">X</button>`
    target.innerHTML = html;//put it in the li

}



/*function eraseLi(event, arrayName, index, indexInList) {//this function adds and removes the x from the li
    const target = event.target;
    let html = "";
    let i;
    for (i = 0; i < target.innerHTML.length; i++) {//check if the li has a button to erase
        html += target.innerHTML[i];//always add the original text
        if (i < target.innerHTML.length - 1 && target.innerHTML[i + 1] == '<')
            break;//if it has a button already so go out
    }

    if (i == target.innerHTML.length)//if it didnt break then add the button
        html += `<button onclick="eraseThroughX('${arrayName}',${index},${indexInList})">X</button>`;

    target.innerHTML = html;//put it in the li
    let storage;
    if (arrayName == 'd') {
        storage = JSON.parse(localStorage.getItem("days"));
        storage[index][indexInList] = html;
        localStorage.setItem("days",JSON.stringify(storage));
    }

    else {
        storage = JSON.parse(localStorage.getItem("tasks"));
        storage[index] = html;
        localStorage.setItem("tasks",JSON.stringify(storage));

    }


} */



function eraseThroughX(array, indexinTheBigArray, indexInList) {
    let array2;
    if (array == "d") {
        array2 = JSON.parse(localStorage.getItem("days"));
        eraseremindersandtasks.push(array2[indexinTheBigArray].list.splice(indexInList, 1));
        localStorage.setItem("days", JSON.stringify(array2));
        renderDay();
    }
    else {
        array2 = JSON.parse(localStorage.getItem("tasks"));
        eraseremindersandtasks.push(array2.splice(indexInList, 1));
        localStorage.setItem("tasks", JSON.stringify(array2));
        renderTasks();
    }

    if (array == "d") {

    }
    else {

    }


}
/*
function eraseThroughX(array, index) {
    let array2;

        array2 = JSON.parse(localStorage.getItem(array));
        alert("the reminder "+array2[index] +"was erased")

        eraseremindersandtasks.push(array2.splice(index, 1));
    localStorage(array, JSON.stringify(array2));
    renderDay();
    renderTasks();

}
*/






// a bit about dates
// const j = Date();//you must put the String that you got in new Date()
// console.log("check what this does "+new Date().getDate());//this gives the day in the month
// console.log("check what this does "+new Date().getDay());//this gives the day of the week starting from 0
// console.log(new Date().getFullYear());//this gives the year
// console.log(new Date("2024/01/06").getMonth());//this gives the month starting from


