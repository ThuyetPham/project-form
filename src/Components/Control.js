import React from 'react';
import Search from './Search';
import Sorttt from './Sorttt';


class Control extends React.Component {
  render() {
    return (
        <div className="row mt-15">
    
        <Search/>
           
        <Sorttt/>
        </div>
    )
  }
}

export default Control;
