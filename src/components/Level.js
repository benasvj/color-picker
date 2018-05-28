import React from 'react';
import {connect} from 'react-redux';

class Level extends React.Component{
    state  ={
        level:1,
        rColor:"",
        active:[],
        correct:[],
        mistakes:0,
        answers:[]
    };
    componentDidMount(){
        this.generateRandomColors();
        this.generateCorrect();
    };

    generateRandomColors = ()=>{
        const colorSelected = this.props.colors.filter(clr=>clr.name===this.props.match.params.color).map(clr=>clr.color);
        const levelColor = colorSelected[0];
        const randomColor =[]; 
        levelColor.forEach(clr=>{
            randomColor.push(Math.floor(clr/8*this.state.level));
        });
        this.setState({rColor:`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`})
    };

    generateCorrect = ()=>{
        const correct =[];
        var x=0;
        for(x=0; x<5; x++){
            var randomValue = Math.floor(Math.random()*50+10);
            while (correct.indexOf(randomValue) !== -1) {
                randomValue = Math.floor(Math.random()*50+10);
            }
            correct.push(randomValue);
        };
        this.setState({correct});
    };

    nextLevel = ()=>{
        this.setState({level:this.state.level+1});
        const active = [];
        this.setState({active});
        this.setState({mistakes:0});
    };

    answer = (value, index)=>{
        //checking whether the selected answered was selected before
        const alreadySelected  = this.state.answers.filter((ans,i)=>{
            return ans.box === index;
        });
        if(alreadySelected.length>0){
            //in this case we delete that answer (pressed again = unchecked it)
            console.log("This one has been selected before!");
            const newAnswers = this.state.answers.filter((ans,i)=>{
                return ans.box!==index;
            });
            this.setState({answers:newAnswers});
            //adjusting sum of mistakes
            !value? this.setState({mistakes: this.state.mistakes-1}) : null; 
        }else{
            //adding as new answer
            const newAnswers = [...this.state.answers, {value:value, box:index}];
            this.setState({answers:newAnswers});
            //adjusting sum of mistakes
            !value? this.setState({mistakes: this.state.mistakes+1}) : null; 
        };
    };

    active = (value)=>{
        if(this.state.active.includes(value)){
            //remove active class on that box in case it is clicked again (unclicking)
            const newActive = this.state.active.filter(act=>act!==value);
            this.setState({active:newActive});
        }else{
            const active = [...this.state.active, value];
            this.setState({active});
        }
    };

    render(){
        const allBoxes = [];
        var i=0;
        for(i=0; i<60; i++){
            allBoxes.push(Math.floor(Math.random()*100));
        };
        console.log(this.state.correct);
        const boxes = allBoxes.map((box,i)=>{
            return this.state.correct.includes(i)? 
        <div key={i} className={this.state.active.includes(i)? "active-box": "one-box"} style={{backgroundColor:this.state.rColor}} onClick={()=>{if(this.state.active.length<5){ this.answer(true, i); this.active(i)}}}></div> 
            : <div key={i} className={this.state.active.includes(i)? "active-box": "one-box"} style={{backgroundColor:this.props.match.params.color}} onClick={()=>{if(this.state.active.length<5){ this.answer(false, i); this.active(i)}}}></div>
        })
        return(  
            <div className="level-page">
                <h1>level {this.state.level}</h1>
                <div className="boxes-container">
                    {boxes}
                </div>
                <button 
                    className="next"
                    onClick={()=>{this.nextLevel(); this.generateRandomColors(); this.generateCorrect()}}
                    style={{border:`2px solid ${this.props.match.params.color}`, color:this.props.match.params.color}}>next
                </button>
                {this.state.mistakes>=3?
                <div>
                    <div className="game-over"></div>
                    <div className="game-over-banner">
                        <h2>game over</h2>
                        <p>you have made too many mistakes</p>
                        <a href="/quiz">play again</a>
                    </div>
                </div>
                :null}
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

