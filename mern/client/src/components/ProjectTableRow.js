import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ProjectTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject() {
        axios.delete('http://localhost:3000/api/v1/projects/' + this.props.obj._id)
            .then((res) => {
                console.log('Project successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.category}</td>
                <td>
                    <Link className="edit-link" to={"/edit/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteProject} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}