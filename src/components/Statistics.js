import React from 'react';
import {connect} from 'react-redux';

class Statistics extends React.Component{
    state={
        maxLevels:[]
    };
    componentDidMount(){
        var maxLevels = [];
        this.props.colors.forEach((clr,i)=>{
            const filtered = this.props.stats.filter(stat=>stat.color===clr.name);
            var maxLvl = 0;
            filtered.forEach(item=>{
                if(item.level>maxLvl){
                    maxLvl = item.level;
                }
            });
            maxLevels.push(maxLvl);
        });
        this.setState({maxLevels});
    };

    render(){
        console.log(this.props.stats)
        console.log(this.state.maxLevels)
        const bars = this.props.colors.map((clr,i)=>{
            return <div key={i} className="stats-bar" style={{backgroundColor:clr.name, height:`${this.state.maxLevels[i]*50+80}px`}}>
                <p>{this.state.maxLevels[i]>0? `Level ${this.state.maxLevels[i]}` : "no results"}</p>
            </div>
        });
        return(
            <div className="stats-page">
                <h1>stat<span>i</span>st<span>i</span>cs</h1>
                <div className="bars-container">
                    {bars}
                </div> 
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        stats:state.stats,
        colors:state.colors
    };
};

export default connect(mapStateToProps)(Statistics);