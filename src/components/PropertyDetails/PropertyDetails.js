import { useSelector } from "react-redux";
import Classes from './propertyDetails.module.css'
import Agent from '../../assets/img/agent.jpg'


const PropertyDetails = () => {

    const data = useSelector(s => s.property.property);
    console.log(data)


    return (
        <section className="flex">


            <header className={ Classes.header } style={ { backgroundImage: `url(${data.image})` } }></header>
            
            <div className="">
                <div className="flex--right">
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
                </div>

                <div className="flex--left">
                <h3 className="gallery "> Agent </h3>
                <figure className={`figure ${Classes.figure}`}>
                    <img src={Agent} alt="" className="img" />
                </figure>
                <h4 className="heading--tertiary">Aubrie Tatcha</h4>

                <button className="btn btn--primary">Make Enquiries</button>
                </div>
            </div>

        </section>
    )
}
export default PropertyDetails;