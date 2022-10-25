import React, { useEffect } from 'react'
import AboutMe from "./about-me"
import Menu from "./menu"
import Home from "../components/home"
import Services from "../components/services"
import Work from "../components/work"
import Blog from "../components/blog"
import Contact from "../components/contact"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Navigation = () => {
    const { ref: refHome, inView: inViewHome } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })
    const { ref: refAbout, inView: inViewAbout } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })
    const { ref: refServices, inView: inViewServices } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })
    const { ref: refWork, inView: inViewWork } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })
    const { ref: refBlog, inView: inViewBlog } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })
    const { ref: refContact, inView: inViewContact } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: "-50px 0px"
    })

    const animationHome = useAnimation()
    const animationAbout = useAnimation()
    const animateIndicator = useAnimation()
    const animationServices = useAnimation()
    const animationWorks = useAnimation()
    const animationBlog = useAnimation()
    const animationContact = useAnimation()

    useEffect(() => {
        if (inViewHome) {
            animationHome.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewHome) {
            animateIndicator.start({
                top : "4%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewHome) {
            animationHome.start({
                color: "#fff",
            })
        }
    }, [inViewHome, animationHome, animateIndicator])
    
    useEffect(() => {
        if (inViewAbout) {
            animationAbout.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewAbout) {
            animateIndicator.start({
                top : "22.5%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewAbout) {
            animationAbout.start({
                color: "#fff",
            })
        }
        
    }, [ inViewAbout, animationAbout, animateIndicator ])

    useEffect(() => {
        if (inViewServices) {
            animationServices.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewServices) {
            animateIndicator.start({
                top : "41.5%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewServices) {
            animationServices.start({
                color: "#fff",
            })
        }
        
    }, [ inViewServices, animationServices, animateIndicator ])

    useEffect(() => {
        if (inViewWork) {
            animationWorks.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewWork) {
            animateIndicator.start({
                top : "60.5%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewWork) {
            animationWorks.start({
                color: "#fff",
            })
        }
        
    }, [ inViewWork, animationWorks, animateIndicator ])

    useEffect(() => {
        if (inViewBlog) {
            animationBlog.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewBlog) {
            animateIndicator.start({
                top : "79%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewBlog) {
            animationBlog.start({
                color: "#fff",
            })
        }
        
    }, [ inViewBlog, animationBlog, animateIndicator ])

    useEffect(() => {
        if (inViewContact) {
            animationContact.start({
                color: "#7B90FB",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }
        if (inViewContact) {
            animateIndicator.start({
                top : "97.5%",
                transition: {
                    type: "spring", duration: 0,
                },
            })
        }

        if (!inViewContact) {
            animationContact.start({
                color: "#fff",
            })
        }
        
    }, [ inViewContact, animationContact, animateIndicator ])


    return ( 
        <>
            <Menu
                animateIndicator={ animateIndicator }
                animationHome={ animationHome }
                animationAbout={ animationAbout }
                animationServices={ animationServices }
                animationWorks={ animationWorks }
                animationBlog={ animationBlog }
                animationContact={ animationContact }
            />
            <Home 
                refHome={ refHome }
            />
            <AboutMe
                refAbout={ refAbout }
            />
            <Services 
                refServices={ refServices }
            />
            <Work 
                refWork={ refWork }
            />
            <Blog 
                refBlog={ refBlog }
            />
            <Contact 
                refContact={ refContact }
            />
        </>
     );
}
 
export default Navigation;