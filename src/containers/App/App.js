import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Layout } from '../layout/Layout.js';
import { ContactUsers } from '../../components/contactUsers/contactUsers';
import { UserPage } from '../../pages/UserPage/UsersPage';
import { USERS_URL, OVERVIEW_URL, IDEAS_URL, CONTACTS_URL, AGENTS_URL, ARTICLE_URL, SETTINGS_URL, SUBSCRIPTION_URL } from '../../routes/ClientUrl';

export const App = () => {
	return (
		<BrowserRouter>
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path={USERS_URL} element={<UserPage/>}/>
					<Route path={OVERVIEW_URL} element={<p>overview</p>}/>
					<Route path={IDEAS_URL} element={<p>ideas</p>}/>
					<Route path={CONTACTS_URL} element={<p>contacts</p>}/>
					<Route path={AGENTS_URL} element={<p>agents</p>}/>
					<Route path={ARTICLE_URL} element={<p>article</p>}/>
					<Route path={SETTINGS_URL} element={<p>settings</p>}/>
					<Route path={SUBSCRIPTION_URL} element={<p>subscription</p>}/>
					<Route path={`${USERS_URL}/:id`} element={<ContactUsers/>}/>
				</Route>
			</Routes>
		</div>
		</BrowserRouter>
		
	);
}
