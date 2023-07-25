import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"


function CODlist() {

    const [datalist, setList] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/admin/bill/cod`, {
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(res => {
            if (res.data.success !== []) {
                setList(res.data.success);
                calculateTotal(res.data.success);
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const calculateTotal = (statement) => {
        let totalAmount = 0;
        statement.forEach(item => {
            if(item.status !== 'Pending'){
                totalAmount += item.amount;

            }
        });
        setTotal(totalAmount);
    };

    const accept=(id)=>{
axios.get(`${process.env.REACT_APP_API}/admin/bill/cod/${id}`,{
    headers:{
        'auth':Cookies.get('token')
    }
}).then(res=>{
    console.log(res)
    window.location.reload();

}).catch(error=>{
    console.log(error)
})
    }

const decline=(id)=>{
console.log("decline"+id)
}
    return (
        <div>

            <h2 className='text-white fs-4'>Cash</h2>

            <table className="table table-striped bg-white rounded mt-5">

                <thead>
                    <tr>
                        <th scope="col">Request Date</th>
                        <th scope="col">Membership ID</th>
                        <th scope="col">Package id</th>
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
                            <td>{item.user_id}</td>
                            <td>{item.package_id}</td>
                            <td>{item.expire_date}</td>
                            <td>Rs.{item.amount}</td>
                            {item.status === 'Pending' ? (<>
                                <td className="text-center"><button onClick={()=>{accept(item.bid)}}>Accept</button> <button onClick={()=>{decline(item.bid)}}>Decline</button></td>
                            </>


                            ) : (
                                <td className="text-center">Payment Done</td>
                            )}
                        </tr>
                        )
                        )
                    }


                    <tr>
                        <td colSpan='4'></td>
                    </tr>
                    <tr>
                        <td colSpan='4' className='text-center'>Total:</td>
                        <td>Rs.{total}</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}
export default CODlist