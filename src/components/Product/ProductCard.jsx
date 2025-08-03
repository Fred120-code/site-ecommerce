import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
        <div>
            {/**card section */}
            {
                data.map((data)=>(
                    <div>
                        <div>
                            <img src={data.img} alt="" className='
                            h-[180px] w-[220px] object-cover  rounded-md' />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCard