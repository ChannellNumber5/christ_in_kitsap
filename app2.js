function getEmail(){
var willJoin = confirm("Would you like to join our scripture of the day emailing list?");

if (willJoin == true) {
    var emailAddress = prompt("Please Enter your email address");
    document.write("<h3>" + "Thank you for joining our mailing list!" + "</h3>");
}
else {
    document.write("Thank you for coming to our site!");
}
return emailAddress;
}
let userID = confirm ("Would you like to use " + emailAddress + " as your site user name?");