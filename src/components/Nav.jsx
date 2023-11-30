import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<img
					src='/src/assets/img/homeicon.png'
					alt='Home'
				/>
			</Link>
		</nav>
	);
};

export default Nav;
