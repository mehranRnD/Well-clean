document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  const orderModalEl = document.getElementById("orderModal"); // Get the modal element
  const orderModal = new bootstrap.Modal(orderModalEl); // Initialize Bootstrap modal

  if (!form) {
    console.error("Form not found! Make sure your form has id='orderForm'");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const whatsappNumber = "923104982828"; // Ensure correct format

    // Get form values safely
    const getValue = (id) =>
      document.getElementById(id)?.value.trim() || "Not provided";

    const name = getValue("name");
    const phone = getValue("phone");
    const email = getValue("email");
    const address = getValue("address");
    const serviceType = getValue("serviceType");
    const rawDateTime = getValue("date");
    const rooms = getValue("rooms");
    const requests = getValue("requests");

    // Format Date & Time
    let formattedDate = "Not provided";
    let formattedTime = "Not provided";

    if (rawDateTime !== "Not provided") {
      const [datePart, timePart] = rawDateTime.split("T");
      formattedDate = datePart;
      formattedTime = timePart;
    }

    // Encode message properly
    const encodedMessage = encodeURIComponent(
      `*New Cleaning Service Booking!* 🧼✨\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `🏠 *Address:* ${address}\n\n` +
        `🛠 *Service Type:* ${serviceType}\n` +
        `📅 *Date:* ${formattedDate} 🕒 *Time:* ${formattedTime}\n` +
        `🏡 *Number of Rooms:* ${rooms}\n\n` +
        `📩 *Special Requests:* ${requests}\n` +
        `📎 *Note:* If you uploaded images, please send them manually in this chat.`
    );

    // Use correct WhatsApp API Link
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");

    // Close the modal using Bootstrap API
    orderModal.hide();

    // Reset form fields after submission
    form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const estimateForm = document.getElementById("estimateForm");
  const estimateModalEl = document.getElementById("estimateModal");
  const estimateModal = new bootstrap.Modal(estimateModalEl);

  estimateForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default submission

    const whatsappNumber = "923104982828";

    // Get input values safely
    const getValue = (id) =>
      document.getElementById(id)?.value.trim() || "Not provided";

    const name = getValue("estimateName");
    const phone = getValue("estimatePhone");
    const email = getValue("estimateEmail");
    const serviceType = getValue("estimateService");
    const rawDateTime = getValue("estimateDate");
    const propertyType = getValue("estimatePropertyType");
    const rooms = getValue("estimateRooms");
    const requests = getValue("estimateRequests");

    // Format Date & Time
    let formattedDate = "Not provided";
    let formattedTime = "Not provided";
    if (rawDateTime !== "Not provided") {
      const [datePart, timePart] = rawDateTime.split("T");
      formattedDate = datePart;
      formattedTime = timePart;
    }

    // Encode WhatsApp message
    const encodedMessage = encodeURIComponent(
      `*New Free Estimate Request!* 📌\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n\n` +
        `🛠 *Service Type:* ${serviceType}\n` +
        `🏠 *Property Type:* ${propertyType}\n` +
        `📅 *Preferred Date:* ${formattedDate} 🕒 *Time:* ${formattedTime}\n` +
        `🏡 *Number of Rooms:* ${rooms}\n\n` +
        `📩 *Special Requests:* ${requests}`
    );

    // Open WhatsApp chat
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Close the modal
    estimateModal.hide();

    // Reset form
    estimateForm.reset();
  });
});

