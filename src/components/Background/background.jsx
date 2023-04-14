import './background.scss'

function Background() {
    const quantity = 15;
    const fireflies = [];
    for (let i = 1; i <= quantity; i++) {
        fireflies.push(<div key={i} className="firefly" />);
      }
      
    return (
      <div>
        {fireflies}
      </div>
    );
  }
  
  export default Background;