import React from 'react'
import image from "../../../images/children.png"
import "./style.scss"

const AddBox = ({item, index, onDelete, type}) => {

  const deleteChildren = () => {

  }
  return (
    <>
      <button className="deletebutton" onClick={deleteChildren}>Delete</button>
      <button className="deletebutton">Edite</button>
      <div className='add-box-conteiner'>
        <div className='image-box' style={{backgroundImage: `url(${image})`}}>

        </div>
        <div className='infobox'>

          <p>{item.firstName}{item.lastName}</p>
          <h5>Հասցե։{item.adress}</h5>
          <h5>Հեռ։{item.phoneNumber}</h5>


        </div>
      </div>
    </>
  )
}

export default AddBox
