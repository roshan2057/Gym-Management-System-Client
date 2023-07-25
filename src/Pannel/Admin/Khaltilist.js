import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"


function Khaltilist() {

    const [datalist, setList] = useState([]);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/admin/bill/online`, {
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
            totalAmount += item.amount;
        });
        setTotal(totalAmount);
    };

    return (
        <div>

            <h2 className='text-white fs-4'>Online Transection</h2>

            <table className="table table-striped bg-white rounded mt-5">

                <thead>
                    <tr>
                        <th scope="col">Membership Id</th>
                        <th scope="col">Package id</th>
                        <th scope="col">Renew date</th>
                        <th scope="col">Expire date</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item, index) =>
                        (<tr key={index}>
                            <th scope="row">{item.user_id}</th>
                            <td>{item.package_id}</td>
                            <td>{item.renew_date}</td>
                            <td>{item.expire_date}</td>
                            <td>Rs.{item.amount}</td>
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
export default Khaltilist
