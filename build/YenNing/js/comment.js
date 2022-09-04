function test(){
    // get data
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var comment = document.getElementById("comment").value;

var cname = localStorage.setItem("name",name);
var cemail = localStorage.setItem("email",email);
var ccomment =localStorage.setItem("comment",comment);
} 