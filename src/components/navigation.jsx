import React, { useEffect } from 'react'
import AboutMe from "./about-me"
import Menu from "./menu"
import Home from "../components/home"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Navigation = () => {
    const { ref: refAbout, inView: inViewAbout } = useInView({
        threshold: 0.1,
        triggerOnce: false
    })
    const { ref: refHome, inView: inViewHome } = useInView({
        threshold: 0.1,
        triggerOnce: false
    })
    const animationHome = useAnimation()
    const animationAbout = useAnimation()
    const animateIndicator = useAnimation()

    useEffect(() => {
        if (inViewAbout) {
            animationAbout.start({
                color: "#3399FF",
                transition: {
                    type: "spring", duration: .1,
                },
            })
            document.querySelector('.tab-indicator').style.top = '22.5%';
        }

        if (!inViewAbout) {
            animationAbout.start({
                color: "#fff",
            })
        }
        
    }, [ inViewAbout, animationAbout])

    useEffect(() => {
        if (inViewHome) {
            animationHome.start({
                color: "#3399FF",
                transition: {
                    type: "spring", duration: .1,
                },
            })
            document.querySelector('.tab-indicator').style.top = '4%';
        }
        if (!inViewHome) {
            animationHome.start({
                color: "#fff",
            })
        }
    }, [inViewHome, animationHome])
    

    return ( 
        <>
            <Menu
                animationHome={ animationHome }
                animationAbout={ animationAbout }
                animateIndicator={ animateIndicator }
            />
            <Home 
                refHome={ refHome }
            />
            <AboutMe
                refAbout={ refAbout }
            />
        </>
     );
}
 
export default Navigation;