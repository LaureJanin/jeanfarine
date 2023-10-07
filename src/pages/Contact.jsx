import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./styles/contact.scss";

function Contact() {
    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_zwi9gir",
          "template_cad2jkl",
          e.target,
          "k3bHC3Fzm7BtjTSrr"
        )
        .then((res) => {
          console.log(res);
          setName("");
          setUserEmail("");
          setMessage("");
          setConfirmation(true);
          setTimeout(() => {
            setConfirmation(false);
        }, 5000);
        })
        .catch(err => console.log(err));
    };

    return (
        <section id="contact">
            <h1>CONTACT</h1>
            {confirmation && <p>Merci pour votre message, nous revenons vers vous au plus vite !</p>}
            <form onSubmit={sendEmail}>
                <div className="box1">
                    <label htmlFor="name"></label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Votre nom..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="box2">
                    <label htmlFor="email"></label>
                    <input
                    type="email"
                    name="user_email"
                    placeholder="Votre adresse mail : exemple@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="box3">
                    <label htmlFor="message"></label>
                    <textarea 
                    name="message" 
                    placeholder="Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="box4">
                    <button
                    type="submit"
                    className="buttonSubmit"
                    value="Send"
                    // onClick={() => {
                    //     notif();
                    // }}
                    >
                    <span>Envoyer</span>
                    </button>
                </div>
            </form>
            <p className="contactDirect">Vous pouvez aussi nous contacter directement à cette adresse 
                <a href="mailto:jean.farine@free.fr"> jean.farine@free.fr</a>
            </p>
        </section>
    )
}
export default Contact