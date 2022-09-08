
function getFromLsTodo() { getFromLsTodo($('#todo')); }

function getFromLsTodo(todo) {
    console.log("get:lsTodo: " + todo);
    todo.innerHTML = "";

    let lsTodo = localStorage.getItem('TodoList');
    console.log("ls:data:: " + lsTodo);
    lsTodo = lsTodo ?? localStorage.getItem('TodoList0');

    // alert ("ls:data:: " + lsTodo);

    if (!parseTodoList(lsTodo)) {
        lsTodo = localStorage.getItem('TodoList0');
        parseTodoList(lsTodo);
    }  
} 

function parseTodoList(str) {
    try {
        arrTodo = JSON.parse(str) ?? [];
        console.log("arrTodo:: " + arrTodo);
        if (arrTodo == null || str.length < 3) {
            todo.clear;
            todo.innerHTML = "<b>NO - ELEMENTT"; return;
        }

        arrTodo.forEach(k => {
            newElement(k);
        })

    } catch (error) { console.log(error); return false; }
    return true;
}



function Save2LS() {
    let todo = $(".todoN");
    console.log(`save:[${todo.length}] : ${todo}  `);
    let save = [];

    $(".todoN").each((i, e) => {
        if (e.textContent.trim() > "") {
            let caption=e.firstChild.textContent;
            save.push(` ${JSON.stringify(caption)}`);
        }
    });
    if (save.length == 0) { return; }

    var toLS = ` [ ${save.join(' , ')} ] `
    localStorage.setItem('TodoList', toLS);
}


function testLi(str) {
    let TodoList= $("#todo li");

    let li = document.createElement("li");
    li.className = "todoN todoN1";
    li.innerText = str;
    li.id = `todoLi${TodoList.length}`;
    
    let tDiv =  document.createElement ("div");
    //let sıra = TodoList.length;
    let sıra = TodoList.length;
    tDiv.innerHTML=`<span style="float:right" onclick="todoRemoveAt(${sıra})" id="todoRemove${sıra}" class="button">SİL</span>`;
    
    li.appendChild(tDiv.firstChild);
    return li;   
}
 

