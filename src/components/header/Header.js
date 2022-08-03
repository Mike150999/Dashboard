import React from "react"
import './header.scss';
import { Search, Notification } from '../../assets/icons';
import avatar from '../../assets/avatar.png';


export const Header = () => {
	return (
		<div className="header">

			<h1 className="header__page-title">Users</h1>

			<div className="header__profile-content">
				<div className="header__profile-info">
					<div className="header__profile-info-icon">
						<span className="header__profile-search"><Search /></span>
						<Notification />
					</div>
					<Divader />
					<p className="header__profile-info-name">
						Jones Ferdinand
					</p>
					<img  src={avatar} alt="avatar" />

				</div>

			</div>
		</div>
	)

}

const Divader = () => {
	return (
		<div className='header__divader'></div>
	)
}