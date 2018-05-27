import React from 'react';
import {connect} from 'react-redux';

class Level extends React.Component{
    state  ={
        level:1,
        rColor:""
    };
    componentDidMount(){
        this.generateRandomColors();
    };

    generateRandomColors = ()=>{
        const colorSelected = this.props.colors.filter(clr=>clr.name===this.props.match.params.color).map(clr=>clr.color);
        const levelColor = colorSelected[0];
        const randomColor =[]; 
        levelColor.forEach(clr=>{
            randomColor.push(Math.floor(clr/(6-this.state.level)*0.9));
        });
        this.setState({rColor:`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`})
    };

    nextLevel = ()=>{
        this.setState({level:this.state.level+1})
    };

    render(){
        const orders = [];
        var i=0;
        for(i=0; i<60; i++){
            orders.push(Math.floor(Math.random()*100));
        };
        const goodOnes =[];
        var x=0;
        for(x=0; x<5; x++){
            goodOnes.push(Math.floor(Math.random()*60))
        }
        const boxes = orders.map((box,i)=>{
            return goodOnes.includes(i)? <div key={i} className="one-box" style={{backgroundColor:this.props.match.params.color}}></div> : <div key={i} className="one-box" style={{backgroundColor:this.state.rColor}}></div>
        })
        return(
            <div className="level-page">
                <h1>level {this.state.level}</h1>
                <div className="boxes-container">
                    {boxes}
                </div>
                <button 
                    className="next"
                    onClick={()=>{this.nextLevel(); this.generateRandomColors()}}
                    style={{border:`2px solid ${this.props.match.params.color}`, color:this.props.match.params.color}}>next
                </button>
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        colors:state.colors
    }
};

export default connect(mapStateToProps)(Level);

