import React from 'react'

import './Text.css'

const Text = ( { text, count } ) => {
    return (
        <div className="text-box">
          <p className="text">
              { text[ count - 1 ] }
          </p>  
        </div>
    )
}

export default Text
