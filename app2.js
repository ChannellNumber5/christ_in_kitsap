var willJoin = confirm("Would you like to join our scripture of the day emailing list?");

if (willJoin == true) {
    var emailAddress = prompt("Please Enter your email address");
    document.write("Thank you for joining our mailing list!")
}
else {
    document.write("Thank you for coming to our site!");
}