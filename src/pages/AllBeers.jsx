import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./AllBeers.css";
import Nav from "../components/Nav";
import Back from "../components/Back";

const AllBeers = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("https://ih-beers-api2.herokuapp.com/beers")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<section className='allBeers'>
			{data
				? data.map((beer) => (
						<article
							key={beer._id}
							className='beerHolderAll'>
							<div>
								<h2>{beer.name}</h2>
								<h3>{beer.tagline}</h3>
								<p>Created by: {beer.name}</p>
								<Link
									to={`/details/${beer.name}`}
									state={beer}>
									Details
								</Link>
							</div>
							<img
								src={beer.image_url}
								alt=''
							/>
						</article>
				))
				: null}
			<Nav />
			<Back path='/' />
		</section>
	);
};

export default AllBeers;
