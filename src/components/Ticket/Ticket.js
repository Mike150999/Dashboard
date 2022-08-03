import React from "react";
import './ticket.scss';
import { Container } from "../../containers/Container/Container";

export const Ticket = () => {

return(
	<Container>
		<div className="ticket">
		<div className="ticket__header">
			<div className="ticket__header-text">
				<h2 className="ticket__header-title">Unresolved ticket</h2>
				<span className="ticket__header-group">Group:</span>
				{/* <span className="ticket__header-support">Support</span> */}
			</div>
			<a className="ticket__header-link" href="#">View details</a>
		</div>
		<div className="ticket__content">
			<div className="ticket__content-request">
				<span className="ticket__content-text">Waiting on Feature Request</span>
				<span className="ticket__content-number">4238</span>
			</div>
			<div className="ticket__content-request">
				<span className="ticket__content-text">Awaiting Customer Response</span>
				<span className="ticket__content-number">1005</span>
			</div>
			<div className="ticket__content-request">
				<span className="ticket__content-text">Awaiting Developer Fix</span>
				<span className="ticket__content-number">914</span>
			</div>
			<div className="ticket__content-request ticket__content-request--last">
				<span className="ticket__content-text">Pending</span>
				<span className="ticket__content-number">281</span>
			</div>
		</div>
		</div>

	</Container>
)

}