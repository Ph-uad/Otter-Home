import Module from './SeviceModule';
import Classes from './services.module.css';
import Family from '../../assets/img/plan__family.jpg'
import Office from '../../assets/img/plan__office.jpg'
import Vacation from '../../assets/img/plan__vacation.jpg'
import { useState } from 'react';
import { useRef } from 'react';

const Service = () => {
    const CardData = [
        { img: Family, title: "Your Plan To Build A home" },
        { img: Office, title: "Your Plan To Build A work space" },
        { img: Vacation, title: "Your Plan To Build A Vacation" },
    ];
    const cardRef = useRef(null);
    const [initialSlideIndex, setCurrentSlideIndex] = useState(0);


    const previousSlide = () => {
        cardRef.current.classList.add('red')

        let isFirstSlide = initialSlideIndex === 0;
        let newSlide = isFirstSlide ? CardData.length - 1 : initialSlideIndex - 1
        setCurrentSlideIndex(newSlide);

        setTimeout(() => {
            cardRef.current.classList.remove('red')
        }, 500)
    
    }

    const nextSlide = () => {
        cardRef.current.classList.add('red2')
        let isFirstSlide = initialSlideIndex === CardData.length - 1;
        let newSlide = isFirstSlide ? 0 : initialSlideIndex + 1
        setCurrentSlideIndex(newSlide);
        setTimeout(() => {
            cardRef.current.classList.remove('red2')
        }, 500)
    }

    return (
        <section className={ Classes.container }>
            <div className={ Classes.heading }>
                <h4 className="heading--quadruple">types of properties</h4>
                <h2 className=" heading--secondary bolder">Your Plan </h2>
            </div>

            <div ref={ cardRef } className={ Classes.card }>
                <Module data={ CardData[initialSlideIndex] } />
            </div>

            <div className={ `flex ${Classes.nav}` }>
                <button className={ `${Classes['navigation__elipse--left']} ${Classes.btn}` } onClick={ previousSlide }> {'<'} </button>
                <button className={ `${Classes['navigation__elipse--right']} ${Classes.btn}` } onClick={ nextSlide } > {'>'} </button>
            </div>

        </section>
    )
}
export default Service;
