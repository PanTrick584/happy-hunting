import React from 'react';

import { connect } from 'react-redux'
import { CHECK_STORY } from '../../../action/actions';

import './ImageText.css'

const ImageText = ( { count, story, textCount, textHide, checkStory } ) => {

    React.useEffect(() => {
        if( count === 6 ) {
            console.log( story )
            checkStory()
            console.log( story )
        }
    }, [ count, checkStory ])

    const styleP = {
        color: '#2c2c2c',
    }

    let nbsp = String.fromCharCode(160) // non-breaking-space

    let texts = [
        `Ciężko jednoznacznie ocenić dlacego mój dziadek poszedł do${nbsp}fotografa z${nbsp}rybą, zupełnie przy okazji zabierając swoich synów. Może to${nbsp}duma z${nbsp}połowu? Wielkości okazu?`,
        `Jako hobbistyczny wędkarz łowił często i${nbsp}dużo, a${nbsp}wysuszone głowy ryb wieszał w${nbsp}przedpokoju swojego mieszkania`,
        `Pamiętam ściany pełne wyszczerzonych zębów, drapieżniki witały każdego, kto zagościł w${nbsp}tamtych progach.`,
        `Śwaidczyły o${nbsp}statusie właściciela, Pana domu, dumne i${nbsp}groźne.`,
        `Tamta ryba musiała być wyjątkowa, skoro pośród dziesiątek, a${nbsp}może i${nbsp}setek innych właśnie ona dostąpiła zaszczytu uwiecznienia na${nbsp}fotorgafii.`,
        `Niewiele mamy zdjęć rodzinnych w${nbsp}zbiorach z${nbsp}tamtych czasów, a${nbsp}już najmniej zrobionych w${nbsp}pracowni fotograficznej.`,
        `Samo więc nasuwa się retoryczne pytanie jak dumny musiał być, skoro wpadł na${nbsp}taki pomysł?`,
        `Wiszące w${nbsp}mieszkaniu głowy poległych oponentów do${nbsp}tamtej pory wystarczały, jednak z${nbsp}jakiegoś powodu ta${nbsp}ryba okazała się wyjątkowa.`,
        `Otrzymała więc szczególne upamiętnienie.`,
    ]

    let textsLength = texts.length - 1;
    let opacity = textHide ? 0 : .6;
    
    return(

        story ? <div  className="text-container" style={{ opacity: opacity }}>
                    <p className="text-p" style={styleP} >
                        {texts[textCount]}
                    </p>
                </div> : null
    )
}

const mapStateToProps = state => {

    return {
        count: state.count,
        story: state.story,
        textCount: state.textCount,
        textHide: state.textHide
    }
}
const mapDispatchToProps = dispatch => {
    return {
        checkStory: () => dispatch( { type: CHECK_STORY } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageText);