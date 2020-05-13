import React, {Component} from 'react'

export default class Sum extends Component{

    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val){
        this.setState({ number1: val })
    }

    handleChange2(val){
        this.setState({ number2: val})
    }

    sum(number1, number2){
        this.state.sum = number1 + number2
    }


    render(){
        return (
            <div className= "puzzleBox sumPB">
                <h4>Sum</h4>
                <input className = "inputLine" type = "number" onChange = {(e)=> this.handleChange1(e.target.value)}/>
                <input className = "inputLine" type = "number" onChange = {(e)=> this.handleChange2(e.target.value)}/>
                <button className = "confirmationButton" onClick = { () => this.add(this.state.number1, this.state.number2) 
                }>Add</button>
                <span className = 'resultsBox'> Sum: {this.state.sum} </span>
            </div>
        )
    }
}
