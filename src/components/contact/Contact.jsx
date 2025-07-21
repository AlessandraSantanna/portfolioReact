import React from 'react';
import './contact.css';
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1c7c225a-b1d8-4d5a-8635-a95db13d7bfb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
          title: "Sucess!",
          text: "Message sent successfully!",
          icon: "success"
        });
    }
  };

  return (
    <section id="contact" className="contact">
      <form onSubmit={onSubmit}>
        
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="fiel" placeholder='Enter your name' name='name' required />
        </div>

        
            <div className = "input-box">
                <label>Email Adress</label>
                <input type="text" className="fiel" placeholder='Enter your Email'name='email' required />
            </div>

             <div className = "input-box">
                <label>Your Menssage</label>
                <textarea name="message"  id="" className="fiel mess" placeholder="Enter your menssage" required />
            </div>
            <button type="submit">Send Menssage</button>
        


        </form>

        </section>
    );
}   

export default Contact;
