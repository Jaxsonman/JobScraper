import React, { Component } from 'react';
import axios from 'axios';



const  INITIAL_STATE = {
    search: '',
}


export default class Search extends Component {
    constructor(){
        super()
        this.state = {
            search: '',
        }
        this.state = INITIAL_STATE

        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
        
    }

    handleOnClick(e) {
        e.preventDefault();
        console.log('this was clicked')
        // axios.defaults.headers.post['crossDomain'] = true;
        // axios.post('http://localhost:5000/jobs', JSON.stringify(this.state))
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify(this.state),
            header: {
                "Content-Type": 'application/json'
            },
        })
        .then(response => console.log(response))

        
    }

    render() {
        return(
            <form className="form" onSubmit={this.inputData}>
                <input className="input" type="text" name="search" placeholder="Search Job Here" onChange={event => this.handleChange(event) } />
                <button className="button" onClick={this.handleOnClick}>Search</button>
                {console.log(this.state)}
            </form>
        )
    }
} 
