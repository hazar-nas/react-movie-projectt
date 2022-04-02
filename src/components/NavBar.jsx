import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResults } from '../store/searchSlice'

function NavBar() {
  const ref = useRef()
  const [searchValue, setSearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const imageUrl = 'https://image.tmdb.org/t/p/w500/'
  const searchResultList = useSelector(
    (state) => state.searchResult.searchResult.searchResultList
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(getSearchResults(searchValue))
    }
  }, [searchValue, dispatch])

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isOpen])

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='/'>Movie App</Navbar.Brand>
          <Navbar.Toggle id='navmenu' aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>

              <NavDropdown title='Movies' id='navbarScrollingDropdown'>
                <NavDropdown.Item as={Link} to='/moviesgenre/28'>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/12'>
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/16'>
                  Animation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/35'>
                  Comedy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/80'>
                  Crime
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/18'>
                  Drama
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/10751'>
                  Family
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/14'>
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/36'>
                  History
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/27'>
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/10402'>
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/9648'>
                  Mystery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/10749'>
                  Romance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/878'>
                  Science Fiction
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/10770'>
                  Tv Movie
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/53'>
                  Thriller
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/10752'>
                  War
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/moviesgenre/37'>
                  Western
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/actor'>
                Actors
              </Nav.Link>
              <Nav.Link as={Link} to='/aboutus'>
                About
              </Nav.Link>
            </Nav>
            <Form style={{ position: 'relative' }} className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                onChange={(e) => {
                  setSearchValue(e.target.value)
                  setIsOpen(true)
                }}
                value={searchValue}
              />

              {!!searchResultList && (
                <div
                  ref={ref}
                  className='search_container'
                  style={{
                    display: (searchValue === '' || !isOpen) && 'none',
                  }}
                >
                  {searchResultList.slice(0, 4).map((item) => (
                    <Link
                      style={{ textDecoration: 'none' }}
                      key={item.id}
                      to={`/movie/${item.id}`}
                    >
                      <div
                        onClick={() => {
                          setIsOpen(false)
                          setSearchValue('')
                        }}
                        className='search-result_container'
                      >
                        <img
                          style={{
                            width: '20%',
                            height: '100%',
                            marginRight: '30px',
                            fontSize: '11px',
                            color: 'pink',
                          }}
                          src={`${imageUrl}/${item.poster_path}`}
                          alt='movie.png'
                        />
                        <p
                          style={{
                            textAlign: 'left',
                            alignSelf: 'center',
                            color: 'pink',
                            fontSize: '12px',
                            width: '60%',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
