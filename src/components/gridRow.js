import React, {Component} from "react";
import { connect } from 'react-redux';
import GridElement from './gridElement';

class GridRow extends Component{

    render(){
        //console.log(this.props.patterns[this.props.activePattern])
        let row = this.props.patterns[this.props.activePattern][this.props.hIndex].map((el, lIndex)=>{
            return (<GridElement key={lIndex} lIndex={lIndex} hIndex = {this.props.hIndex} />)
        })
        return(
            <div className = "row">
                <span>{this.props.notes[this.props.hIndex]}</span>
                {row}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    patterns : state.patterns,
    activePattern : state.activePattern,
    notes : state.notes
})

export default connect(mapStateToProps)(GridRow);
