import React, { useRef, useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { SET_POSITIONS } from '../../action/actions'

import Buttons from '../Buttons/Buttons'
import Text from '../Text/Text'
import Title from '../Title/Title'

import './Section.css'

const Section = ( { 
    size,
    setPositions,
    sections,
    store,
    sectionAnimationLeft,
    sectionAnimationRight
} ) => {

const itemsRef = useRef([]);
const [ coverAnimation, setCoverAnimation ] = useState( 'section-cover' );

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
    
// console.log( store )
// console.log( size )

return (
    sections.map( section => {
        let { title, imgName, text, length, id, count } = section;
        return <section key={ id } className="section" ref={ el => itemsRef.current[id] = el } style={{ backgroundImage: `url('./img/${imgName}_${ size }_${ count }.jpg')` }}>
                <div className={ coverAnimation }></div>
                <Title title={ title } id={ id } count={ count } />
                {text ? <Text text={ text } /> : null}
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
        sectionAnimationLeft: store.sectionAnimationLeft,
        sectionAnimationRight: store.sectionAnimationRight
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setPositions: ( positions ) => dispatch( { type: SET_POSITIONS, payload: { positions } } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Section)
