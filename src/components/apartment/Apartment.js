import Module from './Module';
import Classes from './apartment.module.css';
import Family from '../../Assets/img/plan__family.jpg'
import Office from '../../Assets/img/plan__office.jpg'
import Vacation from '../../Assets/img/plan__vacation.jpg'
import { useState } from 'react';

const Plan = () => {

        const [initialSlide, setCurrentSlide] = useState(0);

        const CardData= [
            {img : Family, title : "Your Plan To Build A home"},
            {img : Office, title : "Your Plan To Build A work space"},
            {img : Vacation, title : "Your Plan To Build A Vacation"},
        ]

        const previousSlide = () =>{
            let isFirstSlide =  initialSlide === 0;
            let newSlide = isFirstSlide ? CardData.length - 1 : initialSlide - 1
            setCurrentSlide(newSlide);
        }
        const nextSlide = () =>{
            let isFirstSlide =  initialSlide === CardData.length - 1;
            let newSlide = isFirstSlide ? 0 : initialSlide + 1
            setCurrentSlide(newSlide);
        }

    return (
        <section className={Classes.container}>

            <h4 className="heading-quadruple">best deals</h4>
            <h2 className=" heading-secondary bolder">Your Plan </h2>

            <div className={Classes.card}>
                <Module data={CardData[initialSlide]}/>
            </div>

            <div className='flex'>
                <button className={`${Classes['navigation__elipse--left']} ${Classes.btn}`} onClick={previousSlide}>L</button>
                <button className={`${Classes['navigation__elipse--right']} ${Classes.btn}`} onClick={nextSlide} >R</button>
            </div>

        </section>
    )
}
export default Plan;
