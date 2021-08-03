import React from 'react'

import Haburger from '../../components/Hamburger/Hamburger'
import Navigation from '../../components/Navigation/Navigation'
import Chapters from '../../components/Chapters/Chapters'
import Section from '../../components/Section/Section'

import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <Haburger />
            <Chapters />
            <Section />
        </div>
    )
}

export default Main
