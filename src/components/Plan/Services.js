import Module from './SeviceModule';
import Classes from './services.module.css';
import Family from '../../assets/img/plan__family.jpg'
import Office from '../../assets/img/plan__office.jpg'
import Vacation from '../../assets/img/plan__vacation.jpg'
import { useState } from 'react';

const Service = () => {
    const CardData = [
        { img: Family, title: "Your Plan To Build A home" },
        { img: Office, title: "Your Plan To Build A work space" },
        { img: Vacation, title: "Your Plan To Build A Vacation" },
    ]

    const [initialSlideIndex, setCurrentSlideIndex] = useState(0);
    let nextSlideIndex = initialSlideIndex === CardData.length - 1 ? 0 : initialSlideIndex + 1;


    const previousSlide = () => {
        let isFirstSlide = initialSlideIndex === 0;
        let newSlide = isFirstSlide ? CardData.length - 1 : initialSlideIndex - 1
        setCurrentSlideIndex(newSlide);
    }
    const nextSlide = () => {
        let isFirstSlide = initialSlideIndex === CardData.length - 1;
        let newSlide = isFirstSlide ? 0 : initialSlideIndex + 1
        setCurrentSlideIndex(newSlide);
    }

    return (
        <section className={Classes.container}>
            <div className={Classes.heading}>
                <h4 className="heading-quadruple">categories of services</h4>
                <h2 className=" heading-secondary bolder">Your Plan </h2>
            </div>

            <div className={Classes.card}>
                <Module data={CardData[initialSlideIndex]} />
                <Module data={CardData[nextSlideIndex]} />
            </div>

            <div className={`flex ${Classes.nav}`}>
                <button className={`${Classes['navigation__elipse--left']} ${Classes.btn}`} onClick={previousSlide}>L</button>
                <button className={`${Classes['navigation__elipse--right']} ${Classes.btn}`} onClick={nextSlide} >R</button>
            </div>

        </section>
    )
}
export default Service;
