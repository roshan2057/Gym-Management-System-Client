import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import Loading from "../../Loading";


function CODlist() {

    const [datalist, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading,setLoading]=useState(false)


    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API}/admin/bill/cod`, {
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(res => {
            console.log(res.data.success)
           
                setList(res.data.success);
                calculateTotal(res.data.success);
            setLoading(false);
        }).catch(error => {
            console.log(error)
            setLoading(false);
        })
    }, [])
    const calculateTotal = (statement) => {
        let totalAmount = 0;
        statement.forEach(item => {
            if (item.status !== 'Pending') {
                totalAmount += item.amount;

            }
        });
        setTotal(totalAmount);
    };

    const accept = (id) => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API}/admin/bill/cod/${id}`, {
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(res => {
            console.log(res)
            window.location.reload();
            setLoading(false)

        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
    }

    const decline = (id) => {
      setLoading(true)
        axios.delete(`${process.env.REACT_APP_API}/admin/bill/cod/${id}`,{
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(res => {
            console.log(res)
            window.location.reload();
            setLoading(false)

        }).catch(error => {
            console.log(error)
            setLoading(false)
        })
    }
    return (
        <div>
            { loading && <Loading/>}
            <h2 className='text-white fs-4'>Cash</h2>
            <table className="table rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Request Date</th>
                        <th scope="col">Member</th>
                        <th scope="col">Package</th>
                        <th scope="col">Expire date</th>
                        <th scope="col">Amount</th>
                        <th scope="col" colSpan={2} className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item, index) =>
                        (<tr key={index}>
                            <td>{item.renew_date}</td>
                            <td>{item.member.name}</td>
                            <td>{item.package.name}</td>
                            <td>{item.expire_date}</td>
                            <td>Rs.{item.amount}</td>
                            <td className="text-center">


                            {item.status === 'Pending' ? (<>
                                <button onClick={() => { accept(item.bid) }}><i class="bi bi-check-lg"></i>Accept</button> <button onClick={() => { decline(item.bid) }}><i class="bi bi-trash"></i>Decline</button>
                            </>


                            ) : (
                                <>Payment Done</>
                            )}

                            </td>
                           
                        </tr>
                        )
                        )
                    }


                    <tr>
                        <td colSpan='6'></td>
                    </tr>
                    <tr>
                        <td colSpan='4' className='text-center'>Total:</td>
                        <td colSpan='2'>Rs.{total}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}
export default CODlist