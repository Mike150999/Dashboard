import './contactUsers.scss';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../containers/Container/Container';
import { DashbordServise } from '../../services/DashbordServise';
import bg from '../../assets/bg.png';
import user from '../../assets/user.png';


export const ContactUsers = () => {
	 const [user, setUser] = useState({})
	  const { id } = useParams();
	 useEffect(() => {		
	 	DashbordServise().getUser(id).then((res) => {
	 		setUser(res)
	 	})		
	 }, []);


	return(
<Container block>
	<div className="contact">
	{
		Object.keys(user).length && (
			<ContactInfo
					key={ user.name}
					name={ user.name}
					website={user.website}
					catchPhrase={user.company.catchPhrase}
					phone={user.phone}
					street={user.address.street}
					suite={user.address.suite}
					zipcode={ user.address.zipcode}
					city={user.address.city}
				/>
		)
	}
	</div>
</Container>

	)
}


const ContactInfo = ({name, website,  catchPhrase, phone, street,suite, zipcode, city }) => {
return(
	<>
	<img src={bg} alt="bg" />
<div className="contact__avatar-users">
<img className='contact__avatar-img' src={user} alt="user" />
</div>
<h2 className='contact__name'>{name}</h2>
<div className="contact__company">{catchPhrase}</div>
<div className="info">
<div className="info__address">
<h2 className='info__title'>Address</h2>
<span className='info__content'>{street}, {suite}, {city}, {zipcode}</span>
</div>
<div className="info__phone">
<h2 className='info__title'>Phone</h2>
<span className='info__content'>{phone}</span>
</div>
<div className="info__website">
<h2 className='info__title'>Website</h2>
<span className='info__content'>{website}</span>
</div>
</div>
	</>
)
}



