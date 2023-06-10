import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from 'react';
import { Segment, Icon, Menu, Divider, Container } from 'semantic-ui-react'
import WelcomeFilms from './components/WelcomeFilms';
import Films from './components/Films';
import Diaries from './components/Diaries';
import SearchBox from './components/SearchBox';
import AddDiary from './components/AddDiary';


const App = () => {
	const [films, setFilms] = useState([])
  const [diaries, setDiaries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setFilms(responseJson.Search)
		}
	}
  useEffect(() => {
		getMovieRequest(searchValue)
		}, [searchValue])

    const addDiaryFilm = (film) => {
      const newDiaryList = [...diaries, film];
      setDiaries(newDiaryList);
    };
  return (
    <div classname="app">
      <Menu style={{backgroundColor:"#15191b", color:"white", height:"100px"}}>
				<Menu.Menu style={{marginLeft:"5%", marginTop:".5%"}} position="left"><br></br>
					<h1>Boxd.</h1>
				</Menu.Menu>
				<Menu.Menu  style={{marginTop:"3%", marginRight:"6%"}} position='right'>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
					<Icon style={{marginTop:"0%", marginRight:"-300%"}} size="large" name="search"/>
				</Menu.Menu>
			</Menu>
      <Container>
        <WelcomeFilms/>
        <Divider></Divider>
        <Films
					films={films}
          handleDiaryClick={addDiaryFilm}
          diaryComponent={AddDiary}
        />
        <Divider></Divider>
        <Diaries
					films={films}
        />
      </Container>
    </div>
  )
}

export default App;