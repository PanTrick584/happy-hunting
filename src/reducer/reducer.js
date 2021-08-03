import { 
    CHECK_WINDOW_SIZE,
    INCREASE_COUNT, 
    HIDE_UI, 
    DECREASE_COUNT, 
    SET_HEADER,
    UNSET_HEADER,
    CHECK_STORY,
    DECREASE_STORY,
    INCREASE_STORY,
    INCREASE_COUNT_STORY,
    HIDE_TEXT,
    SET_POSITIONS, 
    SET_SECTIONS,
    SET_SECTION_ID,
    SECTION_ANIMATION_LEFT,
    SECTION_ANIMATION_RIGHT
} from '../action/actions'

function reducer ( state, action ) {
    if( action.type === SET_SECTIONS ) {
        let list = action.payload.list;
        let sections = [];
            list.forEach( section => {
                const singleSection = {...section};
                sections = [...sections, singleSection];
            } )
        return { ...state, sections }
    }
    if( action.type === SET_POSITIONS ) {
        let positions = action.payload.positions;
        let tempSections = state.sections;
        tempSections.map( (section, id) => section.position = positions[id+1] )
        return { ...state, sections: tempSections }
    }
   
    if( action.type === CHECK_WINDOW_SIZE ) {
        if(window.innerWidth < 768){
            console.log(window.innerWidth)
            return { ...state, size: 'smart' }
        } else if(window.innerWidth < 1030 && window.innerWidth < window.innerHeight){
            console.log(window.innerWidth)
            return { ...state, size: 'smart' }
        } else {
            return { ...state, size: 'pc' }
        }
    }
    if( action.type === SET_SECTION_ID ) {
        let id = action.payload.id;
            return { ...state, sectionID: id }
    }
    if( action.type === SECTION_ANIMATION_LEFT ) {
            return { ...state, sectionAnimationLeft: !state.sectionAnimationLeft }
    }
    if( action.type === SECTION_ANIMATION_RIGHT ) {
            return { ...state, sectionAnimationRight: !state.sectionAnimationRight }
    }
    if( action.type === INCREASE_COUNT ) {
        let length = action.payload.length;
        let sectionID = action.payload.id;
        let tempSections = state.sections.map( (section) => {
            if( sectionID === section.id && section.count < length ) {
               section = {...section, count: section.count + 1 }
            }
            return section;
        } )
        return { ...state, sections: tempSections }
        
    }
    if( action.type === DECREASE_COUNT ) {
        let sectionID = action.payload.id;
        
        let tempSections = state.sections.map( section => {
            if( sectionID === section.id && section.count > 1 ) {
               section = {...section, count: section.count - 1 }
            }
            return section;
        } )
        return { ...state, sections: tempSections }
    }
    // COUNT FOR MAIN IMAGE CHANGES
    if( action.type === INCREASE_STORY ) {
        console.log( state )
        if( !state.textHide ) {
            return { ...state, textCount: state.textCount + 1 }
        }
    }
    if( action.type === DECREASE_STORY ) {
        if( !state.textHide ) {
            return { ...state, textCount: state.textCount - 1 }
        }
    }
    // COUNT FOR STORY MODE
    if( action.type === INCREASE_COUNT_STORY ) {
        let curentCount = action.payload.count;
        if( curentCount < 6  ) {
            return { ...state, count: state.count + 1 }
        }
    }
    if( action.type === HIDE_UI ) {
        return { ...state, showUI: false }
    }
    if( action.type === SET_HEADER ) {
        let header = action.payload.id;
        return { ...state, setHeader: header }
    }
    if( action.type === UNSET_HEADER ) {
        // let currentCount = action.payload.count;
        // if( currentCount !== 1 || currentCount !== 7 ) {
           
        // }
        return { ...state, title: '', setHeader: false }
    }
    if( action.type === CHECK_STORY ) {
        return { ...state, story: true }
    }
    if( action.type === HIDE_TEXT ) {
        return { ...state, textHide: !state.textHide }
    }
    return state;
}

export default reducer;