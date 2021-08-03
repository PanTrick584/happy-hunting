import React from 'react';
import { connect } from 'react-redux'
//COMPONENTS
import ImageTitle from './ImageTitle/ImageTitle'
import ImageText from './ImageText/ImageText'

import { 
    INCREASE_COUNT
} from '../../action/actions'

import './ImageContainer.css';

const Container = ( { 
    start,
    size,
    count,
    imgIncrease
} ) => {
        
    // { count, storyCount, onContainerClick, onBtnAdd, onBtnRemove, children, imageLoaded, size, clickStart, menuContent, onMenuClick, textNum, onStoryCount, onTextClick, onEnter }

    // let btns = storyCount ? <ImageButons
    //                         onBtnRemove={onBtnRemove}
    //                         onBtnAdd={onBtnAdd}
    //                         count={count}
    //                         />  : null
    // let event = storyCount || !clickStart ? null : onContainerClick;

    // let visibility = imageLoaded ? 'visible' : 'hidden';
    // let opacity = imageLoaded ? 1 : 0;
    // let transition = count === 8 ? 'all .2s ease' : 'all .6s ease';
    // let backSize = size === 'pc' || count === 1 || count === 2 || count === 8 ? 'cover' : 'contain';  
    // let buttons = storyCount ? <div className="text-btn-box" style={{justifySelf: 'end'}}>
    //                         { textNum === 9 
    //                             ? <button className="text-btn" onClick={onStoryCount}>przejdź</button>
    //                             : <button className="text-btn" onClick={onTextClick}>dalej</button>
    //                         }
    //                         </div> : null

    return( 

        <div className="image-container">
            <ImageTitle />
            <ImageText />
            <img 
                className="image-container-img"
                src={`./img/bg_${count}_${size}.png`} 
                alt="menu" 
                onClick={ () => {
                    imgIncrease();
                    }}
            />
        </div>       
    )
}

const mapStateToProps = ( store ) => {
    return {
        size: store.size,
        count: store.count
    }
}
const mapDispatchToProps = dispatch => {
    return {
        imgIncrease: () => dispatch({ type: INCREASE_COUNT }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);