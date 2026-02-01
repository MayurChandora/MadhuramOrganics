/*
function sendToWhatsApp(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

        //  Phone validation (10 digit)
    let phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number!");
      return;
    }
    
    let whatsappNumber = "919024008767"; // replace with client number

    let finalMessage = `Hello! I am ${name}%0AContact: ${phone}%0AMessage: ${message}`;

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${finalMessage}`;

    window.open(whatsappURL, "_blank");
  }
*/

//  1) Client WhatsApp Number (set once here)
const WHATSAPP_NUMBER = "919024008767";

//  2) Helper: Open WhatsApp with any message
function openWhatsAppWithMessage(message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}

//  3) Home Page Button: Direct WhatsApp Chat
function homeWhatsApp() {
  const message = "Hello MadhuramOrganics! I want to place an order. Please share details.";
  openWhatsAppWithMessage(message);
}

//  4) Product Page Button: Product-specific WhatsApp Message
function orderWhatsApp(productName) {
  const message = `Hello MadhuramOrganics! I'm interested in buying "${productName}". Please share more details.`;
  openWhatsAppWithMessage(message);
}

//  5) Contact Form: Send entered details to WhatsApp
function sendToWhatsApp(event) {
  event.preventDefault();

  let name = document.getElementById("name")?.value.trim();
  let phone = document.getElementById("phone")?.value.trim();
  let message = document.getElementById("message")?.value.trim();

  //  Basic empty check
  if (!name || !phone || !message) {
    alert("Please fill all fields before sending.");
    return;
  }

  //  Phone validation (10 digit Indian)
  let phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit Indian mobile number!");
    return;
  }

  let finalMessage =
    `Hello MadhuramOrganics!%0A` +
    `Name: ${name}%0A` +
    `Contact: ${phone}%0A` +
    `Message: ${message}`;

  // %0A already used, so don't encode again here
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${finalMessage}`;
  window.open(whatsappURL, "_blank");
}
