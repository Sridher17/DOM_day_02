function label(tagname,attername,attervalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attername,attervalue);
    ele.innerHTML=content;
    return ele;
}
function Input(tagname,attername,attervalue,attername1,attervalue1,attername2,attervalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attername,attervalue);
    ele1.setAttribute(attername1,attervalue1);
    ele1.setAttribute(attername2,attervalue2);
    return ele1;
}
function linebreaker(tagname){
    var br=document.createElement(tagname);
    return br;
}

var Firstname=label("label","for","name","Firstname");
var br=linebreaker("br");
var InputFirstname=Input("input","type","Text","name","name","id","name");
var br1=linebreaker("br");
var Middlename=label("label","for","middlename","Middlename");
var br2=linebreaker("br");
var InputMiddlename=Input("input","type","Text","name","middlename","id","middlename");
var br3=linebreaker("br");
var Lastname=label("label","for","lastname","Lastname");
var br4=linebreaker("br");
var Inputlastname=Input("input","type","Text","name","lastname","id","lastname");
var br5=linebreaker("br");
var email=label("label","for","email","Email");
var br6=linebreaker("br");
var Inputemail=Input("input","type","email","name","email","id","email");
var br7=linebreaker("br");
var password=label("label","for","password","Password");
var br8=linebreaker("br");
var Inputpass=Input("input","type","password","name","password","id","password");
var br9=linebreaker("br");

document.body.append(Firstname,br,InputFirstname,br1,Middlename,br2,InputMiddlename,br3,Lastname,br4,Inputlastname,br5,email,br6,Inputemail,br7,password,br8,Inputpass,br9);
