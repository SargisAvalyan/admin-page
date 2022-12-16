import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"

const Home = () => {
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
    const selector = useSelector(state=> state.addReducer.schoolList)
    console.log(selector)
    const handleChange = (e) => {
        setSchoolData({ ...schoolData, [e.target.name]: e.target.value })
    }
    const addSchoolList = () => { 
          dispatch({ type: "ADD_SCHOOL", payload: schoolData })
          setSchoolData({...schoolData,
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
           }       
              
  
    return (
        <div className='admin-page'>
            <div className='admin-list'>
                <div className='logo'>ՀՀ ՏԱՎՈՒՇԻ ՄԱՐԶԻ ՀԻՄՆԱԿԱՆ ԴՊՐՈՑՆԵՐ</div>
                <div className='categoryes'>ԴՊՐՈՑ N.</div>
                <div className='categoryes'>ՈՒՍՈՒՑԻՉՆԵՐ</div>
                <div className='categoryes'>ԱՇԱԿԵՐՏՆԵՐ</div>
            </div>
            <div className='admin-title'>

                <div className='category'>
                    category
                </div>
                <div className='category-info'>
                    category info
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
                    
                </div>
            </div>
        </div>
    )
}
export default Home
