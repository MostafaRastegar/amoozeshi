import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [articles, setArticles] = useState([]);

	useEffect(() => {

	}, []);

	// updating
	useEffect(() => {
		if (articles.length > 0) {
			setLoading(false)
		}
	}, [articles]);

	return (
		<React.Fragment>
			{!loading ?
				<div className="row">
					salam
				</div> :
				<div className="center hFull">
					<Loading />
				</div>
			}
		</React.Fragment>
	);
}

export default HomePage;
