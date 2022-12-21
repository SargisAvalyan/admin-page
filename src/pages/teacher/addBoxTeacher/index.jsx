
import React from 'react'
import image from "../../../images/teacher.png"
import "./style.scss"

const AddBox = ({ item, index, onDelete, onEdit }) => {
    const deleteTeacher = () => {
        onDelete()
    }
    const EditTeacher = () => {
        onEdit()
    }
    return (<>
        <button className="deletebutton" onClick={deleteTeacher}>Delete</button>
        <button className="deletebutton" onClick={EditTeacher}>Edite</button>
        <div className='add-box-conteiner'>
            <div className='image-box' style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className='infobox'>
                <p placeholder='scholname'>{item.firstName}   {item.lastName}</p>
                <h5>Մասնագիտ․։ {item.profession}</h5>
                <h5>Աշխատավարձ: {item.salary}</h5>
                <h5>Աշխ․ փորձ։ {item.experience}/տ․</h5>

            </div>
        </div>
    </>
    )
}

export default AddBox
