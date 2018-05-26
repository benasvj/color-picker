import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Home=(props)=>{
    const colorBox = props.match.params.color?
        props.colors.map((clr,i)=>{
            return <Link key={i} to={`/colors/${clr.name}`} className={clr.name===props.match.params.color? "active" : null}>
            <div 
                style={{backgroundColor:clr.name}}>
                {clr.name===props.match.params.color?<div><h3 style={{color:clr.name}}>{clr.name}</h3><p>{clr.description}</p></div>:null}
            </div>
        </Link>
        })
        :   props.colors.map((clr, i)=>{
        return <Link key={i} to={`/colors/${clr.name}`}>
            <div style={{backgroundColor:clr.name}} className="pre-active"></div>
        </Link>
    });
    return(
        <div className="colors-container">
            {colorBox}
        </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        colors:state.colors
    }
};

export default connect(mapStateToProps)(Home);