import Carousel from "react-bootstrap/Carousel";
import DogsCard from "../RoundCard/RoundCard";

function DogSlider({ dogs }) {
  if (!dogs || dogs.length === 0) return null;

  return (
    <Carousel controls indicators>
      {dogs.map((c) => (
        <Carousel.Item key={c.name}>
          <div className="d-flex justify-content-center">
            <DogsCard dog={c} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DogSlider;
