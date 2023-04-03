import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../image/293883761_2130800320426973_1372944805427228729_n.jpg";


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='header'>
                    <div className="header-left">
                        <ul>
                            <li>
                                <Link to="/">Tələbələr</Link>
                            </li>
                            <li>
                                <Link to="/courses">Kurslar</Link>
                            </li>
                            <li>
                                <Link to="/payments">Ödənişlər</Link>
                            </li>
                            <li><Link to="/costs">Xərclər</Link></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header