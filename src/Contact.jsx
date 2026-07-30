import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Contact</h1>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>Message: {message}</p>

      <p>Characters: {message.length}</p>
    </div>
  );
}

export default Contact;