 import React from 'react'
 
const recentOrderData = [
	{
		id: '1',
		product_id: '243624',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17',
		order_total: '$435.50',
		current_order_status: 'DONE',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '274653',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14',
		order_total: '$96.35',
		current_order_status: 'PENDING',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '354364',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17',
		order_total: '$836.44',
		current_order_status: 'PENDING',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '938554',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16',
		order_total: '$334.50',
		current_order_status: 'DONE',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '875463',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14',
		order_total: '$876.00',
		current_order_status: 'DONE',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '564527',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14',
		order_total: '$96.35',
		current_order_status: 'PENDING',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

 export default function RecentOrders() {
   return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 '>
         <strong className= "text-gray-700 font-medium"> Consumers Overview</strong>
         <div className='mt-3'>
          <table className='w-full text-gray-700  bg-sky-200'>
            <thread className ='w-full'>
                <tr className='gap-8'>
                    <td>ID</td>
                    <td>Assets</td>
                    <td>Consumer Name</td>
                    <td>Order Date</td>
                    <td>Revenue</td>
                    
                    <td>KYC Status</td>
                </tr>
            </thread>
          </table>
         
         <tbody>
         {recentOrderData.map((order) => (
          <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.product_id}</td>
          <td>{order.customer_name}</td>
          <td>{order.order_date}</td>
          <td>{order.order_total}</td>
          
          <td>{order.current_order_status}</td>

          </tr>
         )
         )}
         </tbody>
         </div>
     </div>
  )
 }

