import "./DramaTheater.scss";

function DramaTheater({ drama, onClick }) {
    return (
      <section onClick={onClick} id="dramaTheater">
        <img src={drama.image} alt={drama.title} />
        <div className="overlay">{drama.title}</div>
      </section>
    );
}

export default DramaTheater