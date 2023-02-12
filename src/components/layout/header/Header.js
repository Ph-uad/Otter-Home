import classes from './header.module.css';
import { category as Category } from './Header';
import { Button } from '../../UI/button/Button';

const Header = () => {
    return (<>
        <div className={ classes["grid"] }>
            <div className={ classes.card }>
                <Category label="homes" description="aesthetic pleasing properties, with a wide range of taste for your picking in a safe neighbourhood and easy utilities to ensure an easy modern lifestyle." navigateTo="listing" />
            </div>
            <div className={ classes.card }>
                <Category label="apartments" description="Pick an apartment from our estates of complex, where we offer great views, luxurious themes, high social neighbourhood blah blah blah" navigateTo="listing" />
            </div>
            <div className={ classes.card }>
                <Category label="lands" description="...coming soon" navigateTo="lands" cta={ false } />
            </div>
        </div>
    </>);
};
export default Header;


export function category({ label, description, navigateTo, cta = true }) {

    return (
        <>
            <div className={ `card flex ${classes.container}` }>
                <div className={ `${classes.details}` }>
                    <h1 className="heading--primary">{ label }</h1>
                    <p className="paragraph">{ description }</p>
                    { cta && <Button label="Take me there" href={ navigateTo } /> }
                </div>
            </div>
        </>
    )
}
