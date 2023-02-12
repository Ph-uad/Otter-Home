import Classes from '../listing.module.css';
import ListModal from '../listModal/ListModal'
import { useState } from 'react';


const ListItem = ({ result }) => {

    const [modal, setModal] = useState();
    const toggleModalHandler = (item) => setModal(item);
    const closeModalHandler = () => setModal();

    let lists = result.map((item, index) => {
        return (
            <li className={`${Classes.list}  list__item` } key={ index } onClick={ () => toggleModalHandler(item) }>
                <figure className={ Classes.figure }>
                    <img decoding='async' loading='lazy' className={ `img ${Classes.img}` } src={ item.image } alt="property" />
                </figure>
                <div className={ `` }>
                    <h3 className="heading--tertiary">{ item.location }</h3>
                        <p className="paragraph">{ item.landSize }</p>
                </div>
            </li>
        )
    });

    return (
        <>
            { lists }
            { modal && <ListModal data={ modal } close={ closeModalHandler } /> }
        </>
    );
}

export default ListItem;