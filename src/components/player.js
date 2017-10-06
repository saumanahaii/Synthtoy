import {togglePlay} from '../actions/action';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tone from 'tone';

class Player extends Component{
    constructor(props){
        super(props);
        this.synth = new Tone.PolySynth(6, Tone.Synth, {
			"oscillator" : {
                type:"sine",
                envelope:{
                    attack:0.1,
                    release:0.1,
}
			}
		}).toMaster();
        Tone.Transport.bpm.value = 80;
        Tone.Transport.loop = true;
        Tone.Transport.humanize = true;
        this.sequence = new Tone.Sequence((time,col)=>{
            //console.log("running sequence")

            this.props.patterns[this.props.activePattern].forEach((el, index)=>{
                if(el[col]){
                    console.log(this.props.notes[index])
                    this.synth.triggerAttackRelease(this.props.notes[index], "16n");
                }
            })

		}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");

        //Tone won't do the sequence stuff unless you turn this on first!
        Tone.Transport.start("+0.1");
    }

    clickedPlay(){

        this.props.dispatch(togglePlay());
        this.props.isPlaying === true ? this.sequence.stop() : this.sequence.start();


        //loop.start(0);

    }

    render(){
        let playMessage = this.props.isPlaying ? "-Stop-" : "-Play-";
        return(<button className="play-button" onClick={()=>this.clickedPlay()}>{playMessage}</button>)
    }

}

const mapStateToProps = state => ({
    patterns : state.patterns,
    activePattern : state.activePattern,
    isPlaying: state.isPlaying,
    notes: state.notes
})

export default connect(mapStateToProps)(Player);
