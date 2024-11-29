import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React E-Commerce",
        img: "https://images.pexels.com/photos/12467404/pexels-photo-12467404.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
    {
        id: 2,
        title: "Next Js Developer",
        img: "https://images.pexels.com/photos/18463144/pexels-photo-18463144/free-photo-of-analog-camera-with-films.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
    {
        id: 3,
        title: "Javascript Developer",
        img: "https://images.pexels.com/photos/6506698/pexels-photo-6506698.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Feactured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;