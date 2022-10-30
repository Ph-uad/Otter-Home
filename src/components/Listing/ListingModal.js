import Classes from './ListItems/listing.module.css';
import Modal from '../UI/overlayModal/Modal'

const ListModal = ({ data, close }) => {

    return (
        <Modal>
            <span className={ `${Classes.close} close` } onClick={close}>&times;</span>

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
                    <section className="">
                        <h3 className="gallery "> Features </h3>
                    </section>

                    <button className={ `btn btn--tertiary ${Classes["btn"]}` }>
                        Enquire Now
                    </button>

                </div>
            </div>
        </Modal>

    )
}
export default ListModal;