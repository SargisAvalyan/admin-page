
import React from 'react'
import image from "../../../images/school.png"
import "./style.scss"

const AddBox = ({ item, index, onDelete, onEdit }) => {
    const deleteSchool = () => {
        onDelete()
    }
    const EditSchool = () => {
        onEdit()
    }
    return (<>
        <button className="deletebutton" onClick={deleteSchool}>Delete</button>
        <button className="editbutton" onClick={EditSchool}>Edit</button>
        <div className='add-box-conteiner'>
            <div className='image-box' style={{ backgroundImage: `url(${image})` }}>

            </div>
            <div className='infobox'>
                <p placeholder='scholname'>{item.schoolName}</p>
                <h5>Հասցե։ {item.address}</h5>
                <h5>Տնօրեն: {item.directorName}</h5>
                <h5>Հեռ․ {item.directorPhoneNumber}</h5>
                <h5>e-mail: {item.directorEmailAddress}</h5>
                <h5>ՈՒսուցիչներ: {item.teachersMaxCount}/հոգի</h5>
                <h5>Աշակերտներ: {item.childrenMaxCount}/հոգի</h5>
            </div>
        </div>
    </>
    )
}

export default AddBox
