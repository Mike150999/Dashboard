import React, { useEffect, useState } from "react";
import './cardsUsers.scss';
import { Sort } from "../../assets/icons";
import leane from '../../assets/leane.png';
import { Vector } from "../../assets/icons";
import { DashbordServise } from "../../services/DashbordServise";
import {Chip} from '../Chip/Chip';
import { Container } from "../../containers/Container/Container";
import { Link } from "react-router-dom";


export const CardsUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {		
		DashbordServise().getAllUsers().then((res) => {
			setUsers(res)
		})
	}, []);
	

	return (
		<Container block>
			<div className="users-inner">
			<div className="header__users">
			<h2 className="header__users-text ">All users</h2>
			<div className="header__users-sort">
				<Sort />
				<span className="header__users-sort">Sort</span>
			</div>
		</div>
		<div className="users__details">
			<span className="users__details-text">
				User details
			</span>
			<div className="users__details-info">
				<span className="users__details-company users__details-text"> Company Name</span>
				<span className="users__details-email users__details-text">Email</span>
				<span className="users__details-distance users__details-text">Distance</span>
			</div>
		</div>
			</div>


		{
			users.map(({ name, email, city, website, company, bs, distance,id }) => ( 
			<Link to={`/users/${id}`}>
					<CardItem 
					key={name}
					name={name}
					email={email}
					city={city}
					website={website}
					company={company}
					bs={bs}
					distance = {distance}
				/>

			</Link>
		
			))
		}

	</Container>
		
	)
}

const CardItem = ({name,  email,city,website, company, bs, distance}) => {
	
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
		<div className="card">
			<div className="users__info">
				<img src={leane} alt="" />
				<div className="users__info-text">
				<span className="users__info-name users__style-text">{name}</span>
				<span className="users__info-country users__style-text1">{city}</span>
				</div>
			</div>
			<div className="users__content">
				<div className="users__content-company">
					<span className="users__content-copmany--name users__style-text">{company}</span>
					<span className="users__content-company--markets users__style-text1">{bs}</span>
				</div>
				<div className="users__content-contact">
					<span className="users__content-contact--email users__style-text">{email}</span>
               <span className="users__content-contact--website users__style-text1">{website}</span>
				</div>
				<Chip label={distance} type={chipType}/>
				<div className="vector">
					<Vector/>
				</div>
			</div>
		</div>
	)
}
