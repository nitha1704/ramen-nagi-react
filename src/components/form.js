import React from 'react';
import { event } from 'jquery';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name: "", message: "", topic: "react"};

        // this.handleNameChange = this.handleNameChange.bind(this);

    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
    }

    handleTopicChange = (event) => {
        this.setState({topic: event.target.value});
    }

    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.message} ${this.state.topic}`);
        event.preventDefault();
    }

    testtest = (event) => {
        alert(event)
    }

    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            //     <div>
            //         <label>Name</label>
            //         <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
            //     </div>

            //     <div>
            //         <label>Message</label>
            //         <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
            //     </div>

            //     <div>
            //         <select value={this.state.topic} onChange={this.handleTopicChange}>
            //             <option value="react">React</option>
            //             <option value="angular">Angular</option>
            //             <option value="vue">Vue</option>
            //         </select>
            //     </div>

            //     <button type="submit">Submit</button>

                
            // </form>  

            <button onClick={()=>this.testtest('490erter')}>
                TEST 55556
            </button>      
        )
    }

}

export default Form;