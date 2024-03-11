//clear the input values
function clr()
{
    document.getElementById("result").value="";
}   

//click on button and input text in result
function addvalue(val)
{
    document.getElementById("result").value+=val;
}

//backspace
function bs()
{
let num=document.getElementById("result").value;
let ss=num.slice(0,-1);
document.getElementById("result").value=ss;
}

//square
function sqr()
{
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}

//square root
function sqrt()
{
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}

// final result (=)

function final()
{
    let x=document.getElementById("result").value
    let y=eval(x)
    document.getElementById("result").value=y;
}