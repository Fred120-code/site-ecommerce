import { FaCarSide, FaHeadphoneAlt, FaWallet, FaCheckCircle, } from 'react-icons/fa'

const Services = () => {

  const ServiceData = [
    {
        id:1,
        icon:<FaCarSide className='text-4xl md:text-5xl text-primary'/>,
        title:"Free Shopping",
        description:"Free Shipping On All Order",
    },
    {
        id:2,
        icon:<FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title:"Safe Money",
        description:"30 Days Money Back",
    },
    {
        id:3,
        icon:<FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title:"Secure payment",
        description:"All payment Secure",
    },
    {
        id:4,
        icon:<FaHeadphoneAlt className='text-4xl md:text-5xl text-primary'/>,
        title:"Online Support 24/7",
        description:"Technical Support 24/7",
    },
];

  return (
    <div>
        <div className='container'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {
                    ServiceData.map((data)=>(
                        <div key={data.id}>
                            {data.icon}
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
 
export default Services