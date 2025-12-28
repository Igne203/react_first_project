import '../Card/card.css';

const Card = ({cat}) => {
    return(
        <>
        <div className='CardBlock'>
            <h2>{cat.name}</h2>
            <img width={200} height={200} src={`${import.meta.env.BASE_URL}/assets/${cat.image}`} alt={cat.name} />
            <div>{`Megstamiausias zaislas: ${cat.toy}`}</div>
        </div>
        </>
    )

}

export default Card;