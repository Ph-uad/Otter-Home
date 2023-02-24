import { Link } from "react-router-dom"
import classes from './button.module.css'

export function Button(props){
    const {href, type, label, } = props
    if (href){
     return <Link to={href} className={`${classes.button}`} role="link">{label}</Link>
    }
    return <button aria-label={label} className={`${classes.button}`} type={type ? type : "submit"}>{props.children}</button>
}