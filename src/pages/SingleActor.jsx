import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import CardSlider from '../components/CardSlider'

import { getActorDetails, getActorMovies } from '../store/actorsSlice'

const SingleActor = () => {
  const { actorId } = useParams()
  const dispatch = useDispatch()
  const actor = useSelector(
    (state) => state.actors.actorsDetails.actorsDetailsList
  )
  const actorMovies = useSelector(
    (state) => state.actors.actorMovies.actorMoviesList
  )
  const { status } = useSelector((state) => state.actors.actorsDetails)
  const [currentMovieNumber, setCurrentMovieNumber] = useState({
    before: 0,
    after: 4,
  })
  const imageUrl = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    dispatch(getActorDetails(actorId))
    dispatch(getActorMovies(actorId))
  }, [actorId, dispatch])

  return (
    <div style={{ marginTop: '2rem' }}>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='grid_actor_container'>
            <div>
              <img
                className=' grid_single-actor_container--img'
                style={{ width: '100%', height: '100%' }}
                src={`${imageUrl}/${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
            <div
              className=' grid_single-actor_container--div'
              style={{
                backgroundColor: '#FFFAFA',
                color: 'black',
                padding: '12px',
              }}
            >
              <h1
                className=' grid_single-actor_container--img'
                style={{
                  fontSize: '1.5rem',
                  textAlign: 'left',
                  padding: '0px',
                }}
              >
                {actor.name}
              </h1>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                }}
              >
                <p style={{ fontSize: '12px' }}>
                  <span>Birthday:</span>
                  {actor.birthday}
                  {actor.deathday && <span>Death:{actor.deathday}</span>}
                </p>
                <p style={{ fontSize: '12px' }}>
                  <span>Popularity:</span>
                  {actor.popularity}
                </p>
              </div>
              <hr style={{ margin: '0 7px' }} />
              <p className='grid_actor_container--movie-details'>
                {actor?.biography}
              </p>
            </div>
            <div className='grid_actor_container--right-img'>
              {actorMovies.cast && (
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt='img.png'
                  src={`${imageUrl}/${actorMovies?.cast[0]?.poster_path}`}
                />
              )}
            </div>
          </div>
          <h3
            style={{
              textAlign: 'center',
              paddingLeft: '1.5rem',
              marginTop: '4rem',
              fontSize: '2rem',
            }}
          >
            Movies
          </h3>
          <div className='actor_container'>
            {actorMovies.cast &&
              actorMovies.cast
                .slice(currentMovieNumber.before, currentMovieNumber.after)
                .map((movie) => (
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                  >
                    <Col className='card_hover_effect'>
                      <img
                        alt='actor.png'
                        className='actor_container--img'
                        src={`${imageUrl}/${movie.poster_path}`}
                      />
                      <h4 className='actor_container--h4'>
                        {movie.title.length > 25
                          ? movie.title.slice(0, 25) + '...'
                          : movie.title}
                      </h4>
                    </Col>
                  </Link>
                ))}
            <div style={{ alignSelf: 'center' }}>
              <CardSlider
                Arrayy={actorMovies.cast}
                currentState={currentMovieNumber}
                setCurrentState={setCurrentMovieNumber}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleActor
