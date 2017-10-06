import React, {Component} from "react";
import { connect } from 'react-redux';
import GridRow from './gridRow'
import {createGrid} from '../actions/action';

class GridContainer extends Component{

    componentWillMount(){
        this.props.dispatch(createGrid(16,16))
    }

    render(){
        
        let grid = this.props.patterns[this.props.activePattern].map((el, index)=>{
            //console.log(el)
            return <GridRow className = "row" key={index} hIndex = {index} />
        })

        return(
            <div className = "Grid-container">
                {grid}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    patterns : state.patterns,
    activePattern : state.activePattern
})

export default connect(mapStateToProps)(GridContainer);
