import React, {Component} from 'react'

export default class FilterObject extends Component{

    constructor(){
        super()

        this.state = {
            pets: [
                {
                    name: 'Bowser',
                    animal: 'dog',
                    energy: 'insane'
                },
                {
                    name: 'Nixon',
                    animal: 'cat',
                    mentalDisorders: 'all of them'
                },
                {
                    name: 'Lucy',
                    adopted: true,
                    cuteness: 1000
                }
            ],
            userInput: '',
            filteredPets: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterPets(prop){
        let pets = this.state.pets
        let filteredPets = []

        for ( let i = 0; i < pets.length; i++){
            if (pets[i].hasOwnProperty(prop)){
                filteredPets.push(pets[i])
            }
        }
        this.setState({ filteredPets: filteredPets})
    }

    render(){
        return(

            <div className= "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className= "puzzleText"> Original: {JSON.stringify(this.state.pets, null,10) } </span>
                <input className= "inputLine" onChange = {(e) => this.handleChange(e.target.value)}/>
                <button className= "confirmationButton" onClick = { () =>this.filterPets(this.state.userInput) }>Filter</button>
                <span className = "resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPets, null, 10) } </span>
            </div>    
        )
    }
}