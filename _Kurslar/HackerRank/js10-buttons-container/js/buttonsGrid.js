console.clear();
console.log("it's stqarts");
//varp0="123698745";
var p0 = "x012587634";

var p0 = "x123698745";
var p3 = "x123456789";
var p1 = "x123698745";

log2( p1);
//btnInfo.textContent =p0;
btnInfo2.textContent = p1;
update_btns();
btnAction();

function log(w) { var l = document.querySelector("#log"); l.innerHTML = w + "<br>" + l.innerHTML; }
function log2(w) { var l = document.querySelector("#log2"); l.innerHTML = w + "\r\n" + l.innerHTML; }

function btnAction(el) {
    //p1 = p1.slice(-2,-1) + p1.slice(1,p1.length-2 ) + "5";
    //p1 = p1.replace("5", "");
    //p1 = "x" + p1.slice(-1) + "" + p1.slice(1, 1 + 4) + "" + "5" + "" + p1.slice(1 + 1 + 3, p1.length - 1);

    p1 = "x" + p1.slice(-2,-1) + "" + p1.slice(1, 8 ) + "5";
    log2(p1);

    console.log("P1!: " + p1);

    //btnInfo.textContent =p0;
    btnInfo2.textContent = p1;

    update_btns(el);
}

function update_btns(el) {
    for (var i = 1; i < p1.length; i++) {
        var b = document.querySelector("#btn" + (i));
        var b1 = b.getAttribute("data-a")
        // var animalType = animal.getAttribute("data-animal-type");

        var pi = i; //( i>4 ? i : i-1 ) ;
        var v = p1[p0[pi]];
        var v = p1[b1];
        var l1 = "b1: " + b1 + " pi: " + pi + " p0: " + p0[pi] + " p1: " + v;
        console.log(l1);
        log(l1);

        b.textContent = v;
        b.innerHTML = v;
        // console.log(`${v} ${b.outerHTML} `);        
    }
    log("");
}


