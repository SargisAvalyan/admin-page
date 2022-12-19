import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBox from './addBoxSchool';

import "./style.scss"

const Teacher = () => {
    const [ShowModal, setShowModal] = useState(false);
    const ShowModale = (e) => {
        setShowModal(ShowModal => !ShowModal)
    }
    const [teacherData, setTeacherData] = useState(
        {
            firstName:'',
            profession:'',
            phoneNumber:'',
            salary:'',
            experience:''
        }
    );
    const dispatch = useDispatch()
    const teacherSelector = useSelector(state => state.addTeacherReducer.teacherList)
    const handleChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
    }
    const addSchoolList = () => {
        dispatch({ type: "ADD_TEACHER", payload: teacherData })
        setTeacherData({
            ...teacherData,
            firstName:'',
            lastName:'',
            profession:'',
            phoneNumber:'',
            salary:'',
            experience:''

        })
        setShowModal(ShowModal => !ShowModal)


    }

    const handleDelete = (e, index) => {
        dispatch({ type: "DELETE_TEACHER", payload: index })
    }

    return (
        <div className='admin-title'>
            <div className='category'>
                ՈՒՍՈՒՑԻՉՆԵՐ
            </div >
            <div className='category-info'>
                <div className='add-button'>
                    <button className='schooladd' onClick={ShowModale}>Ավելացնել ուսուցիչ</button>
                </div>
                <div className='info'>
                    {teacherSelector.length ? teacherSelector.map((item, index) => {
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
                            <input type="text" name="firstName" placeholder='firstName' onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" name="lastName" placeholder='lastName' onChange={handleChange} />
                        </label>
                        <label>
                            <input type="text" name="profession" placeholder='profession' onChange={handleChange} />
                        </label>
                        <label>
                            <input type="number" name="phoneNumber" placeholder='phoneNumber' onChange={handleChange} />
                        </label>
                       
                        <label>
                            <input type="number" name="salary" placeholder='salary' onChange={handleChange} />
                        </label>
                        <label>
                            <input type="number" name="experience" placeholder='experience' onChange={handleChange} />
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
export default Teacher