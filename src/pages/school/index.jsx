import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBox from './addBoxSchool';

import "./style.scss"

const School = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [selectedSchoolIndex, setSelectedSchoolIndex] = useState(null)
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

    if (selectedSchool) {
      dispatch({ type: "EDIT_SCHOOL", payload: { school: schoolData, index: selectedSchoolIndex } })
      setSelectedSchoolIndex(null)
      setSelectedSchool(null)
    } else {
      dispatch({ type: "ADD_SCHOOL", payload: schoolData })
    }
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

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_SCHOOL", payload: index })
  }

  const handleEdit = (item, index) => {
    setSelectedSchoolIndex(index)
    setSelectedSchool(item)
  }

  useEffect(() => {
    if (selectedSchool) {
      setSchoolData(selectedSchool)
      setShowModal(true)
    }

  }, [selectedSchool])

  return (
    <div className='admin-title'>
      <div className='category'>
        <p>????????????????</p>
        <button className='schooladd' onClick={ShowModale}>?????????????????? ??????????</button>
      </div>
      <div className='category-info'>

        <div className='info'>
          {selector.length ? selector.map((item, index) => {
            return <div key={index} className='info'>
              <div >
                <AddBox item={item} index={index}
                  onDelete={() => handleDelete(index)}
                  onEdit={() => handleEdit(item, index)}
                />
              </div>
            </div>
          }) : <div className='empty-box'><p>?????????????????? ?????????? ???????????? ?? ??? ??? ???</p></div>}
        </div>


        {ShowModal &&
          <div className='category-inputs'>
            <label>
              <input value={schoolData.schoolName} type="text" name="schoolName" placeholder='???????????? ??????????????????'
                onChange={handleChange} />
            </label>
            <label>
              <input value={schoolData.address} type="text" name="address" placeholder='??????????'
                onChange={handleChange} />
            </label>
            <label>
              <input value={schoolData.directorName} type="text" name="directorName" placeholder='?????????????? ?????????? ????????????????'
                onChange={handleChange} />
            </label>
            <label>
              <input value={schoolData.directorPhoneNumber} type="number" placeholder="?????????????? ??????????????????????????"
                name='directorPhoneNumber'
                onChange={handleChange} />
            </label>
            <label>
              <input value={schoolData.directorEmailAddress} type="email" placeholder="?????????????? ??????? ????????"
                name='directorEmailAddress'
                onChange={handleChange} />
            </label>
            <span>???????????????????????? ???????????????????????? ??????????</span>
            <label>
              <input value={schoolData.teachersMaxCount} type="number"
                name='teachersMaxCount' onChange={handleChange} />
            </label>
            <span>?????????????????????? ???????????????????????? ??????????</span>
            <label>
              <input value={schoolData.childrenMaxCount} type="number"
                name='childrenMaxCount' onChange={handleChange} />
            </label>
            <button onClick={addSchoolList}>{selectedSchool ? '????????????????' : '?????????????????? ??????????'}</button>
            <div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default School