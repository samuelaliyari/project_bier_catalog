import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    
    return (
		<section className='home'>
			<Link to='/allbeers'>
				<img
                        className="homeimage"
					src='/src/assets/img/all.jpg'
					alt=''
				/>
				<h1>All Beers</h1>
				<p></p>
			</Link>
			<Link to="/randombeer">
				<div>
					<img
                        className="homeimage"
						src='/src/assets/img/random.jpg'
						alt=''
					/>
					<h1>Random beer</h1>
					<p></p>
				</div>
			</Link>
		</section>
	);
}

export default Home;