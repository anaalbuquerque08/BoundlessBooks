import {motion} from 'frame-motion'
import { useEffect, useState } from 'react';

function BookCarousel(){
    const carousel =ufeRef();
    const [width,setWidth] = useState(0)

    useEffect(()=>{
        console.log(carousel.current?.scrollWidth,carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return(
    <div className='App'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:'grabbing'}}>
            <motion.div 
            className='inner' 
            drag='x' 
            dragContraints={{right: 0, left: - width}} 
            initial={{x:100}} 
            animate={{x:0}}
            transition={{duration:0.8}}>
              {images.map(image =>(
                <motion.div className='item' key={image}>
                    <img src={image} alt='Texto alt'/>
                    </motion.div>
              ))}

            </motion.div>
        </motion.div>
    </div>
    );
}

export default BookCarousel;