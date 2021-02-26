import React, { useState, useEffect } from 'react'
import FoodData from "../components/foodData"
import NavBar from "../components/navbar"
import Styles from "../css/nutrition.module.css"
import Search from "../components/search"
import Customers from "../components/customers"
import Footer from "../components/footer"
import Arrow from "../components/arrow"
export default function Nutrition() {

    const [food, setfood] = useState(null)
    const [distance, setDistance] = useState({ from: 0, to: 5, clicked: true });
    const [pages, setPages] = useState(0);
    const [up, setUp] = useState(false)

    const handleDistance = (info) => {

        setDistance({ from: info.from, to: info.to, clicked: info.clicked })

        window.scroll({top: 0,behavior: 'smooth'});
    }
    const handleFood = (food) => {

        setfood(food)
    }
    const handlePages = (lenght) => {

        setPages(lenght)
    }

    const handleScroll = () => {


        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            setUp(true)
        } else {
            setUp(false)
        }

    }

    function scroll() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])


    return (
        <div>
            <NavBar />
            <div className={Styles.CustomerContent}>
                <div className={Styles.arrow}>
                    <Customers />
                </div>

                <div className={Styles.display}>
                    <Search handleFood={handleFood} handlePages={handlePages} />
                    {food !== null && <FoodData food={food} distance={distance} pages={pages} handleDistance={handleDistance} />}

                </div>
            </div>
            {up && <div aria-hidden="true" onClick={() => scroll()}><Arrow /></div>}
            <Footer />
        </div>
    )
}
