import React from 'react'
import { connect } from 'react-redux'
import { 
    INCREASE_COUNT,
    DECREASE_COUNT
} from '../../action/actions'

import './ImageButtons.css'

const ImageButtons = ( { count, imgIncrease, imgDecrease, setHeader } ) => {
    return (
        <div className="img-btn-container">
            <button className="img-btn" onClick={ () => {imgDecrease()}} >Poprzednie</button>
            <button className="img-btn" onClick={ () => {imgIncrease()}}>Następne</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        imgIncrease: () => dispatch({ type: INCREASE_COUNT }),
        imgDecrease: () => dispatch( { type: DECREASE_COUNT } ),
        // setHeader: ( count ) => dispatch( { type: SET_HEADER, payload: { count } } )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageButtons)
