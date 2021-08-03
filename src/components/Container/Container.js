import React from 'react'
import { Switch, Route } from 'react-router-dom'

// COMPONENTS
import ImageContainer from '../ImageContainer/ImageContainer'
import Footer from '../Footer/Footer'
//  PAGES
import Author from '../../pages/author/Author'
import Contact from '../../pages/contact/Contact'
import Main from '../../pages/main/Main'

import './Container.css'

import { connect } from 'react-redux'
import { CHECK_WINDOW_SIZE, SET_HEADER, SET_SCREEN, SET_SECTIONS } from '../../action/actions'
import { SectionsList } from '../Section/SectionsList/SectionsList'

import './Container.css';



const Container = ( { countScroll, count, setHeader, toogleResolution, setScreen, setSections} ) => {

    React.useEffect(() => {
        toogleResolution()
     },[])

     React.useEffect( () => {
        setSections( SectionsList )
    }, [] )

     React.useEffect( () => {
        setHeader( count )
     }, [ count ] )

    return (
        <div className="container" >
            {/* <Hamburger /> */}
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/o-autorze" component={Author} />
                <Route path="/kontakt" component={Contact} />
                {/* <Route component={Default} /> */}
                <Route path="/projekt" component={ImageContainer} />
            </Switch>
            <Footer />
        </div>    
    )
}

const mapStateToProps = store => {
    return{
        size: store.size,
        start: store.start,
        countScroll: store.countScroll
    }
}
const mapDispatchToProps = dispatch => {
    return{
        toogleResolution: () => dispatch( { type: CHECK_WINDOW_SIZE } ),
        setHeader: ( count ) => dispatch( { type: SET_HEADER, payload: { count } } ),
        setScreen: ( dir ) => dispatch( { type: SET_SCREEN, payload: { dir } } ),
        setSections: ( list ) => dispatch( { type: SET_SECTIONS, payload: {list} } )
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)( Container)
