var btn = document.getElementById("btn");
btn.addEventListener("click", function(e){
    e.preventDefault()
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var  subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = 'name: '+ name + '<br/> email: '+ email +' <br/> subject: '+ subject +'<br/> message:'+ message;
    Email.send({
SecureToken : "bfa78cae-38bf-4c61-89b8-d3fd614ab4a4",
To : 'agrocenter.dealings01@gmail.com',
From : "agrocentershop01@gmail.com",
Subject : "New inquiry from Agrocenter",
Body : body
}).then(function() {
alert("Message sent successfully");
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("subject").value = "";
document.getElementById("message").value = "";
document.getElementById("name").focus();
});
});
  