import './chip.scss';


export const Chip = ({label, type}) => {
let chipStatusStyle;

switch (type){
	case 'yellow':
		chipStatusStyle = 'ChipLowClass';
		break;
	case 'green':
		chipStatusStyle = 'ChipNormalClass';
		break;
	case 'red':
		chipStatusStyle = 'ChipHighClass';
		break;
	default: 
		chipStatusStyle = 'ChipDefaultClass';
		break;
}
return(
	<div className={`chip ${chipStatusStyle}`}>	
			{label}
	</div>
)
}