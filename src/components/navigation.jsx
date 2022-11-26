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
import ButtonScroll from './components/button-scroll'

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
    const { ref: refButton, inView: inViewButton } = useInView({
        threshold: 0.01,
        triggerOnce: false,
    })

    const animationHome = useAnimation()
    const animationAbout = useAnimation()
    const animateIndicator = useAnimation()
    const animationServices = useAnimation()
    const animationWorks = useAnimation()
    const animationBlog = useAnimation()
    const animationContact = useAnimation()
    const animateButton = useAnimation()


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
                top : "0%",
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
                top : "19%",
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
                top : "38%",
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
                top : "57%",
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
                top : "76%",
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
                top : "95%",
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

    useEffect(() => {
      if (inViewButton) {
        animateButton.start({
          opacity: 1,
          x: 0,
          transition: {
            type: "spring", duration: 1, delay: .1
          }
        })
      }
      if (!inViewButton) {
        animateButton.start({
          opacity: 0,
          x: '5vw',
          transition: {
            type: "spring", duration: 1,
          }
        })
      }
    }, [inViewButton, animateButton])
    


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
            <ButtonScroll 
                animateButton={ animateButton }
                classNames={ 'opacity-0' }
            />
            <div
                ref={ refButton }
            >
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
            </div>
        </>
     );
}
 
export default Navigation;