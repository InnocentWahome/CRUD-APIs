import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditProject extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
    this.onChangeProjectCategory = this.onChangeProjectCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      description: '',
      category: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/projects' + this.props.match.params._id)
      .then(res => {
        this.setState({
          name: this.state.name,
          description: this.state.description,
          category: this.state.category
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeProjectName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeProjectDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeProjectCategory(e) {
    this.setState({ category: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const projectObject = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category
    };

    axios.put('http://localhost:3000/api/v1/projects/' + this.props.match.params.id, projectObject)
      .then((res) => {
        console.log(res.data)
        console.log('Project successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Project List 
    this.props.history.push('/projectlist')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeProjectName} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeProjectDescription} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={this.state.category} onChange={this.onChangeProjectCategory} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Project
        </Button>
      </Form>
    </div>);
  }
}
