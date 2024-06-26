const Card = (props) => {
    //   console.log(props);
    const { title, id, image, desc, date } = props;
    return (
      <div className="cards">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="date">
          <h1>{date}</h1>
        </div>
        <img src={image} alt="image" />
        <div className="card-over">
          <p>{desc}</p>
        </div>
      </div>
    );
  };
  
  export default Card;