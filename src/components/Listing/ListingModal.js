import Classes from './ListItems/listing.module.css';
import Modal from '../UI/overlayModal/Modal'
import { Link } from 'react-router-dom';
// import { Wrapper, Status } from '@googlemaps/react-wrapper';

const ListModal = ({ data, close }) => {

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
             

                    <div className="flex">


                        <Link to="/listing/:productId">
                            <button className={ `btn btn--secondary ${Classes["btn"]}` }>
                                More Details
                            </button>
                        </Link>
                    </div>


                </div>
            </div>

            {/* <div className={ `flex ${Classes["modal__container"]}` }>
                <section className="">
                    <h3 className="gallery "> Property Enquiry </h3>
                    <figure className={ Classes["modal__figure"] }>
                        <img src="" alt="The Agent" className={ `img ${Classes["header__img"]}` } />
                        <figcaption>The AGENT</figcaption>
                    </figure>

                </section>
                <section>
                {/* className={ Classes.map }>
                    <Wrapper apiKey={ "YOUR_API_KEY" } > 
                                       </Wrapper> 
                </section> 
               
                 </div>
             */}
        </Modal>

    )
}
export default ListModal;