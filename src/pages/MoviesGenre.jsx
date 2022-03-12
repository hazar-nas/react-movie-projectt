import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardGroup, Card, Figure, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const MoviesGenre = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [genderTitle, setGenderTitle] = useState(null)
  const params = useParams()
  const genderNumber = params.id

  useEffect(() => {
    const getMovies = async () => {
      const movies2 = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e8fe6c13def75cda44726ea251c4fb8c&5D&with_genres=${genderNumber}`
      )
      setMovies(movies2.data.results)
      setLoading(false)
      if (genderNumber === '28') {
        setGenderTitle('Action')
      } else if (genderNumber === '12') {
        setGenderTitle('Adventure')
      } else if (genderNumber === '16') {
        setGenderTitle('Animation')
      } else if (genderNumber === '35') {
        setGenderTitle('Comedy')
      } else if (genderNumber === '80') {
        setGenderTitle('Crime')
      } else if (genderNumber === '18') {
        setGenderTitle('Drama')
      } else if (genderNumber === '10751') {
        setGenderTitle('Family')
      } else if (genderNumber === '14') {
        setGenderTitle('Fantasy')
      } else if (genderNumber === '36') {
        setGenderTitle('History')
      } else if (genderNumber === '27') {
        setGenderTitle('Horror')
      } else if (genderNumber === '10402') {
        setGenderTitle('Music')
      } else if (genderNumber === '9648') {
        setGenderTitle('Mystery')
      } else if (genderNumber === '10402') {
        setGenderTitle('Music')
      } else if (genderNumber === '10749') {
        setGenderTitle('Romance')
      } else if (genderNumber === '878') {
        setGenderTitle('Science Fiction')
      } else if (genderNumber === '10770') {
        setGenderTitle('Tv Movie')
      } else if (genderNumber === '53') {
        setGenderTitle('Thriller')
      } else if (genderNumber === '10752') {
        setGenderTitle('War')
      } else if (genderNumber === '37') {
        setGenderTitle('Western')
      }
    }
    getMovies()
  }, [genderNumber])

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{genderTitle} Movies</h3>

      {/* <Container
        fluid
        className='App py-2 overflow-hidden '
        style={{ margin: '0 auto' }}
      > */}
      <Row
        style={{ justifyContent: 'center' }}
        className=' card-example d-flex flex-row flex-wrap '
      >
        {movies.map((movie) => (
          <Card
            key={movie.id}
            className='estates m-3'
            style={{ width: '20rem', textAlign: 'center' }}
          >
            <Link to={`/movie/${movie.id}`}>
              <Card.Img
                className='imageList'
                variant='top'
                src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
              />
            </Link>
            <Card.Body>
              <Card.Title id='price'>{movie.original_title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
      {/* </Container> */}
    </div>
  )
}

export default MoviesGenre
