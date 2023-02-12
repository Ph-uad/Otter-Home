import Classes from '../listing.module.css';
import Modal from '../../../UI/overlayModal/Modal'
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { propActions } from '../../../data/objectData/objectData';

const ListModal = ({ data, close }) => {

    const dispatch = useDispatch();

    const detailHandler = (data) =>{
        console.log(data)
        dispatch(propActions.check(data))
    }

    return (
        <Modal onClick={ close }>
            <span className={ `${Classes.close} close` } onClick={ close }>&times;</span>

            <div className={ `flex ${Classes["modal__container"]}` }>

                <figure className={ Classes["modal__figure"] }>
                    <img src={ data.image } alt="" className={ `img ${Classes["header__img"]}` } />
                </figure>

                <div className={`flex--right ${Classes["modal__details"]}`}>

                    <ul className="list header__details">
                        <h2 className="heading--secondary">{ data.location }</h2>
                        <li className="list--item"><p className="paragraph">{ data.landSize }</p></li>
                        <li className="list--item"><p className="paragraph">Bath: { data.bathroom }</p></li>
                        <li className="list--item"><p className="paragraph">room: { data.rooms }</p></li>
                        <li className="list--item"><p className="paragraph">Garage: { data.garage }</p></li>
                    </ul>

                    <section className="">
                        <h3 className="gallery heading--tertiary"> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </section>

                    <Link to={`${data.id}`} relative="path" onClick={()=>detailHandler(data)} className={`button button--link ${Classes["btn"]}`}>
                            More Details
                    </Link>
            
                </div>
            </div>
        </Modal>

    )
}
export default ListModal;