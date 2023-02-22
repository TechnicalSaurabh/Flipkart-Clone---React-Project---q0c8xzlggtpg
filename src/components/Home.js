import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
    return (
        <div className='home'>
            <Carousel
            showArrows={true}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
             >
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/0c56edb4cfb10413.jpg?q=50" />
                    
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6bfa380683e500e6.jpg?q=50" />
                    
                </div>
                <div>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6bfa380683e500e6.jpg?q=50" />
                    
                </div>
            </Carousel>
        </div>
    )
}

export default Home
