function compute()
{
    var p=document.getElementById("principal").value;
    var r=document.getElementById("rate").value;
    var t=document.getElementById("years").value;
    var si=parseFloat((p*r*t)/100.0);
    var amt=parseInt(si)+parseFloat(p);
    var finalyr=new Date().getFullYear()+parseInt(t);
    var result=document.getElementById("intval");
    if(p<0)
    {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else
    {
        result.innerHTML=" If you deposit Rs."+"<b>"+p+"</b> at an interest rate of "+"<b>"+r+"%</b>, by "+"<b>"+finalyr+"</b> you will have Rs."+"<b><u>"+amt+"</u></b>";
    }
}
function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}