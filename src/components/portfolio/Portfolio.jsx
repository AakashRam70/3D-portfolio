import React from 'react'
import "./portfolio.scss"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/28425084/pexels-photo-28425084/free-photo-of-silhouette-of-person-with-bicycle-under-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
    {
        id: 2,
        title: "Next Js Blog",
        img: "https://www.pexels.com/video/the-green-water-is-surrounded-by-trees-and-green-vegetation-17382716/",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
    {
        id: 3,
        title: "Javascript App",
        img: "https://images.pexels.com/photos/28425084/pexels-photo-28425084/free-photo-of-silhouette-of-person-with-bicycle-under-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadhttps://www.pexels.com/photo/embroidery-floral-on-tray-20409572/",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    },
    {
        id: 4,
        title: "Node JS",
        img: "https://www.pexels.com/photo/white-and-pink-flower-petals-in-close-up-photography-12283023/",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab asperiores assumenda tenetur atque recusandae, sunt hic nam voluptate beatae inventore dolor quod, blanditiis facilis ea expedita ex nulla at."
    }
]

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}
const Portfolio = () => {
    return (
        <div className='portfolio'>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;