
import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../../images/school.png"
import "./style.scss"

const AddBox = ({ item, index, onDelete, onEdit, handleDetailes }) => {
    const deleteSchool = () => {
        onDelete()
    }
    const EditSchool = () => {
        onEdit()
    }

    return (<>
        <button className="deletebutton" onClick={deleteSchool}>Հեռացնել</button>
        <button className="editbutton" onClick={EditSchool}>Փոփոխել</button>
        <div className='add-box-conteiner'>
            <Link to={`/School-detailes${index}`}>
            <div className='image-box' style={{ backgroundImage: `url(${image})` }}>

            </div>
            
                <div className='infobox'>
                    <p>{item.schoolName}</p>
                    <h5>Հասցե։ {item.address}</h5>
                    <h5>Տնօրեն: {item.directorName}</h5>
                    <h5>Հեռ․ {item.directorPhoneNumber}</h5>
                    <h5>e-mail: {item.directorEmailAddress}</h5>
                    <h5>ՈՒսուցիչներ: {item.teachersMaxCount}/հոգի</h5>
                    <h5>Աշակերտներ: {item.childrenMaxCount}/հոգի</h5>


                </div>
            </Link>
        </div>
    </>
    )
}

export default AddBox
