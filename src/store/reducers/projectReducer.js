const initState = {
	projects: [
		{id: '1', title: 'help me f', content: 'blablah'},
		{id: '2', title: 'collect atars', content: 'blah blah'},
		{id: '3', title: 'egg hunt shi', content: 'blahh blah'}
	]
}

const projectReducer = (state = initState, action) => {
		
	switch (action.type){
		case 'CREATE_PROJECT': 
			console.log('project created', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('Error when try create project', action.err);
			return state;
		case 'DELETE_PROJECT':
			console.log('project deleted');
			
			return state;
		default:
			return state;
	}
	
}

export default projectReducer;