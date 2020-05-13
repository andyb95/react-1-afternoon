import React, {Component} from 'react'

export default class FilterString extends Component{

    constructor(){
        super()

        this.state = {
            words: ['make', 'reading', 'pen', 'homeopathics'],
            userInput: '',
            filteredWords: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterNames(userInput) {
        let words = this.state.words
        let filteredWords = []

        for (let i = 0; i < words.length; i++){
            if (words[i].includes(userInput)) {
                filteredWords.push(words[i])
            }
        }
        this.setState({ filteredWords: filteredWords})
    }

    render(){
        return (
            <div className = "puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className= "puzzleText"> Words: {JSON.stringify(this.state.words, null, 10) }</span>
                <input className = "inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className = "confirmationButton"> Filter </button>
                <span className = "resultsBox filterStringRB"> Filtered Words: {JSON.stringify(this.state.filteredWords, null, 10)}</span>
            </div>
        )
    }
}