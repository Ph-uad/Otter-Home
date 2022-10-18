import plans from '../../Assets/img/plan.jpg'
import classes from './aboutus.module.css'
import Buttons from '../UI/Button/Button'

const Aboutus = () => {
    return (
        <section className="section aboutus">
            <div className={`flex ${classes["aboutus-container"]}`}>
                <div className={`img-placeholder flex-right ${classes['aboutus-gallery']}`}>
                    <img src={plans} alt="plan" className="img" />
                </div>
                <div className={`flex-left  ${classes['aboutus-text']}`}>
                    <div className="paragraph">
                        <h4 className="heading-quadruple">categories</h4>
                        <h2 className=" heading-secondary"><span className="bolder">We should they use this service ?</span></h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptates sunt quod fuga nisi nihil ratione, ea beatae. Temporibus, repellendus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, omnis?
                    </div>
                    <Buttons>Read More</Buttons>
                </div>
            </div>
        </section>
    )
}
export default Aboutus;