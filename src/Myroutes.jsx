import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Layout from './components/usercomponents/Layout'
import Homepage from './pages/userpages/Homepage'
import AdminHeader from './components/admincomponents/AdminHeader'
import AdminDashboard from './pages/adminpages/AdminDashboard'
import AddBlog from './pages/adminpages/AddBlog'
import Login from './pages/userpages/Login'
import Register from './pages/userpages/Register'
import Logout from './pages/userpages/logout'

const Myroutes = () => {
  return (
  <>
  <Router>
    <Routes>
        {/* normal user  */}
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="/logout" element={<Logout />} />
        </Route>
        
{/* for admin  */}
        <Route path='/admin/' element={<AdminHeader/>}/>
        <Route index element={<AdminDashboard/>}/>
        <Route path='addblog' element={<AddBlog/>}/>


    </Routes>
  </Router>
  </>
  )
}

export default Myroutes
