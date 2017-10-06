import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timeline extends Component{

    render(){
        return <div  id="timeline" >This is working.</div>
    }
}

const mapStateToProps = state => ({
    patterns : state.patterns,
    activePattern : state.activePattern,
    isPlaying: state.isPlaying,
    notes: state.notes
})

export default connect(mapStateToProps)(Timeline);
