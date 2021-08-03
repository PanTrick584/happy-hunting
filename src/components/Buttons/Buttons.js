import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
    INCREASE_COUNT,
    DECREASE_COUNT, 
    SECTION_ANIMATION_LEFT,
    SECTION_ANIMATION_RIGHT
} from '../../action/actions'

import './Buttons.css'

const ImageButtons = ( { length, id, count, increase, decrease, sectionAnimationLeft, sectionAnimationRight } ) => {

    const [ buttonOn, setButtonOn ] = useState( false );
    
    const startSectionAnimationLeft = ( length, id ) => {
        setButtonOn( true )
        sectionAnimationLeft( true )
        setTimeout( () => {
            increase( length, id )
        }, 1000 )
        setTimeout(() => {
            setButtonOn( false )
        }, 2200)
    }
    const startSectionAnimationRight = ( id ) => {
        setButtonOn( true )
        sectionAnimationRight( true )
        setTimeout( () => {
            decrease( id )
        }, 1000 )
        setTimeout(() => {
            setButtonOn( false )
        }, 2500)
    }
    
    return (
       <div className="btn-container">
            <button className="btn-item-box"  onClick={ () => { startSectionAnimationRight( id ) } } disabled={ buttonOn } >
                <div>
                    <div className="btn-circle"></div>
                </div>
                <div>
                    <div className="btn-item"></div>
                    <div className="btn-item"></div>
                </div>
                
            </button>
            <div className="num-box">
                <span className="num">{ count }</span>
                <span className="num">/</span>
                <span className="num">{ length }</span>
            </div>
            <button className="btn-item-box" onClick={ () => startSectionAnimationLeft( length, id ) } disabled={ buttonOn } >
                <div>
                    <div className="btn-item"></div>
                    <div className="btn-item"></div>
                </div>
                <div>
                    <div className="btn-circle"></div>
                </div>
            </button>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        increase: ( length, id ) => dispatch({ type: INCREASE_COUNT, payload: { length, id } }),
        decrease: ( id ) => dispatch( { type: DECREASE_COUNT, payload: { id } } ),
        sectionAnimationLeft: () => dispatch({ type: SECTION_ANIMATION_LEFT }),
        sectionAnimationRight: () => dispatch({ type: SECTION_ANIMATION_RIGHT })
    }
}

export default connect(null, mapDispatchToProps)(ImageButtons)
