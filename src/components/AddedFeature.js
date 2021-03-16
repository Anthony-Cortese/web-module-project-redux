import React from 'react';
import {connect} from 'react-redux'
import {removeFeatures} from '../Redux/actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.removeFeatures(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeatures})(AddedFeature);
