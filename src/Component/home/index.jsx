import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.scss"

const Home = () => {


    return (
       
            <div className='admin-list'>
                <div className='logo'>ՀՀ ՏԱՎՈՒՇԻ ՄԱՐԶԻ ՀԻՄՆԱԿԱՆ ԴՊՐՈՑՆԵՐ</div>
                <ul>
                    <li>
                        <NavLink to={"/School"}>ԴՊՐՈՑ N.</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Teachers"}>ՈՒՍՈՒՑԻՉՆԵՐ</NavLink>

                    </li>
                    <li>
                        <NavLink to={"/Children"}>ԱՇԱԿԵՐՏՆԵՐ</NavLink>

                    </li>
                </ul>
            </div>
        
    )
}
export default Home
