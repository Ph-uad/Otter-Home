import { useSelector } from "react-redux";
import Classes from './propertyDetails.module.css'
import Agent from '../../Assets/img/agent.jpg'
import Footer from '../Footer/Footer';


const PropertyDetails = () => {

    const data = useSelector(s => s.property.property);

    return (
        <section className="">
            <figure className={ `figure ${Classes.header}` }>
                <img className={ `img ${Classes.img}` } src={ data.image } alt="proprty" />
            </figure>

            <div className={ `flex ${Classes.detail}` }>
                <div className="flex--right">
                    <li className="list header__details">
                        <ul className="list--item"><h2 className="">{ data.location }</h2>  </ul>
                        <ul className="list--item"><p className="paragraph">{ data.landSize }</p>  </ul>
                        <ul className="list--item"><p className="paragraph">Bath: { data.bathroom }</p>  </ul>
                        <ul className="list--item"><p className="paragraph">room: { data.rooms }</p>  </ul>
                        <ul className="list--item"><p className="paragraph"> Garage (Car-space): { data.garage }</p>  </ul>
                    </li>

                    <div className="">
                        <h3 className="gallery "> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </div>
                </div>

                <div className="flex--left">
        
                    <figure className={ `figure ${Classes.figure}` }>
                        <img src={ Agent } alt="" className="img" />
                    </figure>
                    <h4 className="heading--tertiary">Agent: Aubrie Tatcha</h4>

                    <button className="btn btn--secondary">Make Enquiries</button>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default PropertyDetails;