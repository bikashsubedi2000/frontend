import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/usercomponents/card';

const Homepage = () => {
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/listblog/`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err));
  }, []);


  return (
   <>
        <div class="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Premium Threads</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {Blog.map((b,i)=>(
          <Card data={b} key={i} />
        ))}
   
    </div>
    </div>
   
   
   </>
  )
}
export default Homepage
