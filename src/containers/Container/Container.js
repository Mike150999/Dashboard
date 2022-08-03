import './Container.scss';

export const Container = ({children, block}) => {
	const blockClass = block? 'container-block': '';
	return(
		<div className={`container-wrapper ${blockClass}`}>
		{children}
		</div>
	)
}