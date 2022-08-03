import {Outlet} from 'react-router-dom';
import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/header/Header';
import { Boxes } from '../../components/Boxes/Boxes';
import './layout.scss';

export const Layout = () => {
	return (
	<div className='layout'>
			<Sidebar />
		<div className='content'>
				<Header />
				<Boxes />
			<div className="contact__users">
				<Outlet/>
			</div>		
			
		</div>
	</div>

	)

}