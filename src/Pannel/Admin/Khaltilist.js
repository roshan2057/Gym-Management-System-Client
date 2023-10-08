import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"



function Khaltilist() {

    const [datalist, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [search, setSearch]=useState('');
  
    const [totalPages, setTotalpage] = useState('');
    const [totalrecords, setTotalrecords] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };



    useEffect(() => {
        setLoading(true);

        axios.get(`${process.env.REACT_APP_API}/admin/bill/online/${currentPage}`, {
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(res => {
            console.log(res.data.records)
           setTotal(res.data.total_amount)
           setTotalpage(res.data.total_pages)
           setTotalrecords(res.data.total_records)
                setList(res.data.records);
                setLoading(false);
            
        }).catch(error => {
            console.log(error)
        })
    }, [currentPage])


    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              style={{ fontWeight: currentPage === i ? 'bold' : 'normal' }}
            >
              {i}
            </button>
          );
        }
        return buttons;
      };


    return (
        <div>
            {loading ? 
      <div class="position-absolute top-5 left-0 w-100 d-flex justify-content-center align-items-center bg-success bg-opacity-50 backdrop-blur">
      <h2 class="text-white">Loading...</h2>
    </div>
        
       : <>
       
     


            <h2 className='text-white fs-4'>Online Transection</h2>
            <form className='text-right'>
  <input className="bg-white text-center rounded-3 mb-0 w-25" placeholder='Search with idx or username...' type='text' onChange={(event)=>{setSearch(event.target.value)}}/>
</form>

<div className="text-white">
    PageNumber={currentPage}<br/>
    Total records:{totalrecords}
</div>

<table className="table bg-transparent rounded mt-5">

                <thead>
                    <tr>
                        <th scope="col">Transection ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Method</th>
                        <th scope="col">State</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.filter(item => item.user.idx.includes(search) || item.user.name.toLowerCase().includes(search)).map((item, index) =>
                        (<tr key={index}>
                            <th scope="row">{item.user.idx}</th>
                            <td>{item.user.name}</td>
                            <td>{item.type.name}</td>
                            <td>{item.state.name}</td>
                            <td>{item.created_on.split('T')[0]}</td>
                            <td>Rs.{item.amount/100}</td>
                        </tr>
                        )
                        )
                    }


                    <tr>
                        <td colSpan='6'></td>
                    </tr>
                    <tr>
                        <td colSpan='5' className='text-center'>Total:</td>
                        <td>Rs.{total}</td>
                    </tr>

                </tbody>
            </table>
            <div>
{renderPaginationButtons()}
</div>
</>
}
        </div>
    )
}
export default Khaltilist
