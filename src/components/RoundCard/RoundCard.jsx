import "../RoundCard/RoundCard.css";

const DogsCard = ({ dog }) => {
  return (
    <>
      <div className="DogsCard">
        <img
          width={200}
          height={200}
          src={`./src/assets/${dog.image}`}
          alt={dog.name}
        />
        <div>{`Vardas: ${dog.name}`}</div>
        <div>{`Megstamiausias maistas: ${dog.food}`}</div>
      </div>
    </>
  );
};

export default DogsCard;
