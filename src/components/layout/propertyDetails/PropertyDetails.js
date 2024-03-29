import { useSelector } from "react-redux";
import Classes from './propertyDetails.module.css'
import Agent from '../../../Assets/img/agent.jpg'
import { Link, useParams } from "react-router-dom";
import Map from '../../../Assets/img/map.png'


const PropertyDetails = () => {
    const param = useParams()
    console.log(param)

    const data = useSelector(s => s.property.property);

    return (
        <section className="section">

            <div className="container">
                <div className="">
                    <Link to="/listing" className="link"> <span className={ Classes.arrow }>&larr;</span></Link>
                    <h2 className="heading--primary">{ data.location }</h2>
                </div>

                <figure className={ `figure ${Classes.header}` }>
                    <img className={ `img ${Classes.img}` } src={ data.image } alt="proprty" />
                </figure>

                <div className={ `container flex ${Classes.detail}` }>
                    <div className={ `${Classes.description} list ` }>
                        <h3 className="heading--tertiary "> Description </h3>
                        <p className="paragraph">{ data.description }</p>
                    </div>

                    <ul className={ `${Classes.facilities} list ` }>
                        <h3 className="heading--tertiary "> Property facilities </h3>
                        <li className="list--item"><p className="paragraph">{ data.landSize }</p>  </li>
                        <li className="list--item"><p className="paragraph">Bath: { data.bathroom }</p>  </li>
                        <li className="list--item"><p className="paragraph">room: { data.rooms }</p>  </li>
                        <li className="list--item"><p className="paragraph"> Garage (Car-space): { data.garage }</p>  </li>
                    </ul>
                </div>

                <div className={ `${Classes.agent} container ` }>
                    <figure className={ `figure ${Classes.figure}` }>
                        <img src={ Agent } alt="" className="img" />
                    </figure>
                    <h3 className="heading--tertiary ">Designated Agent </h3>
                    <h4 className="heading--tertiary">Agent: Aubrie Tatcha</h4>
                </div>

                <div className="container">
                    <h2 className="heading--secondary">Map View</h2>
                    <figure aria-label="map" className="figure">
                        <img src={ Map } className={`img ${Classes['img--scale']}`} alt="map" srcset="" />
                    </figure>
                </div>

            </div>
        </section>
    )
}
export default PropertyDetails;