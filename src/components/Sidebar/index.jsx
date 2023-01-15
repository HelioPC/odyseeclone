import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { MdOutlineHome } from 'react-icons/md';

import './style.scss';

export default function SideBar () {
    return (
        <div className='sidebar'>
            <nav>
                <Router>
                    <div className='sidebar-elements'>
                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/feat'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>

                        <div className='element'>
                            <NavLink to='/'>
                                <MdOutlineHome />
                                <p>Início</p>
                            </NavLink>
                        </div>
                    </div>
                </Router>
            </nav>
        </div>
    )
}
