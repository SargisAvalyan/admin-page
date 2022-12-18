import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Children from '../../pages/children';
import School from '../../pages/school';
import Teacher from '../../pages/teacher';

 const Admin = () => {
  return (
   <div className='admin-title'>
    <Routes>
      
      <Route path={"/School"} element={<School/>} />
      <Route path={"/Teachers"} element={<Teacher/>} />
      <Route path={"/Children"} element={<Children/>} />
      <Route path= "*" element={<School/>}/>
    </Routes>
  </div>
  )
}
export default Admin