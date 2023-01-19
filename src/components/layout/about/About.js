import Image from '../../../Assets/img/building2.jpg'
import Classes from './about.module.css'

const About = () => {
    return (
        <section className="section__container section">
            <h2 className="heading--secondary">About US</h2>
            <div className="flex">
                <figure className={ `${Classes.figure} figure` }>
                    <img src={ Image } alt="" className={ `img  ` } />
                </figure>
                <div className="">
                    <p className="paragraph">
                        ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis architecto quam aut eaque a iusto, provident doloribus molestiae hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum vero, sunt iure debitis quo id rem, maxime quis eius velit provident perspiciatis, officia recusandae numquam error! Repellendus odio possimus placeat sequi et doloremque, molestias deleniti vero ipsam facilis culpa consectetur minima, molestiae eius neque?
                    </p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis architecto quam aut eaque a iusto, provident doloribus molestiae hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum vero, sunt iure debitis quo id rem, maxime quis eius velit provident perspiciatis, officia recusandae numquam error! Repellendus odio possimus placeat sequi et doloremque, molestias deleniti vero ipsam facilis culpa consectetur minima, molestiae eius neque?
                    </p>

                </div>
            </div>

        </section>
    )
}

export default About;