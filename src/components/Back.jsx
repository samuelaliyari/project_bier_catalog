import { Link } from "react-router-dom";
import "./Back.css"


const Back = (props) => {

	return (
		<nav className='backBtn'>
			<Link to={props.path}>
			</Link>
		</nav>
	);
};

export default Back;
