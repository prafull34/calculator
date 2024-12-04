

function btn(cell){

    document.getElementById('dis').value += cell
}


function eq(){
    var a = document.getElementById('dis')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('dis').value = ''
}

function del(){
   var b = document.getElementById('dis');  
     b.value = b.value.slice(0, -1);

}


function mod(){
    var c =document.getElementById('dis')
    c.value= c.value +='%'
}