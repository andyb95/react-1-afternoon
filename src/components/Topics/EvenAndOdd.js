import React, {Component} from 'react'

export default class EvenAndOdd extends Component {

    constructor(){
        super()
    
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({ userInput: val})
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        arr.forEach( e => {
            if (e %2 ===0){
                evens.push(parseInt(e))
            } else {
                odds.push(parseInt(e))
            }
        })

        this.setState({evenArray: evens, oddArray: odds})
    }

    render(){
        return (
         <div className= "puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick = { () => {this.assignEvenAndOdds(this.state.userInput) }} >Split</button>
                <span className = "resultsBox">
                    Evens: {JSON.stringify(this.state.evenArray) }
                </span>
                <span className = "resultsBox">
                    Odds: {JSON.stringify(this.state.oddArray) }
                </span>
            </div>
            
        )
    }
}



