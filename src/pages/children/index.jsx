import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBox from './addBoxChildren';

import "./style.scss"

const Children = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [selectedChildren, setSelectedChildren] = useState(null)
  const [selectedChildrenIndex, setSelectedChildrenIndex] = useState(null)
  const ShowModale = (e) => {
    setShowModal(ShowModal => !ShowModal)
  }
  const [childrenData, setChildrenData] = useState(
    {
      firstName: '',
      lastName: '',
      profession: '',
      phoneNumber: '',
      salary: '',
      experience: '',
    }
  );
  const dispatch = useDispatch()
  const selectorChildren = useSelector(state => state.addChildrenReducer.childrenList)
  const handleChange = (e) => {
    setChildrenData({ ...childrenData, [e.target.name]: e.target.value })
  }
  const addChildrenlList = () => {
    if ( selectedChildren) {
      dispatch({type:"EDIT_CHILDREN", payload:{children:childrenData, index:selectedChildrenIndex}})
      setSelectedChildrenIndex(null)
      setSelectedChildren(null)
    }else{
      dispatch({ type: "ADD_CHILDREN", payload: childrenData })
    }
      setChildrenData({
        ...childrenData,
        firstName: '',
        lastName: '',
        adress: '',
        phoneNumber: '',
      })
      setShowModal(ShowModal => !ShowModal)
    }
    const handleDelete = (index) => {
    dispatch({ type: "DELETE_CHILDREN", payload: index })
  }
   
   const handleEdit = (item, index) => {
    setSelectedChildren(item)
    setSelectedChildrenIndex(index)
  }

  useEffect(() => {
    if (selectedChildren) {
      setChildrenData(selectedChildren)
      setShowModal(true)
      console.log(selectedChildren);
    }

  }, [selectedChildren])



  return (
    <div className='admin-title'>
      <div className='category'>
        <p>
          ԱՇԱԿԵՐՏՆԵՐ
        </p>
        <div className='add-button'>
          <button className='schooladd' onClick={ShowModale}>Ավելացնել աշակերտ</button>
        </div>
      </div>
      <div className='category-info'>

        <div className='info'>
          {selectorChildren.length ? selectorChildren.map((item, index) => {
            return <div  key={index} className='info'>
              <div key={index}>
                <AddBox type={'chilrden'} item={item} index={index} onDelete={() => handleDelete(index)} onEdit={() => handleEdit(item, index)}/>
              </div>

            </div>


          }) : <div className='empty-box'><p>Աշակարտների ցանկը դատարկ է ․ ․ ․</p></div> }
        </div>


        {ShowModal &&
          <div className='category-inputs'>
            <label>
              <input type="text" value={childrenData.firstName}  name="firstName" placeholder='Անուն' onChange={handleChange} />
            </label>
            <label>
              <input type="text" value={childrenData.lastName} name="lastName" placeholder='Ազգանուն' onChange={handleChange} />
            </label>
            <label>
              <input type="text" value={childrenData.adress} name="adress" placeholder='Հասցե' onChange={handleChange} />
            </label>
            <label>
              <input type="number" value={childrenData.phoneNumber} name="phoneNumber" placeholder='Հեռախոսահամար' onChange={handleChange} />
            </label>


            <button onClick={addChildrenlList}>{selectedChildren ? 'Պահպանել' : 'Ավելացնել աշակերտ'}</button>
            <div>
            </div>


          </div>
        }

      </div>


    </div>
  )
}
export default Children