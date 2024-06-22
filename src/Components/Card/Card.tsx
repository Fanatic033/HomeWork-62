import React from 'react';
interface Props {
  img: string
}
const Card:React.FC<Props> = ({img}) => {
  return (
    <>
    <div className="card border border-warning" style={{'width':'18rem'}}>
      <img src={img} className="card-img-top w-50 ms-5" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    </>
  );
};

export default Card;