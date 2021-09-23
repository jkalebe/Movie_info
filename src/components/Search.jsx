import React, {useState} from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import {BiSearch} from 'react-icons/bi'

import axios from 'axios'
import Story from './Story.jsx'


function Search() {
    const baseURL = 'https://www.omdbapi.com/?apikey=2ff0da89&'
    
    let [data, setData] = useState()
    const [movie, setMovie] = useState('')


    const handleChange = (e) =>{
        console.log(movie)
        setMovie(String(e.target.value).replace(' ', '+'))
        
    }

    const searchMovie = () => {
        setData(null)
            axios.get(`${baseURL}s=${movie}`).then((res) =>{
                setData(res.data.Search)
                console.log(data)
            }) }

    return (
        <div className='container'>

            <div>
                <InputGroup className="mb-3">
                    <FormControl
                    onChange={handleChange}
                    placeholder="Title of Movie"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={searchMovie}>
                    <BiSearch/>
                    </Button>
                </InputGroup>

            </div>
            {
                data  ?
                <Story data={data}/> : null
            }
        </div>
    )
}

export default Search
