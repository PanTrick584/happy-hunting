import React from 'react';

import Container from './components/Container/Container'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'

import './App.css'

const initialStore = {
    sections: [],
    sectionID: 1,
    sectionAnimationLeft: false,
    sectionAnimationRight: false,
    // this is for screen resolution for other pictures
    size: 'pc',
    // initial project state and picture coun
    start: false,
    showUI: false,
    count: 1,
    // SECTIONS POSITIONS
    positions: [],
    // SECTIONS POSITIONS OLD
    posStart: '',
    posGrandpa: '',
    posPhotograph: '',
    posFish: '',
    posOld: '',
    posMuseum: '',
    posAbout: '',
    posFounded: '',
    // settingo for displaing header and proper title
    title: 'Boguś', 
    setHeader: 1,
    appearHeader: false,
    // texts
    story: false,
    textCount: 0,
    textHide: false,
    // SCROLL
    countScroll: 1,
    windowPos: 0,
  }

const store = createStore( reducer, initialStore );


function App() {

      return(
        <Provider  store={ store }>
            <Container />  
        </Provider>               
    )
}

export default App;