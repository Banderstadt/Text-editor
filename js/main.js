getId = function (id) {
    return document.getElementById(id);
}

function f1() {
    for (var i = 0; i < 4; i++) {
        if (getId('changeFont')[i].selected) {
            getId('box1').style.fontFamily = getId('changeFont')[i].value;
        }
    }
}

function f2(x) {
    getId('box1').style.fontSize = x + "px";
}

var counter = false;

function editText() {
    if (counter == false) {
        getId('box2Text').style.visibility = "visible";
        counter = true;
    } else {
        getId('box2Text').style.visibility = "hidden";
        counter = false;
    }
    getId('box2Text').value = getId('box1').innerHTML;
}

function saveText() {
    getId('box1').innerHTML = getId('box2Text').value;
}

var counter1 = false;

function textColor() {
    if (counter1 == false) {
        getId('colorsText').style.display = "flex";
        getId('colorsBg').style.display = "none";
        counter1 = true;
    } else {
        if (counter1 == true) {
            getId('colorsText').style.display = "none";
            getId('colorsBg').style.display = "none";
            counter1 = false;
        }
    }
    for (var i = 0; i < 18; i++) {
        document.querySelectorAll('.box')[i].onclick = function () {
            getId('box1').style.color = this.style.backgroundColor;
        }

    }
}
var counter2 = false;

function fontColor() {
    if (counter2 == false) {
        getId('colorsBg').style.display = "flex";
        getId('colorsText').style.display = "none";
        counter2 = true;
    } else {
        if (counter2 == true) {
            getId('colorsBg').style.display = "none";
            getId('colorsText').style.display = "none";
            counter2 = false;
        }
    }
    for (var i = 0; i < 18; i++) {
        document.querySelectorAll('.box')[i].onclick = function () {
            getId('box1').style.background = this.style.backgroundColor;
        }

    }
}

function boldText(x) {
    if (x.checked) {
        getId('box1').style.fontWeight = "bold";
    } else {
        getId('box1').style.fontWeight = "normal";
    }
}

function italicText(x) {
    if (x.checked) {
        getId('box1').style.fontStyle = "italic";
    } else {
        getId('box1').style.fontStyle = "normal";
    }
}



//function tableCreate() {
//    var rowValue = parseInt(getId("tableRow").value);
//    var colValue = parseInt(getId("tableCol").value);
//    var table = getId("box2Text");
//    var tbl = document.createElement("table");
//    var tblBody = document.createElement("tbody");
//
//    for (var i = 0; i < rowValue; i++) {
//        var row = document.createElement("tr");
//        for (var j = 0; j < tableCol; j++) {
//            var cell = document.createElement("td");
//            row.appendChild(cell);
//        }
//        tblBody.appendChild(row);
//    }
//    tbl.appendChild(tblBody);
//    table.appendChild(tbl);
//    tbl.setAttribute("border", "2px");
//}


function tableCreate() {
    var box = getId('box2Text'),
        tbl = document.createElement('table');
    tbl.id = 'tbl';
    tbl.style.width = '100%';
    tbl.style.border = "1px  solid black";
    for (var i = 0; i < 10; i++) {
        var tr = tbl.insertRow();
        tr.id = i;
        for (var j = 0; j < 10; j++) {
            var td = tr.insertCell();
            var txtArr = 'Silex is a PHP microframework for PHP 5.3. It is built on the shoulders of Symfony2 and Pimple and also inspired by sinatra'.split(' ');
            var txt = txtArr[Math.round(Math.random() * txtArr.length)];
            var txt = typeof txt === 'undefined' ? 'undefined' : txt;
            td.appendChild(document.createTextNode(txt))
        }
    }
    window.tbl = tbl;
    box.appendChild(tbl);
}

//Зникнення виборру кольору тексту і фону(9-ть кольорових квадрата)
// 
//getE('colorText').onclick = function (e){
// getE('color').style.display = "flex";
// getE('fon').style.display = "none";
// e.stopPropagation(); // - зупиняє наступні події
// (дописуємо)}
//
//getE('colorFon').onclick = function (e){
// getE('color').style.display = "none";
// getE('fon').style.display = "flex"; 
// e.stopPropagation(); // - зупиняє наступні події (дописуємо в дану функцію)
//}
//
//document.body.onclick=function(e){
////функція зникнення....
// //console.log(e.target);
// if(e.target.className!="colorBox" && e.target.className!="fonBox" ){ 
//  //позиція мишки де відбувся клік НЕ повинна бути class"colorBox" && class"fonBox" тоді
//  getE("color").style.display="none";
// getE("fon").style.display="none";
// }
//}

//функція перевірки валідності введених у форму даних
//function f151(){
//    for(var i=0;i<5;i++){
//   var x = (document.forms.form5[i].value)/1;
//    if((x==document.forms.form5[i].value) && (x!=0) && (x>0))
//    {document.forms.form5[i].style.background="#00FF00";
//     document.querySelectorAll("span")[i].style.display="none";
//    }
//       else{  document.forms.form5[i].style.background="#FF00AE";
//document.querySelectorAll("span")[i].style.display="inline";
//         } 
//    }
//}

//+ нижче текст форми 5
//<form name="form5" id="form5table">
//        Введіть к-сть рядків таблиці:<input type="text" onblur="f151()" style="width: 40px;" > <span class="eror1" >Некоректні дані!!!</span>
//        <br><br>
//        Введіть к-сть стовбців таблиці: <input type="text" style="width: 40px;" onblur="f151()"><span class="eror1" >Некоректні дані!!!</span>  
//        
//        <p>Стилізуйте таблицю:</p>   
//         Введіть ширину комірки таблиці: <input type="text" style="width: 40px;" onblur="f151()"> <span class="eror1" >Некоректні дані!!!</span> 
//        <br><br>
//        Введіть висоту комірки таблиці: <input type="text" style="width: 40px;" onblur="f151()"> <span class="eror1" >Некоректні дані!!!</span>
//        <br><br>
//        
//       Товщина: <input type="text" style="width: 40px;" onblur="f151()"><span class="eror1" >Некоректні дані!!!</span> <br><br>
//       Тип лінії:
//       <select  >
//       <option  value="solid" >solid</option>
//       <option  value="dashed">dashed</option>
//       <option  value="double" >double</option>
//       <option  value="dotted" >dotted</option>
//       </select>
//       Колір лінії:
//       <select >
//       <option  value="black" >black</option>
//       <option  value="red">red</option>
//       <option  value="blue" >blue</option>
//       </select>
//       <br>
//       <br>
//       <input type="button" value="Створити таблицю"  onclick="f15()">
//       </form>