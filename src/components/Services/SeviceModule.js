import Classes from './apartment.module.css';


const Module = ({data}) => {

    return (
        <div className={`mod flex ${Classes.module}`}>
            <figure className={Classes.figure}>
                <img src={data.img} className={Classes['image']} alt="house"></img>
            </figure>
            <div className={Classes['details']}>
                <h2 className='heading--secondary bolder'>{data.title}</h2>
                <p className='paragraph'>
                    Maintainable and sustainable properties that are
                    structured to host a family still cozy. In nice neighbourhood
                    strategically placed within range of utility stores, schools,
                    leisure parks and some other fun things the city has in store.
                </p>
            </div>
        </div>
    )
}
export default Module;