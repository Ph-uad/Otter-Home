import { Button } from "../../../UI/button/Button"
import classes from './category.module.css'


const Category = (props) => {
    const {label, description, navigateTo} = props;
    return (
        <>
            <div className={`card ${classes.container}`}>
                    <div className={`${classes.details}`}>
                        <h2 className="heading--secondary">{label}</h2>
                        <p className="paragraph">{description}</p>
                        <Button label="Take me there" href={navigateTo}/>
                    </div>
            </div>
        </>
    )
}
export default Category