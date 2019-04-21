import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';





class ProjectList extends Component {		

	render() {	

		const { projects } = this.props;
		//console.log(deleteProject);
		return (			
			<div className="project-list section">
				{ projects && projects.map(project => {
					
					return (
						
						<Link to={'/project/' + project.id} key={project.id}>
							<ProjectSummary project={project}  /> 
						</Link>
						
						
						
					)
				})}	

						
			</div>
		)
	}

}

/*
const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteProject: (id) => { dispatch({type: 'DELETE_POST', id }) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
*/
export default ProjectList;






/*

const ProjectList = ({ projects }) => {	
	return (
		<div className="project-list section">
			{ projects && projects.map(project => {
				
				return (
					
					<Link to={'/project/' + project.id} key={project.id}>
						<ProjectSummary project={project}  /> 
					</Link>
					
				)
			})}			
		</div>
	)

}

export default ProjectList;
*/