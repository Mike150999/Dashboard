import { Task } from "../../components/Task/Task";
import { Ticket } from "../../components/Ticket/Ticket";
import { CardsUsers } from "../../components/CardsUsers/CardsUsers";
import './userPage.scss';


export const UserPage = () => {

	return(
		<>
		<CardsUsers/>
		<div className="cards">
			<Ticket/>
				<Task/>
			</div> 
		</>
	)
		
}