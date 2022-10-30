import { useState } from "react";
import { useSelector } from "react-redux";
import Classes from './listing.module.css';
import ListModal from '../ListingModal'


const ListItems = () => {

    const [modal, setModal] = useState();

    const toggleModalHandler = (item) => {
        setModal(item);
    }
    const closeModalHandler = () => {
        setModal();
    }

    const property = useSelector(state => state.property)
    const lists = property.map((item, index) => {
        return (
            <li className={ `list__item` } key={ index } onClick={ () => toggleModalHandler(item) }>

                <figure className={ Classes.figure }>
                    <img className={ `img ${Classes.img}` } src={ item.image } alt="property" />
                </figure>
                <div className={ `` }>
                    <h3 className="heading--tertiary">{ item.location }</h3>
                    <div className={ `flex ${Classes.flex}` }>
                        <div className={ Classes["icon__frame"] }>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5341 0L13.5785 2.04444L11.0097 4.59556L12.2719 5.85778L14.823 3.28889L16.8674 5.33333V0H11.5341ZM0.867432 5.33333L2.91188 3.28889L5.46299 5.85778L6.72521 4.59556L4.15632 2.04444L6.20077 0H0.867432V5.33333ZM6.20077 16L4.15632 13.9556L6.72521 11.4044L5.46299 10.1422L2.91188 12.7111L0.867432 10.6667V16H6.20077ZM16.8674 10.6667L14.823 12.7111L12.2719 10.1422L11.0097 11.4044L13.5785 13.9556L11.5341 16H16.8674V10.6667Z" fill="black" />
                            </svg>
                        </div>
                        <p className="paragraph">{ item.landSize }</p>
                    </div>
                    <div className={ `flex ${Classes.flex}` }>
                        <p className="paragraph">Bth: { item.bathroom }</p>
                        <p className="paragraph">rms: { item.rooms }</p>
                        <p className="paragraph">grg: { item.garage }</p>
                    </div>
                </div>

            </li>
        )
    })

    return (
        <div className="grid">
            { lists }
            { modal && <ListModal data={modal} close={closeModalHandler}/> }
        </div>
    )

}
export default ListItems;