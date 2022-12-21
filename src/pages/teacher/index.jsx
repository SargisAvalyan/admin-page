import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBox from './addBoxTeacher';

import "./style.scss"

const Teacher = () => {
    const [ShowModal, setShowModal] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [selectedTeacherIndex, setSelectedTeacherIndex] = useState(null)
  const ShowModale = (e) => {
        setShowModal(ShowModal => !ShowModal)
    }
    const [teacherData, setTeacherData] = useState(
        {
            firstName: '',
            profession: '',
            phoneNumber: '',
            salary: '',
            experience: ''
        }
    );
    const dispatch = useDispatch()
    const teacherSelector = useSelector(state => state.addTeacherReducer.teacherList)
    const handleChange = (e) => {
        setTeacherData({ ...teacherData, [e.target.name]: e.target.value })
    }
    const addTeacherList = () => {
        if(selectedTeacher){
            dispatch({type:"EDIT_TEACHER", payload:{teacher:teacherData, index:selectedTeacherIndex}})
        setSelectedTeacher(null)
        setSelectedTeacherIndex(null)
        }else{
        dispatch({ type: "ADD_TEACHER", payload: teacherData })
        }
        setTeacherData({
            ...teacherData,
            firstName: '',
            lastName: '',
            profession: '',
            phoneNumber: '',
            salary: '',
            experience: ''

        })
        setShowModal(ShowModal => !ShowModal)


    }

    const handleDelete = (index) => {
        dispatch({ type: "DELETE_TEACHER", payload: index })
    }
    const handleEdit=(item, index)=>{
setSelectedTeacher(item)
setSelectedTeacherIndex(index)
    }
    useEffect(() => {
       if(selectedTeacher){
        setTeacherData(selectedTeacher)
        setShowModal(true)
       }
    }, [selectedTeacher]);

    return (
        <div className='admin-title'>
            <div className='category'>
                <p>
                    ՈՒՍՈՒՑԻՉՆԵՐ
                </p>
                <button className='schooladd' onClick={ShowModale}>Ավելացնել ուսուցիչ</button>
            </div >
            <div className='category-info'>

                <div className='info'>
                    {teacherSelector.length ? teacherSelector.map((item, index) => {
                        return <div key={index} className='info'>
                            <div  key={index} >
                                <AddBox item={item} index={index} 
                                onDelete={() => handleDelete(index)}
                                onEdit={()=>handleEdit(item, index)} />
                            </div>

                        </div>


                    }) : null}
                </div>


                {ShowModal &&
                    <div className='category-inputs'>
                        <label>
                            <input value={teacherData.firstName} type="text" name="firstName" placeholder='firstName' onChange={handleChange} />
                        </label>
                        <label>
                            <input value={teacherData.lastName} type="text" name="lastName" placeholder='lastName' onChange={handleChange} />
                        </label>
                        <label>
                            <input value={teacherData.profession} type="text" name="profession" placeholder='profession' onChange={handleChange} />
                        </label>
                        <label>
                            <input value={teacherData.phoneNumber} type="number" name="phoneNumber" placeholder='phoneNumber' onChange={handleChange} />
                        </label>

                        <label>
                            <input value={teacherData.salary} type="number" name="salary" placeholder='salary' onChange={handleChange} />
                        </label>
                        <label>
                            <input value={teacherData.experience} type="number" name="experience" placeholder='experience' onChange={handleChange} />
                        </label>

                        <button onClick={addTeacherList}>{selectedTeacher ? 'Save changes' : 'Add Teacher'}</button>
                        <div >
                        </div>


                    </div>
                }

            </div>


        </div>
    )
}
export default Teacher