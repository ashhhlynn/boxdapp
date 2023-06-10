import React from 'react';
import { Card, Reveal, Popup, Button, Icon, Image } from 'semantic-ui-react';

const Films = (props) => {
	const DiaryComponent = props.diaryComponent;

	return (
		<Card.Group itemsPerRow={5}>
			{props.films.map((movie, index) => (
                 <Popup flowing hoverable
                 trigger={
				<Card>
			        <Image src={movie.Poster} alt='movie'></Image>		  
				</Card>		
            }>
            <div onClick={() => props.handleDiaryClick(movie)}>
                <Popup.Content>
                <Button floated="right" basic >
                <center>Log Film to Diary <Icon name="add"/></center>
            </Button>
            </Popup.Content>
        </div>
            </Popup>
			))}
		</Card.Group>
	);
};

export default Films