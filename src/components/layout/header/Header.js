import classes from './header.module.css';
import Category from './category/Category';

const Header = (props) => {

    return (<>
        <div className={ classes["grid"] }>
            <div className={classes.card}>
                <Category label="homes" description="aesthetic pleasing properties, with a wide range of taste for your picking in a safe neighbourhood and easy utilities to ensure an easy modern lifestyle." navigateTo="home" />
            </div>
            <div className={classes.card}>
                <Category label="apartments" description="Pick an apartment from our estates of complex, where we offer great views, luxurious themes, high social neighbourhood blah blah blah" navigateTo="listing" />
            </div>
            <div className={classes.card}>
                <Category label="lands" description="...coming soon" navigateTo="lands" />
            </div>
        </div>
    </>);
};
export default Header;

        // {/* <header className={ `flex--column  text-white ${classes["header"]}` }>
        //     <div className={ `width--mid container` }>
        //         <div className={ classes["header--text"] } >
        //             <p className="paragraph text--white">Welcome to paradise nest</p>
        //             <h1 className="heading--jumbo">Otter’s Estate </h1>
        //             <p className="paragraph text--white">
        //                 Welcome to Otter's Home, a place that put you in a habitual state of relaxation. By priotizing a safe natural environment,
        //                 better and safe utilities for a better eco-friendly lifestyle
        //             </p>
        //             <Link to='/listing' className='link'>
        //                 <button className='btn btn--primary'>Listing</button>
        //             </Link>
        //         </div>
        //     </div>
        // </header> */}