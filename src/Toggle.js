/**
 * Created by Aliaksei_Rachanok on 8/14/2017.
 */
import React, { Component } from 'react';



class MyFrom extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submited:' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default MyFrom;