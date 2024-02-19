import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'

function OffcanvasExample () {
  return (
    <>
      {[false].map(expand => (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" key={expand} expand={expand} className='bg-body-tertiary mb-3'>
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/">React Best Practices (React Analytica)</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Components
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link as={NavLink} to="/useState">useState</Nav.Link>
                  <Nav.Link as={NavLink} to="/useEffect">useEffect</Nav.Link>
                  <Nav.Link as={NavLink} to="/useMemo">useMemo</Nav.Link>
                  <Nav.Link as={NavLink} to="/useCallback">useCallback</Nav.Link>
                  <Nav.Link as={NavLink} to="/useContext">UseContext</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default OffcanvasExample
