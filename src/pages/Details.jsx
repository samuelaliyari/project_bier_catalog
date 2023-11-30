import Back from "../components/Back";
import Nav from "../components/Nav";
import "./Details.css";
import { useLocation } from "react-router-dom";



const Details = () => {
	const data = useLocation().state;

	return (
		<section className='detail allBeers'>
			<article className='beerHolderAll'>
				<div>
					<h2>{data.name}</h2>
					<h3>{data.tagline}</h3>
					<p>
						first brewed: <span>{data.first_brewed}</span>
					</p>
					<p>
						attenuation level: <span>{data.attenuation_level}</span>
					</p>
					<p>{data.description}</p>
				</div>
				<img
					src={data.image_url}
					alt=''
				/>
			</article>
			<Nav />
			<Back
				path = "/allbeers"
			/>
		</section>
	);
};

export default Details;