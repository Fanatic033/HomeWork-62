const AboutPage = () => {
  return (
    <main>
      <div className={'container-fluid p-0  bg-black'}>
        <div className={'d-flex justify-content-center'}>
          <h1 className={'mt-5 text-warning'} style={{fontSize: '56px'}}>We have been working since 1992</h1>
        </div>
        <div className={'mt-2 text-center fs-3'}>
          <ul className="list-group">
            <strong className={'text-white fs-1 mb-4'}>Features</strong>
            <li className="list-group-item bg-warning">An item</li>
            <li className="list-group-item bg-black text-white">A second item</li>
            <li className="list-group-item bg-warning">A third item</li>
            <li className="list-group-item bg-black text-white">A fourth item</li>
            <li className="list-group-item bg-warning">And a fifth one</li>
            <li className="list-group-item bg-black text-white">A fourth item</li>
            <li className="list-group-item bg-warning">And a fifth one</li>
            <li className="list-group-item bg-black text-white">A fourth item</li>
            <li className="list-group-item bg-warning">And a fifth one</li>
            <li className="list-group-item bg-black text-white">A fourth item</li>
          </ul>
        </div>
      </div>

    </main>
  );
};

export default AboutPage;