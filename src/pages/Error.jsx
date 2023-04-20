import Lottie from "react-lottie-player";
import error from "../assets/images/lottie/error.json";
import Title from "../components/Title/Title"
import "./styles/error.scss";

export default function Error() {
    return (
      <section id="notFound">
        <Title text="Oups... Tu t'es perdu(e)" />
        <div className="notFoundContainer">
            <Lottie
                loop
                animationData={error}
                play
            />
        </div>
      </section>
    );
}