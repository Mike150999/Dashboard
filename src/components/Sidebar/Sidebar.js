import './sidebar.scss'
import { OverviewIcon, Users, Ideas, Contacts, Agents, Article, Settings, Subscription, Logo } from '../../assets/icons';
import { Link, useLocation } from 'react-router-dom';
import { USERS_URL, OVERVIEW_URL, IDEAS_URL, CONTACTS_URL, AGENTS_URL, ARTICLE_URL, SETTINGS_URL, SUBSCRIPTION_URL } from '../../routes/ClientUrl';


export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className="sidebar__logo-title">
				<Logo />
				<h2 className='sidebar__title'>Dashboard</h2>
			</div>
			<div className='sidebar__pages'>
				<ul>
					<Link to={OVERVIEW_URL}>
					<Item path={OVERVIEW_URL} title={'Overview'} icon={<OverviewIcon />} />
					</Link>
					<Link to={USERS_URL}>
					<Item path={USERS_URL} title={'Users'} icon={<Users />} />
					</Link>
					<Link to={IDEAS_URL}>
					<Item path={IDEAS_URL} title={'Ideas'} icon={<Ideas />} />
					</Link>
					<Link to={CONTACTS_URL}>
					<Item path={CONTACTS_URL} title={'Contacts'} icon={<Contacts />} />
					</Link>
					<Link to={AGENTS_URL}>
					<Item path={AGENTS_URL} title={'Agents'} icon={<Agents />} />
					</Link>
					<Link to={ARTICLE_URL}>
					<Item path={ARTICLE_URL} title={'Article'} icon={<Article />} />
					</Link>
					<Divader />
					<Link to={SETTINGS_URL}>
					<Item path={SETTINGS_URL} title={'Settings'} icon={<Settings />} />
					</Link>
					<Link to={SUBSCRIPTION_URL}>
					<Item path={SUBSCRIPTION_URL} title={'Subscription'} icon={<Subscription />} />
					</Link>

				</ul>
			</div>
		</div>
	)
}

const Divader = () => {
	return (
		<div className='sidebar__divader'></div>
	)
}

const Item = ({ title, icon, path }) => {
	const location = useLocation();
	const active = path === location.pathname;
	const activeClass = active ? 'sidebar__itemActive' : '';

	return (
		<li className={`${activeClass} sidebar__item`}>
			<div className='sidebar__item-background'></div>
			<div className='item-icon'>{icon}</div>
			<span>{title}</span>
		</li>


	)
}

