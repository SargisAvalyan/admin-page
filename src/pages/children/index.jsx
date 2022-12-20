import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddBox from './addBoxChildren';

import "./style.scss"

const Children = () => {
  const [ShowModal, setShowModal] = useState(false);
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
    setChildrenData({...childrenData, [e.target.name]: e.target.value})
  }
  const addChildrenlList = () => {
    if (validate()) {
      dispatch({type: "ADD_CHILDREN", payload: childrenData})
      setChildrenData({
        ...childrenData,
        firstName: '',
        lastName: '',
        adress: '',
        phoneNumber: '',
      })
      setShowModal(ShowModal => !ShowModal)
    }


  }

  const validate = () => {
    let isValidate = true

    return true
  }

  const handleDelete = (index) => {
    dispatch({type: "DELETE_CHILDREN", payload: index})
  }
  console.log(selectorChildren);
  return (
    <div className='admin-title'>
      <div className='category'>
        ԱՇԱԿԵՐՏՆԵՐ
      </div>
      <div className='category-info'>
        <div className='add-button'>
          <button className='schooladd' onClick={ShowModale}>Ավելացնել աշակերտ</button>
        </div>
        <div className='info'>
          {selectorChildren.length ? selectorChildren.map((item, index) => {
            return <div className='info'>
              <div>
                {/*<button className="deletebutton" onClick={(e) => handleDelete(e, index)} >Delete</button>*/}
                {/*<button className="deletebutton" >Edite</button>*/}
                <AddBox type={'chilrden'} item={item} index={index} onDelete={() => handleDelete(index)}/>
              </div>

            </div>


          }) : null}
        </div>


        {ShowModal &&
          <div className='category-inputs'>
            <label>
              <input type="text" name="firstName" placeholder='firstName' onChange={handleChange}/>
            </label>
            <label>
              <input type="text" name="lastName" placeholder='lastName' onChange={handleChange}/>
            </label>
            <label>
              <input type="text" name="adress" placeholder='adress' onChange={handleChange}/>
            </label>
            <label>
              <input type="number" name="phoneNumber" placeholder='phoneNumber' onChange={handleChange}/>
            </label>


            <button onClick={addChildrenlList}>Add School</button>
            <div>
            </div>


          </div>
        }

      </div>


    </div>
  )
}
export default Children