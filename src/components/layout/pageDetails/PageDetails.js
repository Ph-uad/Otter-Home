const PageDetails = ({title = "Page Not Found", message = "Please use the navigation"}) => {

    
    
    return (
        <>
            <section className="section">
                  <h2 className="heading--secondary center">{title}</h2>
                  <p className="paragraph center">{message}</p>
            </section>
        </>
    )
}
export default PageDetails;