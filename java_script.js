const pLength=document.getElementById("p-length"),
p_uppercasr=document.getElementById("uppercase"),
p_lowercase=document.getElementById("lowercase"),
p_number=document.getElementById("number"),
p_symbol=document.getElementById("symbol"),
submit=document.getElementById("btn-submit"),
copy=document.getElementById("copy"),
password=document.getElementById("password");

const ucase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lcase="abcdefghijklmnopqrstuvwxyz",
symbol="!@#$%^&*=_-",
number="0123456789";

let initial_pass =""

submit.addEventListener("click",cheakReq)

function cheakReq()
{
    p_uppercasr?.checked ? (initial_pass += ucase ): "";                
    p_lowercase?.checked ? (initial_pass += lcase): "";
    p_number?.checked ? (initial_pass += number ): "";
    p_symbol?.checked ? (initial_pass += symbol): "";

    password.value= generatePass(initial_pass, pLength?.value);

}
function generatePass(initial_pass, l)
{
    let pass="";
    for (let i=0;i<l;i++)
    {
        pass += initial_pass.charAt(Math.floor(Math.random()* initial_pass.length ));
       
    }
    return pass;
}


