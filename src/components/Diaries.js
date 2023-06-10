import React from 'react';
import { Header, Image, Button, Rating,Item, Divider } from 'semantic-ui-react';
import MovieRating from './MovieRating';

const Diaries = (props) => {
	const DiaryComponent = props.diaryComponent;
	return (
		<>
		{props.films.map((movie, index) => (
			<Item style={{marginLeft:"5%", marginRight:"5%"}}>
                <Header as="h5" floated="right" style={{color:"white", textAlign:"right"}}>
                    <h3>{movie.Title} </h3>
                    <h5>{movie.Year}</h5>
					<MovieRating/>
                    <div onClick={() => props.handleDiaryClick(movie)}>
                        <Button size="tiny" inverted basic>X</Button>
				    </div>
                </Header>
                <Header floated="left"><br></br>
                    <Button inverted style={{backgroundColor:"#FFFEEF", color:"black"}}>
                        <h3><b>June 8</b><br></br>2023</h3>
                    </Button>
                </Header>
				<Image size="tiny" style={{ marginLeft:"13%", alignContent:"left"}} src={movie.Poster} alt='movie'/>
                <Divider></Divider>
            </Item>
		))}
        </>
	);
};

export default Diaries;