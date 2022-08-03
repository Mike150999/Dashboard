import React from "react";
import { useState } from "react";
import './boxes.scss';


export const Boxes = () => {
	const [activeTab, setActiveTab] = useState('Online');

	function changeActiveHandler(tabname) {
		setActiveTab(tabname);
	}

	return (
		<div className="box__info-users">
			<Box activeTab={activeTab} changeTab={changeActiveHandler} title={'Active'} number={'60'} />
			<Box activeTab={activeTab} changeTab={changeActiveHandler} title={'Online'} number={'16'} />
			<Box activeTab={activeTab} changeTab={changeActiveHandler} title={'Filtered'} number={'43'} />
			<Box activeTab={activeTab} changeTab={changeActiveHandler} title={'Banned'} number={'64'} />
		</div>
	)
}

export const Box = ({ title, number, activeTab, changeTab }) => {

	const active = activeTab === title;

	const activeClass = active ? 'box__info-users-item--active' : '';
	return (
		<div onClick={() => changeTab(title)} className={`box__info-users-item ${activeClass}`}>
			<span className="box__info-users-title">{title}</span>
			<span className="box__info-users-number">{number}</span>
		</div>
	)
}