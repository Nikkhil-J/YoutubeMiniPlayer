import React, { Component } from 'react'

export class Search extends Component {
    state= {term: ''}

    handleChange =(e) => {
        this.setState({term: e.target.value})
    }

    handleSubmit =e => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term)
        this.setState({term:''})
    }

    render() {
        return (
            <div className="blue" onSubmit={this.handleSubmit} className="search bar ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.handleChange}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default Search
