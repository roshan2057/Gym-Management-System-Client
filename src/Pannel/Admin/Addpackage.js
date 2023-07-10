import axios from "axios";
import Cookies from "js-cookie";


function Addpackage() {

  const add = (event) => {
    event.preventDefault();

    let data = {
      "name": event.target.name.value,
      "noofmth": event.target.noofmth.value,
      "price": event.target.price.value,
      "status": event.target.status.value
    }

    axios.post(`${process.env.REACT_APP_API}/admin/package`, data, {
      headers: {
        'auth': Cookies.get('token')
      }
    }).then(res => {
      alert("Added")
      console.log(res);



    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <form className='d-block caption-top w-auto bg-white rounded p-2 m-5' onSubmit={add}>
        <caption className='text-black fs-4'>Package</caption>

        <div className='form-row'>
          <div className='col-md-6 mb-3'>
            <label className='d-block'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className='col-md-6 mb-3'>
            <label className='d-block'>Number of Months</label>
            <input type='text' name='noofmth' />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-6'>

            <label className='d-block'>Price</label>
            <input type='number' name='price' />
          </div>
          <div className='col-md-6 mb-3'>
            <label className='d-block'>Status</label>

            <select className='mt-2' name='status'>
              <option value={'1'}>Online</option>
              <option value={'0'}>Offline</option>
            </select>
          </div>
        </div>
        <div className='text-center'>
          <button type='submit' className='btn btn-primary my-3'>Create</button>
        </div>
      </form>
    </>
  )
}
export default Addpackage