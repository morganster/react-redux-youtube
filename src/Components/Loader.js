import React from 'react';

import './Loader.css';
const Loader = (props) => {
 
    return(
      <div className="loader__container">
            <div className="loader__spinner--center">
                    <div className="loader__spinner">
                    </div>
            </div>
      </div>
    )
  }

  export default Loader;