import Honey from './honey.svg'
import Card from '../../Components/Card/Card.tsx';
const HomePage = () => {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <img src={Honey} alt="Honey"/>
          <div>
            <h1 className={'fs-1 text-warning'}>Looking For Some Honey?</h1>
            <hr className="bg-black w-100 h1"/>
            <p className={'w-50 fs-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa dolor
              doloremque est, et fuga
              fugit illum laboriosam laborum maiores nesciunt non porro quas quibusdam similique suscipit, tempore
              tenetur vitae.</p>
            <div>
              <button className={'btn btn-outline-warning py-2 mx-5 px-5'}>Buy</button>
              <button className={'btn btn-outline-secondary py-2 px-5'}>Info</button>
            </div>
          </div>
        </div>
        <div className={'d-flex justify-content-center align-items-center mt-5 gap-5'}>
          <Card img={Honey} />
          <Card img={Honey} />
          <Card img={Honey} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;