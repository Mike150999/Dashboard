import './Task.scss';
import { Container } from '../../containers/Container/Container';
import { Chip } from '../Chip/Chip';


export const Task = ({distance}) => {
	let chipType;

	switch (distance){
	  case 'low':
		  chipType = 'yellow';
		  break;
	  case 'normal':
		  chipType = 'green';
		  break;
	  case 'high':
		  chipType = 'red';
		  break;
	  default: 
	  chipType = '';
		  break;
  }

	return(
		<Container>
<div className="task">
		<div className="task__header">
			<div className="task__header-text">
				<h2 className="task__header-title">Tasks</h2>
				<span className="task__header-group">Today</span>
			</div>
			<a className="task__header-link" href="#">View all</a>
		</div>
		<div className="task__content">
			<div className="task__content-request">	
				<span className="task__content-create">Create new task</span>
				<button className="task__content-button">+</button>
			</div>
			<Item/>
			<Item/>
			<div className="task__content-request task__content-request--last">
			<div className="task__content-radio ">
			<input  type="radio" />
				<span className="task__content-text">Update ticket report</span>
				</div>
				<Chip label={distance} type={chipType}/>
			</div>
		</div>
		</div>
		</Container>
		
	)
}

const Item = ({distance, chipType}) => {

		return(
			<div className="task__content-request">
			<div className="task__content-radio">
			<input  type="radio" />
				<span className="task__content-text">Finish ticket update</span>
				</div>
				<Chip label={distance} type={chipType}/>
			</div>
		)
	}