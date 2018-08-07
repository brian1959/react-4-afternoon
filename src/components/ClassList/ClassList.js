import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '../Button/Button'


export default class ClassList extends Component {
  constructor() {
    super()

    this.state={
      students:[]
    
    };
    
  }

  componentDidMount(){
    axios 
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then( res => {this.setState({students:res.data });
      console.log(res.data)
    });
  }

  render() {
    const studentsToDisplay = this.state.students.map( (student, i) =>{
        return(
            <Link to={`/students/${student.id}`} key={i} >
              <h3 >Name: {`${student.first_name} ${student.last_name}`}</h3>
            </Link>
        )
    })
    console.log({studentsToDisplay})
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {studentsToDisplay}
        <Button action={this.props.history.goBack}>Return to Home</Button>
      </div>
    )
  }
}