import { useSelector } from "react-redux";
import Classes from './propertyDetails.module.css'
import Agent from '../../../Assets/img/agent.jpg'
import { useParams } from "react-router-dom";
import Map from '../../../Assets/img/map.png'


const PropertyDetails = () => {
    const param = useParams()
    console.log(param)

    const data = useSelector(s => s.property.property);

    return (
        <section className="section">
            <div className="container">
                <h2 className="heading--primary">{ data.location }</h2>
                <figure className={ `figure ${Classes.header}` }>
                    <img className={ `img ${Classes.img}` } src={ data.image } alt="proprty" />
                </figure>

                <div className={ `flex ${Classes.detail}` }>
                    <div className="">
                        <h3 className="heading--tertiary "> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </div>

                    <ul className="flex--right list">
                        <h3 className="heading--tertiary "> Property facilities </h3>
                        <li className="list--item"><p className="paragraph">{ data.landSize }</p>  </li>
                        <li className="list--item"><p className="paragraph">Bath: { data.bathroom }</p>  </li>
                        <li className="list--item"><p className="paragraph">room: { data.rooms }</p>  </li>
                        <li className="list--item"><p className="paragraph"> Garage (Car-space): { data.garage }</p>  </li>
                    </ul>
                </div>

                <div className="">
                    <h3 className="heading--tertiary ">Designated Agent </h3>
                    <figure className={ `figure ${Classes.figure}` }>
                        <img src={ Agent } alt="" className="img" />
                    </figure>

                    <h4 className="heading--tertiary">Agent: Aubrie Tatcha</h4>
                    
                </div>

                <figure aria-label="map" className="figure">
                    <img src={ Map } className="img" alt="map" srcset="" />
                </figure>

            </div>
        </section>
    )
}
export default PropertyDetails;