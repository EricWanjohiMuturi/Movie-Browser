import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import AboutView from './components/About'
import { Routes, Route } from 'react-router-dom'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6919ec4f9b641564469ce530022911da&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
    
  }, [searchText])

  return (
    <>
      <div>
        <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path="/about/" element={<AboutView />} />
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<SearchView  keyword={searchText} searchResults={searchResults}/>}  />
          <Route path="/movies/:id/" element={<MovieView />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
