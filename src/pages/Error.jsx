import Lottie from "react-lottie-player";
import error from "../assets/images/lottie/error.json";
import "./styles/error.scss";

export default function Error() {
    return (
      <section id="notFound">
        <h1>OUPS... TU T'ES PERDU(E)</h1>
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