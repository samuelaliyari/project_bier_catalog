import { Link,useNavigate } from "react-router-dom";
import "./Back.css"


const Back = (props) => {

	return (
		<nav className="backBtn">
			<Link to={props.path}>
				<img
					src='/src/assets/img/back.png'
					alt=''
				/>
			</Link>
		</nav>
	);
};

export default Back;
