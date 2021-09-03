import React, { useRef, useEffect, useState } from 'react'

// HOOKS
import { connect } from 'react-redux'
import { SET_POSITIONS, SET_COUNT_SCROLL, INCREASE_COUNT, DECREASE_COUNT } from '../../action/actions'

import Buttons from '../Buttons/Buttons'
import Text from '../Text/Text'
import Title from '../Title/Title'

import './Section.css'

const Section = ( { 
    size,
    setPositions,
    sections,
    store,
    countScroll,
    sectionID,
    sectionAnimationLeft,
    sectionAnimationRight,
    setCountScroll,
    increase,
    decrease
} ) => {

const itemsRef = useRef([]);
const [ coverAnimation, setCoverAnimation ] = useState( 'section-cover' );

const [ source, setSource ] = useState();
const [ translate, setTranslate ] = useState( 0 );
const [ firstTouchY, setFirstTouchY ] = useState( 0 );
const [ lastTouchY, setLastTouchY ] = useState( 0 );
const [ firstTouchX, setFirstTouchX ] = useState( 0 );
const [ lastTouchX, setLastTouchX ] = useState( 0 );

// CUSTOM HOOK LOGIC, UNUSED FOR NOW
{/* <div style={{ backgroundImage: `url(${loaded || placeholder})` }} /> */}
// const loaded = useProgressiveImage( source )


useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, sections.length +1);
    if( sections.length !== 0 ) {
        setPositions( itemsRef.current )
    }   
}, [sections]);
useEffect(()=> {
    setCoverAnimation( 'section-cover section-cover-animation-left' );
    setTimeout(()=> {
        setCoverAnimation( 'section-cover' )
    }, 2000)
}, [sectionAnimationLeft])
useEffect(()=> {
    setCoverAnimation( 'section-cover section-cover-animation-right' );
    setTimeout(()=> {
        setCoverAnimation( 'section-cover' )
    }, 2000)
}, [sectionAnimationRight])

const translateSection = e => {
    if ( e.deltaY < 0 ) {
        console.log( 'up' )
        setCountScroll( 'up' )
    }
    if (e.deltaY > 0 ) {
        console.log( 'down' )
        setCountScroll( 'down' )
    }
    e.stopPropagation();
}
const touchStart = e => {
    console.log( e.changedTouches[0].clientY )
    console.log( e.changedTouches[0].clientX )
    setFirstTouchY( e.changedTouches[0].clientY )
    setFirstTouchX( e.changedTouches[0].clientX )
}
const touchEnd = (e, length, id) => {
    console.log(length, id)
    console.log( e.changedTouches[0].clientY )
    console.log( e.changedTouches[0].clientX )
    setLastTouchY( e.changedTouches[0].clientY ) 
    setLastTouchX( e.changedTouches[0].clientX ) 
}
useEffect( () => {
    let xResult = lastTouchX - firstTouchX;
    let yResult = lastTouchY - firstTouchY;
    console.log( xResult, yResult)
    if( xResult < 0 ) {
        xResult = xResult * (-1)
        console.log( xResult )
    }
    if( yResult < 0 ) {
        yResult = yResult * (-1)
        console.log( yResult )
    }
    if( yResult > xResult ) {
        if( firstTouchY > lastTouchY+5 ) setCountScroll( 'down' )
        if( firstTouchY < lastTouchY+5 ) setCountScroll( 'up' )
    }
    if( xResult > yResult ) {
        let sectionLength = sections.find( section => section.id === sectionID )
        console.log(sectionLength)
        if( firstTouchX > lastTouchX+5 ) increase( sectionLength.length, sectionID )
        if( firstTouchX < lastTouchX+5 ) decrease( sectionID )
    }
    
},[ lastTouchY, lastTouchX ] )

useEffect( () => {
    setTranslate( countScroll )
}, [ countScroll ] )
 
 console.log( translate )
 console.log( sectionID )

return (
    sections.map( section => {
        let { title, imgName, text, length, id, count } = section;
        let path = `./img/${imgName}_${ size }_${ count }.jpg`;
        return <section 
                    key={ id } 
                    className="section" 
                    ref={ el => itemsRef.current[id] = el } 
                    style={{ backgroundImage: `url('./img/${imgName}_${ size }_${ count }.jpg')`, transform: `translateY(-${translate}00%)` }}
                    onWheel={ (e) => translateSection( e ) }
                    onTouchStart={ (e) => touchStart( e ) }
                    onTouchEnd={ ( e, length, id ) => touchEnd( e, length, id ) }
                    >
                {id === 1 ? null : <div className={ coverAnimation }></div>}
                <Title title={ title } id={ id } count={ count } />
                {text ? <Text text={ text } count={count} /> : null}
                {length ? <Buttons length={ length } id={ id } count={ count } /> : null }
        </section>
        
    } )
)
}
const mapStateToProps = store => {
    return {
        size: store.size,
        store: store,
        sections: store.sections,
        countScroll: store.countScroll,
        sectionID: store.sectionID,
        sectionAnimationLeft: store.sectionAnimationLeft,
        sectionAnimationRight: store.sectionAnimationRight
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setPositions: ( positions ) => dispatch( { type: SET_POSITIONS, payload: { positions } } ),
        setCountScroll: ( direction ) => dispatch( { type: SET_COUNT_SCROLL, payload: { direction } } ),
        increase: ( length, id ) => dispatch({ type: INCREASE_COUNT, payload: { length, id } }),
        decrease: ( id ) => dispatch( { type: DECREASE_COUNT, payload: { id } } ),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Section)
