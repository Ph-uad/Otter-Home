import Loft from '../../Assets/img/loft.jpg' ;
import Natural from '../../Assets/img/natural.jpg';
import Complex from '../../Assets/img/complex.jpg';
import Residential from '../../Assets/img/Residential.jpg' 
import classes from './categories.module.css'

const Categories = () => {
    return (
        <section className="catgeory">
            <h4 className="heading-quadruple">categories</h4>
            <h2 className=" heading-secondary"><span className="bolder">Pick</span> your neigbourhood <span className="bolder">of choice.</span></h2>
            <div className={`flex text-white ${classes["category-container"]}`}>
                <div className={classes["category-portal"]} style={{background : `linear-gradient(#1d1d1d20, #f1f1f115), url(${Complex})`}}>
                    <img className={classes['category-portal__image']} src={Complex} alt="" srcset="" />
                    <label className={classes['category-portal__label']}>Apartment Complex</label>
                </div>
                <div className={classes["category-portal"]}>
                    <img className={classes['category-portal__image']} src={Residential} alt="" srcset="" />
                    <label className={classes['category-portal__label']}>Residential</label>
                </div>
                <div className={classes["category-portal"]}>
                    <img className={classes['category-portal__image']} src={Natural} alt="" srcset="" />
                    <label className={classes['category-portal__label']}>Nature</label>
                </div>
                <div className={classes["category-portal"]}>
                    <img className={classes['category-portal__image']} src={Loft} alt="" srcset="" />
                    <label className={classes['category-portal__label']}>Loft</label>
                </div>
            </div>
        </section>
    )
}
export default Categories