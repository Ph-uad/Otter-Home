import Classes from './listing.module.css';
import Modal from '../ui/overlayModal/Modal'
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { propActions } from '../../data/ApartmentData';

const ListModal = ({ data, close }) => {

    const dispatch = useDispatch();

    const detailHandler = (data) =>{
        dispatch(propActions.check(data))
    }

    return (
        <Modal>
            <span className={ `${Classes.close} close` } onClick={ close }>&times;</span>

            <div className={ `flex ${Classes["modal__container"]}` }>

                <figure className={ Classes["modal__figure"] }>
                    <img src={ data.image } alt="" className={ `img ${Classes["header__img"]}` } />
                </figure>

                <div className={ Classes["modal__details"] }>
                    <li className="list header__details">
                        <ul className="list--item"><h2 className="heading--secondary">{ data.location }</h2>  </ul>
                        <ul className="list--item"><p className="paragraph">{ data.landSize }</p>  </ul>
                        <ul className="list--item"><p className="paragraph">Bath: { data.bathroom }</p>  </ul>
                        <ul className="list--item"><p className="paragraph">room: { data.rooms }</p>  </ul>
                        <ul className="list--item"><p className="paragraph">Garage: { data.garage }</p>  </ul>
                    </li>

                    <section className="">
                        <h3 className="gallery "> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </section>


                    <Link to="/listing/details">
                        <button onClick={()=>detailHandler(data)} className={ `btn btn--tertiary ${Classes["btn"]}` }>
                            More Details
                        </button>
                    </Link>
            
                </div>
            </div>
        </Modal>

    )
}
export default ListModal;