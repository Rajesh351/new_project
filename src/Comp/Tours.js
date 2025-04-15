import Card from "./Card";

function Tours({ tours ,removeTour}) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Love</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>;
        })} 

        {/* ...tour ->copy the object */}
      </div>
    </div>
  );
}

export default Tours;