import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const{id,title,author,description,image,category}=props.data

  return (
    <div>
     
     

        <div className="bg-white flex flex-col rounded-sm overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
          <Link to="javascript:void(0)" className="block">
            <div className="w-full">
              <img src={image} alt={title}
                className="w-full aspect-[18/24] object-cover object-top" />
            </div>
            <div className="p-4">
              <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">{title}</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
              <h4 className="text-sm sm:text-base font-semibold text-slate-900">{author}</h4>
              

                
                
                
                
                <div className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-slate-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          <div className="min-h-[50px] p-4 !pt-0">
            <button type="button" className="absolute left-0 right-0 bottom-3 cursor-pointer max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide outline-none border-none rounded-sm">Add to cart</button>
          </div>
        </div>

      
      </div>
   
  )
}

export default Card
