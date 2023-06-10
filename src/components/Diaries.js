import React from 'react'
import { Header, Image, Button, Item, Icon, Divider } from 'semantic-ui-react'
import MovieRating from './MovieRating'
import MovieDate from './MovieDate'

const Diaries = (props) => {
	return (
		<>
		{props.films.map((movie, index) => (
			<Item style={{marginLeft:"5%", marginRight:"5%"}}>
                <div onClick={() => props.handleDiaryClick(movie)}>
                    <Button floated="right" size="mini" style={{width:"40px"}} inverted basic>
                        <center><Icon size="small" name="delete" /></center>
                    </Button>
				</div>
                <Header as="h5" floated="right" style={{color:"white", textAlign:"right"}}>
                    <h3>{movie.Title} </h3>
                    <h5>{movie.Year}</h5>
					<MovieRating film={movie} key={movie.imdbID}/>
                </Header>
                <Header floated="left"><br></br>
                    <MovieDate film={movie} key={movie.imdbID}/>
                </Header>
				<Image size="tiny" style={{ marginLeft:"13%", alignContent:"left"}} src={movie.Poster} alt='movie'/>
                <Divider></Divider>
            </Item>
		))}
        </>
	)
}

export default Diaries