var i = 1;

function createChk(obj) {
    if (obj.value !== '') {


        var chk = document.createElement('input');


        chk.setAttribute('type', 'checkbox');
        chk.setAttribute('id', 'prodName' + i);
        chk.setAttribute('value', obj.value);
        chk.setAttribute('name', 'products');


        var lbl = document.createElement('label');
        lbl.setAttribute('for', 'prodName' + i);


        lbl.appendChild(document.createTextNode(obj.value));


        container.appendChild(chk);
        container.appendChild(lbl);

        obj.value = '';
        document.getElementById(obj.id).focus();

        i = i + 1;

        function addAfterKeypress(event) {
            if (inputLength() > 0 && event.keyCode === 13) {
                createElement();
            }
        }

    }
}

