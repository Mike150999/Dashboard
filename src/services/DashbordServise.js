
export const DashbordServise = () => {

	const getResourse = async (url) => {
		let res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};

	const getAllUsers = async () => {
		const res = await getResourse('https://jsonplaceholder.typicode.com/users');
		const transoformedData = res.map(_transoformUsers);			
		return transoformedData;		
	}

	const getUser = async (id) => {
		const res = await getResourse(`https://jsonplaceholder.typicode.com/users/${id}`);
		return res;		
	}


	const _transoformUsers = (user) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			city: user.address.city,
			street: user.address.street,
			suite: user.address.suite,
			zipcode: user.address.zipcode,
			phone: user.phone,
			catchPhrase: user.company.catchPhrase,
			website: user.website,
			company: user.company.name,
			bs: user.company.bs,
			distance: user.distance || 'UNKNOWN'
		}
	}

	return {getAllUsers, getUser};

}




