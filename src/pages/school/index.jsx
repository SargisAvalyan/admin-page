import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBox from './addBoxSchool';

import "./style.scss"

const School = () => {
    const [ShowModal, setShowModal] = useState(false);
    const ShowModale = (e) => {
        setShowModal(ShowModal => !ShowModal)
    }
    const [schoolData, setSchoolData] = useState(
        {
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
        }
    );
    const dispatch = useDispatch()
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
        setShowModal(ShowModal => !ShowModal)


    }

    const handleDelete = (e, index) => {
        dispatch({ type: "DELETE_SCHOOL", payload: index })
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
                        return <div className='info'>
                            <div>
                                <button className="deletebutton" onClick={(e) => handleDelete(e, index)} >Delete</button>
                                <button className="deletebutton" >Edite</button>
                                <AddBox item={item} index={index} />
                            </div>

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