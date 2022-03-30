import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';

import './style.scss';

export default function Header () {
    const iconSize = 16;
    const iconColor = '#FFF';

    return(
        <header>
            <div className='header-first'>
                <button>
                    <GiHamburgerMenu size={iconSize+6} color={iconColor} />
                </button>
            </div>

            <div className='header-main'>
                <div className='header-logo'>
                    <img src='https://cryptocurrencyjobs.co/startups/assets/logos/odysee.jpeg' alt='logo' />
                </div>

                <div className='header-input'>
                    <div className='search-area'>
                        <BiSearch size={iconSize} color={iconColor} />
                        <input type='search' placeholder='Pesquisar' />
                    </div>

                    <div className='btn-area'>
                        <button>
                            <VscBell size={iconSize+6} color={iconColor} />
                        </button>

                        <button style={{marginLeft: '5px'}}>
                            <AiOutlineSetting size={iconSize+6} color={iconColor} />
                        </button>
                    </div>
                </div>

                <div className='header-sign'>
                    <a href='https://github.com/HelioPC'>Entrar</a>
                    <a href='https://github.com/HelioPC'>Registre-se</a>
                </div>
            </div>
        </header>
    )
}
