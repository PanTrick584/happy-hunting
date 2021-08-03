import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SET_SECTION_ID } from '../../action/actions'

import './Title.css'

export const Title = ( { sections, title, id, count, setSectionID} ) => {
    const [ isVisible, setIsVisible ] = useState( false )
    const headersRef = useRef([]);
    const callback = entries => {
        const [ entry ] = entries
        // console.log( entry )
        setIsVisible(entry.isIntersecting)
    }
    const options = {
        root: null,
        rootMargin: '0px',
        treshold: 1
    }
    useEffect(() => {
        const observer = new IntersectionObserver( callback, options )
        if( sections.length !== 0 ) {
            headersRef.current.forEach( item => observer.observe( item ) )
        }
        return () => {
            headersRef.current.forEach( item => observer.unobserve( item ))
        }
        
    }, [sections]);
    useEffect(()=> {
       if (isVisible) setSectionID( id )
    }, [ isVisible ])
    
    return (
        <div ref={el => headersRef.current[id] = el} className={ isVisible && count === 1 ? 'title title-show' : 'title' }>
            { title }
            
        </div>
    )
}
const mapStateToProps = store => {
    return {
        sections: store.sections
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setSectionID: ( id ) => dispatch( { type: SET_SECTION_ID, payload: { id } } )
    }
}
export default connect( mapStateToProps, mapDispatchToProps )(Title)