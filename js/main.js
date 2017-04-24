getId = function (id) {
    return document.getElementById(id);
}

var counter = false;

function boldText() {
    if (counter == false) {
        getId("content").style.fontWeight = "bold";
        counter = true;
    } else {
        if (counter == true) {
            getId("content").style.fontWeight = "normal";
            counter = false;
        }
    }
}

var counter2 = false;

function italicText() {
    if (counter2 == false) {
        getId("content").style.fontStyle = "italic";
        counter2 = true;
    } else {
        if (counter2 == true) {
            getId("content").style.fontStyle = "normal";
            counter2 = false;
        }
    }
}

var counter3 = false;

function underlineText() {
    if (counter3 == false) {
        getId("content").style.textDecoration = "underline";
        counter3 = true;
    } else {
        if (counter3 == true) {
            getId("content").style.textDecoration = "none";
            counter3 = false;
        }
    }
}

function changeFont() {
    for (var i = 0; i < 4; i++) {
        if (getId('changeFont')[i].selected) {
            getId('content').style.fontFamily = getId('changeFont')[i].value;
        }
    }
}

function changeSize() {
    for (var i = 0; i < 7; i++) {
        if (getId('changeSize')[i].selected) {
            getId('content').style.fontSize = getId('changeSize')[i].value + "px";
        }
    }
}

var counter4 = false;

function textColor() {
    if (counter4 == false) {
        getId('colorsText').style.display = "flex";
        getId('colorsBg').style.display = "none";
        counter4 = true;
    } else {
        if (counter4 == true) {
            getId('colorsText').style.display = "none";
            getId('colorsBg').style.display = "none";
            counter4 = false;
        }
    }
    for (var i = 0; i < 18; i++) {
        document.querySelectorAll('.box')[i].onclick = function () {
            getId('content').style.color = this.style.backgroundColor;
        }

    }
}

var counter5 = false;

function fontColor() {
    if (counter5 == false) {
        getId('colorsBg').style.display = "flex";
        getId('colorsText').style.display = "none";
        counter5 = true;
    } else {
        if (counter5 == true) {
            getId('colorsBg').style.display = "none";
            getId('colorsText').style.display = "none";
            counter5 = false;
        }
    }
    for (var i = 0; i < 18; i++) {
        document.querySelectorAll('.box')[i].onclick = function () {
            getId('content').style.background = this.style.backgroundColor;
        }

    }
}

function changeAlign(x) {
    getId("content").style.textAlign = x;
}

// стандартний текст
getId('editText').value = getId('content').innerHTML;

function btnEdit() {
    getId("content").style.display = "none";
    getId("editText").style.display = "flex";
}

function createTable() {

    var table = document.createElement('table'),
        tableBorderWidth = getId('tableWidth').value + 'px', 
        tableBorderStyle = getId('lineType').value,
        tableBorderColor = getId('lineColor').value;


    table.style.border = tableBorderWidth + ' ' + tableBorderStyle + ' ' + tableBorderColor;

    table.style.borderSpacing = getId('cellSpacing').value + 'px';


    for (var i = 0; i < getId('tableRow').value; i++) {
        var tableRow = document.createElement('tr');

        for (var j = 0; j < getId('tableCol').value; j++) {
            var tableColumn = document.createElement('td');

            tableColumn.style.height = getId('tableHeight').value + 'px';
            tableColumn.style.width = getId('tableWidth').value + 'px';
            tableColumn.style.border = tableBorderWidth + ' ' + tableBorderStyle + ' ' + tableBorderColor;

            tableRow.appendChild(tableColumn);
        }

        table.appendChild(tableRow);
    }

    getId("editText").value += table.outerHTML;
}

var checker7 = false;
function saveText() {
        getId("content").style.display = "block";
        getId("editText").style.display = "none";
    getId("content").innerHTML = getId("editText").value;
}

function selectedTable() {
    getId("box4").style.display = "block";
    getId("box5").style.display = "none";
}

function selectedList() {
    getId("box4").style.display = "none";
    getId("box5").style.display = "block";
}

function createList() {
    if (getId("listUl").checked) {
        var ul = document.createElement("ul");
        for (var i = 0; i < getId("elementQuantity").value; i++) {
            var li = document.createElement('li');
            li.innerHTML = "Sometext";
            ul.appendChild(li);
        }
        getId('editText').value += ul.outerHTML;
    } else if (getId("listOl").checked) {
        var ol = document.createElement("ol");
        for (var i = 0; i < getId("elementQuantity").value; i++) {
            var li = document.createElement('li');
            li.innerHTML = "Sometext";
            ol.appendChild(li);
            for (var j = 0; j < 4; j++) {
                if (getId("markerType")[j].selected) {
                    li.style.listStyleType = getId("markerType").value;
                }
            }
        }
        getId('editText').value += ol.outerHTML;
    }
}
