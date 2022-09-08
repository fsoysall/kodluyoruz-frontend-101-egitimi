
$(document).ready(function () {
    // console.log("document loaded");
    ToDoList_Clear();

    if ($("#todo li").length == 0) {
        // demoLS(); Save2LS();
    }
});

$(window).on("load", function () {    /* console.log("window loaded"); */ });



function ToDoList_Clear(todo) {
    todo.innerHTML = "";
    getFromLsTodo(todo);
}

function ToDoList_Clear() {
    let todo = $("#todo")[0];
    getFromLsTodo(todo);
}

// function newElement() {
//     let tasks = $('#task')[0];
//     newElement(tasks.textContent);
//     // tasks.textContent += " " + new Date().getMilliseconds();
// }


function todoRemoveAt(id) {
    let ul = $("#todo")[0];
    if (ul == null) { return; }
    let li = $("li#todoLi" + id);
    // ul.removeElement(order);
    li.remove();
    Save2LS();
}

function newElement(v) {
    if (arguments.length == 0) {
        let TasksTB = $('input[type=text]#TasksTB')[0];
        newElement(TasksTB.value);
        return;  
    }

    /*
    let tasks = $('#task')[0];
    let todo = $('#todo')[0];
    let li = document.createElement('li');
    li.value = v;
    // li.innerText = v;
    li.textContent = v;  
    li.className = "todoN todoN01";
    todo.appendChild(li);
    */
    todo.appendChild(testLi(v));
    Save2LS();
}

function newElementQWE(q, w, e) {
    let tasks = $('#task')[0];
    let todo = $('#todo')[0];
    let li = document.createElement('li');
    li.id = `todoN${w}`; li.textContent = q; li.className = "todoN todoN0";
    todo.appendChild(li);
    tasks.value += " " + new Date().getMilliseconds();
    Save2LS();
}


function demoLS() {
    let ul = $('#todo');
    let ulli = $('#todo li');
    //if( $('#todo li').length>0) { $('#todo').clear(); }
    if (ulli.length == 0
        || (ulli.length > 0 && ulli[0].textContent.toString().startWith('3'))
    ) {

        ul.append(testLi("selam"));
        ul.append(testLi("kelam"));
        ul.append(testLi("alam"));
        ul.append(testLi("kaçam"));
        ul.append(testLi("mynet"));
    }
}

