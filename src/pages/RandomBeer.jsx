import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RandomBeer.css"
import Nav from "../components/Nav";
import Back from "../components/Back";

const RandomBeer = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers/random")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);
	const location = useLocation()

	return (
		<section className='beer'>
			{data ? (
				<article
					key={data._id}
					className='beerHolder'>
					<div>
						<h2>{data.name}</h2>
						<h3>{data.tagline}</h3>
						<p>Created by: {data.name}</p>
						<Link
							to={`/details/${data.name}`}
							state={data}
							location={location}>
							Details
						</Link>
					</div>
					<img
						src={data.image_url}
						alt=''
					/>
				</article>
			) : null}
			<Nav />
			<Back path = "/"/>
		</section>
	);
};

export default RandomBeer;
