import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Menu.css';
import SimpleEmblem from "./SimpleEmblem.png"
import { MenuContext } from '../../MenuContext';
import { fonctDisplayPanier } from '../Panier/Panier';




function Logo() {
    return (<div className="logo">
        <img src={SimpleEmblem} alt="Logo" ></img>
    </div>)
}

function MenuEntrie(props) {
    const menuContext = useContext(MenuContext)
    return (
        <a href={props.url} onClick={(e)=>{
            e.preventDefault();
            props.text === "Panier" ?
                menuContext.fonctDisplayPanier(menuContext.displayPanier)
                 :
                <></>

        }}>
            <li>
                {props.text}
            </li>

        </a>)
}
function Research() {
    return ""
}
function Menu() {
    const menuContext = useContext(MenuContext)





    return (
        <nav>

            <div className="burger" onClick={() => menuContext.burgerButton(menuContext.displayUl)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            

         

            <Research></Research>
            <Logo className="logo" onClick={() => menuContext.burgerButton(menuContext.displayUl)} ></Logo>
            {
                menuContext.displayUl ?
                    <ul className="menuEntriesMobile">
                        {menuContext.tabMenuNav.map((valeur, index) => (
                            <MenuEntrie
                                text={valeur.text}
                                url={valeur.url}
                                isActive={valeur.isActive}
                                key={index}
                            ></MenuEntrie>
                        ))}
                    </ul>
                    :
                    <></>
            }
        </nav>
    )
}

export { Menu }

