// Replace contact@example.com with your real receiving email address
const receiving_email_address = "contact@consonance-bordeaux.fr";

const contact = new PHP_Email_Form();
contact.ajax = true;

contact.to = receiving_email_address;
contact.from_name = document.getElementById("name").value;
contact.from_email = document.getElementById("email").value;
contact.subject = document.getElementById("subject").value;

// Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
/*
contact.smtp = {
  host: 'example.com',
  username: 'example',
  password: 'pass',
  port: '587'
};
*/

contact.add_message(document.getElementById("name").value, "From");
contact.add_message(document.getElementById("email").value, "Email");
contact.add_message(document.getElementById("message").value, "Message", 10);

console.log(contact.send());
