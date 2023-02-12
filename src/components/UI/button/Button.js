import { Link } from "react-router-dom"
import classes from './button.module.css'

export function Button(props){
    const {href, type, label, } = props
    if (href){
     return <Link to={href} className={`${classes.button} ${classes["button-primary"]} link`} role="anchor link">{label}</Link>
    }
    return <button aria-label={label} className={`button ${classes["button-primary"]}`} type={type ? type : "submit"}>{props.children}</button>
}