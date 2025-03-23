/*********************************************************
 *                 navbar hide and show                  *      
 *********************************************************/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/*********************************************************
 *                 Resume Download                       *      
 *********************************************************/

function downloadResume() {
  // Assuming 'resume.pdf' is the name of your PDF file
  const pdfUrl = 'docs/Carlos Serrano - Resume.pdf';

  // Creating a link element
  const link = document.createElement('a');

  // Setting the href attribute to the PDF file URL
  link.href = pdfUrl;

  // Setting the download attribute with the desired file name
  link.download = 'resume_Carlos_Serrano.pdf';

  // Appending the link to the document body
  document.body.appendChild(link);

  // Triggering the click event programmatically
  link.click();

  // Removing the link from the document body
  document.body.removeChild(link);
}

function sendEmail() {
  Email.send({
    Host: "e9a9b2a7-d0b6-4b9e-a6c0-e8d8a9a8c6d8",
    To: 'qpmzj@example.com',
    From: "qpmzj@example.com",
    Subject: "Hello",
    Body: "And this is the body"
  }).then((message) => alert("Email sent successfully!"))
    .catch((error) => console.error("Error sending email:", error));
}

/*********************************************************
 *                 google maps integration               *      
 *********************************************************/
