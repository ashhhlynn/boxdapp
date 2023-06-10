import React, { useState, useEffect } from 'react'
import { Image, Card } from 'semantic-ui-react'

const WelcomeFilms = () => {
	const [welcomeMovies, setWelcomeMovies] = useState([]);
	const getWelcomeMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=computer&apikey=263d22d8`
		const response = await fetch(url);
		const responseJson = await response.json()
		if (responseJson.Search) {
			setWelcomeMovies(responseJson.Search.slice(0,8))
		}
	}

	useEffect(() => {
		getWelcomeMovieRequest()
	}, []);
    
	return (
        <Card.Group itemsPerRow={8}>
            {welcomeMovies.map((wm) => (
                <Card>
                    <Image src={wm.Poster}/>
                </Card>
	        ))}
        </Card.Group>
    )
}

export default WelcomeFilms