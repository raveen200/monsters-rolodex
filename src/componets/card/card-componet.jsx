import './card.styles.css'

const Card = ({monster}) => {

    const {id, name, email} = monster;

    return (
        <div className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size%20=%20180*180`}
            />
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    );
}


export default Card;
