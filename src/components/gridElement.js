import React, {Component} from "react";
import { connect } from 'react-redux';
import {updateGrid} from '../actions/action';

class GridElement extends Component{


    clicked(e){
        console.log("l:",this.props.lIndex, "h:", this.props.hIndex);
        //update the grid
        this.props.dispatch(updateGrid(this.props.hIndex,this.props.lIndex))
    }

    render(){
        //this will let me style the active note down the road, but the code's wrong and I'm solving a different issue at the moment.
        //don't forget to add this back into the class below.
        let activeClass = this.props.patterns[this.props.activePattern][this.props.hIndex][this.props.lIndex] ? "active" : "";
        return(
                <button className={`control ${activeClass}`} onClick={(e)=>this.clicked(this.props.lIndex,this.props.hIndex)}></button>
        )
    }
}

const mapStateToProps = state => ({
    patterns : state.patterns,
    activePattern : state.activePattern
})

export default connect(mapStateToProps)(GridElement);
