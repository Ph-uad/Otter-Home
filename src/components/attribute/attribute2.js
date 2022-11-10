import Image from '../../assets/img/building4.jpg'
import Classes from './attribute.module.css'

function Attributes() {
    return (
        <section className={ `section flex ${Classes.section}` }>
            <div className="section--container flex">
                <div className={ `flex--right ${Classes.right} ` }>
                    <h2 className="heading--primary">commemoration of the Past and New</h2>
                </div>

                <div className={ `flex--left ${Classes.right} ` }>

                    <figure className={ `figure ${Classes.figure} ` }>
                        <img src={ Image } alt="" className={ `img ${Classes.img} ` } />
                    </figure>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad quis consectetur laborum qui repellendus. Repellat quos maxime quod minima, distinctio nisi aliquid itaque odio.
                    </p>
                    <button className="btn btn--secondary">Utilities</button>
                </div>
            </div>

        </section>);
}

export default Attributes;