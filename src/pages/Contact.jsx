import "./styles/contact.scss"

function Contact() {
    const text = "NOUS CONTACTER";
    const letters = [...text].map((letter, index) => (
              <div className="wrapper" key={index}>
              <div className="letter">{letter}</div>
              <div className="shadow">{letter}</div>
              </div>
    ));

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_56x1pop",
          "template_fn9vmmr",
          e.target,
          "k3bHC3Fzm7BtjTSrr"
        )
        .then((res) => {
          console.log(res);
        })
        .catch(err => console.log(err));
    };

    return (
        <section id="contact">
            <div className="text">{letters}</div>
            <form onSubmit={sendEmail}>
                <div className="box1">
                    <label htmlFor="name"></label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Votre nom..."
                    required
                    />
                </div>
                <div className="box2">
                    <label htmlFor="email"></label>
                    <input
                    type="email"
                    name="user_email"
                    placeholder="Votre adresse mail : exemple@gmail.com"
                    required
                    />
                </div>
                <div className="box3">
                    <label htmlFor="message"></label>
                    <textarea name="message" placeholder="Message..." />
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