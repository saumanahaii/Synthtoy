import {addPattern,updateActivePattern} from '../actions/action';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class PatternBar extends Component {

  addPattern(){
    console.log("Fired add Pattern");
    this.props.dispatch(addPattern());
    setTimeout(()=>this.selectPattern(this.props.patterns.length-1), 100);

  }

  selectPattern(i){
    this.props.dispatch(updateActivePattern(i));
  }

  render() {
    let patterns = this.props.patterns.map((el,i)=>{
      let selectedClass = this.props.activePattern===i ? "selected" : "";
      return (<li data-index={i} key={i}><button id = {selectedClass} onClick={()=>this.selectPattern(i)}>Pattern #{i+1}</button></li>)
    })

    return (
      <div className="PatternBar">
        <button onClick={()=>this.addPattern()}>Add Pattern</button>
        <ul>
          {patterns}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    activePattern : state.activePattern,
    isPlaying: state.isPlaying,
    notes: state.notes,
    patterns : state.patterns
})

export default connect(mapStateToProps)(PatternBar);
