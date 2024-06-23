const ContactsPage = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="ms-5 mt-5">Contacts</h1>
        <hr className={'h-25'}/>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Beekeeper</td>
              <td>+77700033303</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Beekeeper</td>
              <td>+77739832322</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>Beekeeper</td>
              <td>+77784329864</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;