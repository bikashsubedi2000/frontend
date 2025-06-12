import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/usercomponents/card'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const [Blog, setBlog] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/listblog/`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('is_staff')
    navigate('/login')
  }

  return (
    <>
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-800">Homepage</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
          Premium Threads
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Blog.map((b, i) => (
            <Card data={b} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Homepage
