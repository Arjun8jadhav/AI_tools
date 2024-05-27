import React from 'react'
import './landing.css'
import { SignInButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export const Landing = () => {
    return (
        <div className='land'>
            <diV className="navlan">
                <h2>PAAM</h2>
                <SignInButton className="butlan" />
            </diV>
            <div className='fontify'>
                <h1>WE ARE <span>OPEN SOURCE</span></h1>
                <div className='desclan'>
                    <h3>Welcome to our open-source AI tools platform! Founded
                         by a group of passionate engineers, 
                         we leverage cutting-edge open-source APIs
                          to build, integrate, and deploy powerful AI
                           solutions effortlessly. Our mission is to 
                           democratize AI, making advanced tools
                            accessible to everyone. Join our 
                            community to innovate, collaborate, 
                            and transform ideas into reality, 
                            driving the future of technology together.</h3>
                </div>
            </div>
            <div className='finbtn'>
                <a href="https://sentry.io/answers/">
                    <button>Learn more</button>
                </a>
                <SignInButton>Get started</SignInButton>
            </div>
            <footer>
                <p>@Arjun_Jadhav_2024</p>
            </footer>

        </div>
        
    )
}
