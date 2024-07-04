
function sendemail(){
debugger
	var email=document.getElementById("email").value;
	var to_name=document.getElementById("to_name").value;
	var message=document.getElementById("message").value;
   var radios = document.getElementsByName('gender');
   var gender;
   

   var birthdate=document.getElementById("birthdate").value;
   var phoneNumber=document.getElementById("phoneNumber").value;
   var city=document.getElementById("city").value;
   var state=document.getElementById("state").value;
   var country=document.getElementById("country").value;
   var linkedin=document.getElementById("linkedin").value;
   var github=document.getElementById("github").value;
   var postalcode =document.getElementById("postalcode").value;
   var postalcode =document.getElementById("postalcode").value;
   var CurrentAddress =document.getElementById("CurrentAddress").value;
   var education=document.getElementById("education").value;
   
   
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    gender = radios[i].value;
      }
   }

   if (to_name === '' || email === ''||gender ===''||education ===''||birthdate ===''||phoneNumber ===''||city ===''||state ===''|| country ===''||postalcode ===''||CurrentAddress ==='') {
      window.alert("All fields are required.");
      return; // Stop the function execution if any field is empty
    }

	var templateParams = {
        email: email,
      to_name: to_name,
		message: message,
      gender:gender,
      education:education,
      birthdate:birthdate,
      phoneNumber:phoneNumber,
      city:city,
      state:state,
      country:country,
      linkedin:linkedin,
      github:github,
      postalcode:postalcode,
      CurrentAddress:CurrentAddress,
   
      };

//       emailjs.send('service_kg1m9uk', 'template_5hvtwd9', templateParams)
//   .then(function(response) {
//      console.log('SUCCESS!', response.status, response.text);
//      window.alert("Sent successfully!");
//   }
// )

emailjs.send('service_kg1m9uk', 'template_5hvtwd9', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.alert("Sent successfully!");
    }, function(error) {
      console.log('FAILED...', error);
      window.alert("Failed to send. Please try again.");
    });


    document.getElementById('sendButton').addEventListener('click', sendEmail);
}