import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"

const School = () => {
    const [ShowModal, setShowModal] = useState(false);
    const ShowModale = (e) => {
        setShowModal(current=>!current)
}
    const [schoolData, setSchoolData] = useState(
        {
            schoolName: '',             //modal
            address: '',                //modal
            directorName: '',           //modal
            directorPhoneNumber: '',    //modal
            directorEmailAddress: '',   //modal
            teachersMaxCount: 0,         //modal
            childrenMaxCount: 0,         //modal
            teachersList: [],
            childrenList: [],
            fond: 0,
        }
    );
    const dispatch = useDispatch()
    // const schoolSelector = useSelector(state => state.addReducer.schoolList)
    const selector = useSelector(state => state.addSchoolReducer.schoolList)
    const handleChange = (e) => {
        setSchoolData({ ...schoolData, [e.target.name]: e.target.value })
    }
    const addSchoolList = () => {
        dispatch({ type: "ADD_SCHOOL", payload: schoolData })
        setSchoolData({
            ...schoolData,
            schoolName: '',
            address: '',
            directorName: '',
            directorPhoneNumber: '',
            directorEmailAddress: '',
            teachersMaxCount: 0,
            childrenMaxCount: 0,
            teachersList: [],
            childrenList: [],
            fond: 0,

        })
        setShowModal(current=>!current)


    }

    return (
        <div className='admin-title'>
            <div className='category'>
                ԴՊՐՈՑՆԵՐ
            </div >
            <div className='category-info'>
                <div className='add-button'>
                    <button className='schooladd' onClick={ShowModale}>Ավելացնել դպրոց</button>
                </div>
                <div className='info'>
                {selector.length ? selector.map((item, index) => {
                           return <div className='brder' key={index}>
                               <h3>{item.schoolName}</h3>
                               <h3>{item.address}</h3>
                               <h3>{item.directorName}</h3>
                               <h3>{item.directorPhoneNumber}</h3>
                               <h3>{item.directorEmailAddress}</h3>
                               <h3>{item.teachersMaxCount}</h3>
                               <h3>{item.childrenMaxCount}</h3>
   
                           </div>
                       }) : null} 
                </div>
                {ShowModal && 
                   <div className='category-inputs'>
                   <label>
                       <input type="text" name="schoolName" placeholder='schoolName' onChange={handleChange} />
                   </label>
                   <label>
                       <input type="text" name="address" placeholder='address' onChange={handleChange} />
                   </label>
                   <label>
                       <input type="text" name="directorName" placeholder='directorName' onChange={handleChange} />
                   </label>
                   <label>
                       <input type="number" name="directorPhoneNumber" placeholder='directorPhoneNumber' onChange={handleChange} />
                   </label>
                   <label>
                       <input type="email" name="directorEmailAddress" placeholder='directorEmailAddress' onChange={handleChange} />
                   </label>
                   <span>childrenMaxCount</span>
                   <label>
                       <input type="number" name="teachersMaxCount" placeholder='teachersMaxCount' onChange={handleChange} />
                   </label>
                   <span>childrenMaxCount</span>
                   <label>
                       <input type="number" name="childrenMaxCount" placeholder='childrenMaxCount' onChange={handleChange} />
                   </label>
                   <button onClick={addSchoolList}>Add School</button>
                   <div >
                   </div>
                      
   
                   </div>
                 }
                
            </div>
          

        </div>
    )
}
export default School