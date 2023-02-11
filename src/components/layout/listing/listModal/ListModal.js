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

                    <li className="list header__details">
                        <ul className="list--item"><h2 className="heading--secondary">{ data.location }</h2></ul>
                        <ul className="list--item"><p className="paragraph">{ data.landSize }</p></ul>
                        <ul className="list--item"><p className="paragraph">Bath: { data.bathroom }</p></ul>
                        <ul className="list--item"><p className="paragraph">room: { data.rooms }</p></ul>
                        <ul className="list--item"><p className="paragraph">Garage: { data.garage }</p></ul>
                    </li>

                    <section className="">
                        <h3 className="gallery heading--tertiary"> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </section>

                    <Link to={`${data.location}`} relative="path">
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