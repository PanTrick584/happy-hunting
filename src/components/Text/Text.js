import React from 'react'

import './Text.css'

const Text = ( { text } ) => {
    return (
        <div>
          <p className="text">
              { text }
          </p>  
        </div>
    )
}

export default Text
