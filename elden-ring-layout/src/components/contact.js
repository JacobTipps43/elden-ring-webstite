import React from "react";
import "./css/contact.css";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8454a5e5-afd8-4d60-9bee-e6e57ef66068");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
        <h2>Have Questions? Contact Us!!</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required/><br></br>
        <input type="email" name="email" placeholder="Email" required/><br></br>
        <textarea name="message" placeholder="Message" required></textarea>

        <button id="submit"type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

export default Contact;