import React, { Component } from 'react';

class AddNinja extends Component{
    state ={
        name: '',
        age: '',
        belt: '' 
    }
    handleChange =(e)=>{
        this.setState({
           [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
       this.props.addNinja(this.state);
       this.setState({
        name: '',
        age: '',
        belt: '' 
       })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value ={this.state.name}onChange={this.handleChange}/>
                    <label htmlFor="age">Age</label>
                    <input type="text" age="name" id="age" value ={this.state.age} onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt</label>
                    <input type="text" name="belt" id="belt"  value ={this.state.belt} onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddNinja