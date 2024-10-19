import React from 'react'
import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let's Work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>hello@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>40, Somalwada Nagpur</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+915480365927</span>
                </div>
            </div>
            <div className="formContainer">
                <form>
                    <input type="text" placeholder='name' />
                    <input type="email" placeholder='Email' />
                    <textarea rows={8} placeholder='Message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact