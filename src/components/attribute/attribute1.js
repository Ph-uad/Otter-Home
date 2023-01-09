import Image from '../../Assets/img/building2.jpg'
import Classes from './attribute.module.css'

function Attributes() {
    
    return (<section className={`section flex ${Classes.section}`}>
        <div className="section--container flex">
            <div className={ `flex--left ${Classes.right} ` }>
                <h2 className="heading--primary">Living in a work of artistic designs</h2>
            </div>

            <div className={ `flex--right ${Classes.right} ` }>
                
                <figure className={`figure ${Classes.figure} ` }>
                    <img src={ Image } alt="" className={`img ${Classes.img} ` }/>
                </figure>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad quis consectetur laborum qui repellendus. Repellat quos maxime quod minima, distinctio nisi aliquid itaque odio.
                </p>
            </div>
        </div>

    </section>);
}

export default Attributes;