import React from 'react'

import { connect } from 'react-redux'

import { 
    SET_HEADER,
    UNSET_HEADER

} from '../../../action/actions'

import './ImageTitle.css'

const ImageTitle = ( {  title, count, setHeader, unsetHeader } ) => {

    React.useEffect( () => {
        
        setHeader( count )

        setTimeout( () => {
            unsetHeader( )
        }, 6000 )
        
    }, [count] )

    return (
        <React.Fragment>
        {setHeader ? <h2 className="image-title" >{ title }</h2> : ''}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        title: state.title,
        count: state.count,
        setHeader: state.setHeader,
        appearHeader: state.appearHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setHeader: ( count ) => dispatch( { type: SET_HEADER, payload: { count } } ),
        unsetHeader: ( count ) => dispatch( { type: UNSET_HEADER, payload: { count } } ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( ImageTitle )
