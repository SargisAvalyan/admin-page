import React from 'react'
import "./style.scss"

const Home = () => {
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
                </div>
            </div>
        </div>
    )
}
export default Home
