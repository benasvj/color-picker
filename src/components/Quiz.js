import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Quiz=(props)=>{
    const colorBox = props.colors.map((clr,i)=>{
        return <Link key={i} to={`/quiz/${clr.name}`}><div className="" style={{backgroundColor:clr.name}}></div></Link>
    });
    return(
        <div className="quiz-page">
            <h1>qu<span>i</span>z</h1>
            <div className="colors-container">
                {colorBox}
            </div>
            <h2>choose your color to start eye test</h2>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        colors:state.colors
    }
};

export default connect(mapStateToProps)(Quiz);