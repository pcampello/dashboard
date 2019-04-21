import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { deleteProject } from '../../store/actions/projectActions';



class ProjectDetails extends Component {
	handleClick = () => {
		const id = this.props.match.params.id;		
		this.props.deleteProject(id);
		this.props.history.push("/");
		
		
	}
	render() {			
		const { project, auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		if (project) {
			return (
				<div className="container section project-details">
					<div className="card z-depth-0">
	
						<div className="card-content">
							<span className="card-title">{ project.title }</span>
							<p>{ project.content }</p>
						</div>
						<div className="card-action gret lighten-4 grey-text">
							<div>Posted by {project.authorFirstName} {project.authorLastName}</div>
							<div>{ moment(project.createdAt.toDate()).calendar() }</div>
							<div className="center">
								<button className="btn" onClick={this.handleClick} >Delete Project</button>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="container center">
					<p>Loading project..</p>
				</div>
			)
		}
		
	}
}


const mapStateToProps = (state, ownProps) => {
	
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;

	

	return {
		project: project,
		auth: state.firebase.auth

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//deleteProject: (id) => { dispatch({type: 'DELETE_PROJECT', id: id }) }
		deleteProject: (id) => dispatch(deleteProject(id))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'projects' }

	])
)(ProjectDetails);