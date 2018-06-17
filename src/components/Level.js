import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Level extends React.Component{
    state  ={
        level:1,
        rColor:"",
        cColor:"",
        active:[],
        correct:[],
        gg:false,  //game over
        answers:[]
    };
    componentDidMount(){
        this.generateColors();
        this.generateCorrect();
    };

    generateColors = ()=>{
        const colorSelected = this.props.colors.filter(clr=>clr.name===this.props.match.params.color).map(clr=>clr.color);
        const levelColor = colorSelected[0];
        const correctColor = [];
        levelColor.forEach(clr=>{correctColor.push(clr);});
        const randomColor =[]; 
        levelColor.forEach(clr=>{
            randomColor.push(Math.floor(clr+100/this.state.level));
        });
        this.setState({rColor:`rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`});
        this.setState({cColor:`rgb(${correctColor[0]}, ${correctColor[1]}, ${correctColor[2]})`})
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
        //calculating mistakes
        const mistakes = this.state.answers.filter(answer=>!answer.value);
        if(mistakes.length>=3 || this.state.active.length>5){
            this.setState({gg:true});
        }else{
            this.setState({level:this.state.level+1});
            const active = [];
            this.setState({active});
        }
    };

    answer = (value, index)=>{
        //checking whether the selected answered was selected before
        const alreadySelected  = this.state.answers.filter((ans,i)=>{
            return ans.box === index && ans.level===this.state.level;
        });
        if(alreadySelected.length>0){
            //in this case we delete that answer (pressed again = unchecked it)
            const newAnswers = this.state.answers.filter((ans,i)=>{
                return ans.box!==index;
            });
            this.setState({answers:newAnswers});
        }else{
            //adding as new answer
            const newAnswers = [...this.state.answers, {value:value, box:index, level:this.state.level, color:this.props.match.params.color}];
            this.setState({answers:newAnswers});
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
        console.log(this.state.answers);
        const allBoxes = [];
        var i=0;
        for(i=0; i<60; i++){
            allBoxes.push(Math.floor(Math.random()*100));
        };
        const boxes = allBoxes.map((box,i)=>{
            return this.state.correct.includes(i)? 
        <div key={i} className={this.state.active.includes(i)? "active-box": "one-box"} style={{backgroundColor:this.state.rColor}} onClick={()=>{this.answer(true, i); this.active(i)}}></div> 
            : <div key={i} className={this.state.active.includes(i)? "active-box": "one-box"} style={{backgroundColor:this.state.cColor}} onClick={()=>{this.answer(false, i); this.active(i)}}></div>
        })
        return(  
            <div className="level-page">
                <h1>level {this.state.level}</h1>
                <div className="boxes-container">
                    {boxes}
                </div>
                <button 
                    className="next"
                    disabled={this.state.active.length<5 ? "disabled" : false}
                    onClick={()=>{this.nextLevel(); this.generateColors(); this.generateCorrect()}}
                    style={{border:`2px solid ${this.props.match.params.color}`, color:this.props.match.params.color}}>next
                </button>
               
                {this.state.gg?
                <div>
                    {this.props.saveStats(this.props.match.params.color,this.state.level)}
                    <div className="game-over"></div>
                    <div className="game-over-banner">
                        <h2>game over</h2>
                        <Link to="/statistics">Check Your Statistics</Link>
                        <Link to="/quiz">Play Again</Link>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        saveStats(color,level){
            dispatch({type:'SAVE_STATS', payload:{color,level}})
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Level);

