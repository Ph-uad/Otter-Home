import Classes from './contact.module.css'

const Contact = () => {
    return (
        <div className={ `page flex ${Classes.contact}` }>
            
            <form action="" className={ `${Classes.form} ` }>
                <h2 className='heading--secondary'>contact</h2>
                <div className={ Classes["form__control"] }>
                    <input placeholder='First Name' className={ Classes["form__input"] } type="text" name="firstname" id="firstName" />
                    <label className={ Classes["form__label"] } htmlFor="firstName" >First Name:</label>
                </div>
                <div className={ Classes["form__control"] }>

                    <input placeholder='Surname' className={ Classes["form__input"] } type="text" name="surName" id="surName" />
                    <label className={ Classes["form__label"] } htmlFor="surName" >Surname:</label>
                </div>
                <div className={ Classes["form__control"] }>

                    <input placeholder='Email' className={ Classes["form__input"] } type="mail" name="email" id="email" />
                    <label className={ Classes["form__label"] } htmlFor="email" >Email:</label>
                </div>
                <div className={ Classes["form__control"] }>

                    <input placeholder='Phone' className={ Classes["form__input"] } type="text" name="phone" id="phone" />
                    <label className={ Classes["form__label"] } htmlFor="phone" >Phone:</label>
                </div>

                <button type="submit" className='btn btn--primary'>Submit</button>
            </form>
        </div>
    )
}
export default Contact;