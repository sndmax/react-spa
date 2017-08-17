import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            value: '',
            textarea: 'textarea',
            select: 'opt2'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleChange(event) {
        const target = event.target;
        this.setState({value: target.value.toUpperCase()});
    }

    handleTextareaChange(event) {
        const target = event.target;
        this.setState({textarea: target.value});
    }

    handleSelectChange(event) {
        const target = event.target;
        this.setState({select: target.select});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label><br />
                <label>
                    Text:
                    <textarea value={this.state.textarea} onChange={this.handleTextareaChange} />
                </label><br />
                <label>
                    Pick value:
                    <select value={this.state.select} onClick={this.handleSelectChange}>
                        <option value="opt1">1</option>
                        <option value="opt2">2</option>
                        <option value="opt3">3</option>
                    </select>
                </label><br />
                <label>
                    Is Going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label><br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onClick={this.handleInputChange}
                    />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;