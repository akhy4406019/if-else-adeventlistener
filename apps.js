var form=document.querySelector('#form');
form.addEventListener('submit',function(e){
 e.preventDefault();
 var fname=e.target.fname;
 var lname=e.target.lname;
 var email=e.target.email;
 var password=e.target.password;
if(fname.value==''){
    fname.style.border='1px solid red';
}else{
    fname.style.border='1px solid green';
}
if(lname.value==''){
    lname.style.border='1px solid red';
}else{
    lname.style.border='1px solid green';
}
if(email.value==''){
    email.style.border='1px solid red';
}else{
    email.style.border='1px solid green';
}
if(password.value==''){
    password.style.border='1px solid red';
}else{
    password.style.border='1px solid green';
}
if(password.value>=8){
alert('Ok');
window.location.href='index.html';

}



})

