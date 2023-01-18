import Image from '../../../Assets/img/building2.jpg'
import Image2 from '../../../Assets/img/building4.jpg'
import Classes from './attribute.module.css'

function Attributes() {

    return (
        <>
            <section className={ `section flex ${Classes.section}` }>
                <div className="section--container flex">
                    <div className={ `flex--left ${Classes.right} ` }>
                        <h2 className="heading--primary">Living in a work of artistic designs</h2>
                    </div>

                    <div className={ `flex--right ${Classes.right} ` }>
                        <figure className={ `figure ${Classes.figure} ` }>
                            <img src={ Image } alt="" className={ `img ${Classes.img} ` } />
                        </figure>
                        <p className="paragraph">
                            <span className="bold">Lorem</span>  ipsum dolor sit amet consectetur adipisicing elit.
                             Laudantium ad quis conse laborum qui repellendus. Repellat quos maxime quod minima,
                              distinctio nisi aliquid itaque odio.
                        </p>
                    </div>
                </div>

            </section>
            <section className={ `section flex ${Classes.section}` }>
                <div className="section--container flex">
                    <div className={ `flex--right ${Classes.right} ` }>
                        <h2 className="heading--primary">Archaic or Modern Architecture</h2>
                    </div>

                    <div className={ `flex--left ${Classes.right} ` }>

                        <figure className={ `figure ${Classes.figure} ` }>
                            <img src={ Image2 } alt="" className={ `img ${Classes.img} ` } />
                        </figure>
                        <p className="paragraph">
                            <span className="bold">Lorem</span>  ipsum dolor sit amet consectetur adipisicing elit.
                             Laudantium ad quis conse laborum qui repellendus. Repellat quos maxime quod minima,
                              distinctio nisi aliquid itaque odio.
                        </p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Attributes;