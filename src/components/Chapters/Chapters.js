import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { SET_HEADER, SET_COUNT_SCROLL_CHAPTERS } from '../../action/actions'

import './Chapters.css'

const Chapters = ( {
    setTitle,
    sections,
    sectionID,
    countScroll,
    setCountScrollChapters
} ) => {

    const [ activeItem, setActiveItem ] = useState(1);
    const [ posSet, setPosSet ] = useState( false );

    useEffect( () => {
        if( sections.length !== 0 ) {
            setPosSet( true )
            
        }
    }, [sections] )
    useEffect( () => {
        setActiveItem( sectionID )
    }, [sectionID] )

    const scrollToSection = ref => {
        window.scroll({
            top: ref.offsetTop,
            behavior: 'smooth'
        });
    }

    return (
        <div className="chapters">
            <ul className="chapters-menu">
                 {posSet ? sections.map( section => {
                    let { id, position, title } = section;
                 return ( <li className={activeItem === id ? "active" : "inactive"} key={ id } onClick={ () => {setCountScrollChapters( id - 1 ); setActiveItem( id ); setTitle( id ); } } >
                    {title} <div className={ activeItem === id ? "circle-active" : "circle-inactive" } ></div>
                    </li>
                  ) }) : null }
            </ul>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        sections: store.sections,
        sectionID: store.sectionID,
        countScroll: store.countScroll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: ( id ) => dispatch( { type: SET_HEADER, payload: { id } } ),
        setCountScrollChapters: ( id ) => dispatch( { type: SET_COUNT_SCROLL_CHAPTERS, payload: { id } } )
    }
}

export default connect( mapStateToProps,mapDispatchToProps )(Chapters)
