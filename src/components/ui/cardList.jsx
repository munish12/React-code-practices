import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Stack } from 'react-bootstrap'

const cardData = [
  {
    id: 1,
    title: 'React Hooks',
    text: 'React Hooks defintion with examples',
    accordionItems: [
      {
        id: '0',
        body: [
          { title: 'useState', path: '/useState' },
          { title: 'useEffect', path: '/useEffect' },
          { title: 'useMemo', path: '/useMemo' },
          { title: 'useCallback', path: '/useCallback' },
          { title: 'UseContext', path: '/UseContext' },
          { title: 'UseRef', path: '/UseRef' },
          { title: 'UseReducer', path: '/UseReducer' },
          { title: 'UseDebounce', path: '/UseDebounce' }
        ]
      }
    ]
  },

  {
    id: 2,
    title: 'Data Fetching',
    text: 'Data Fetching example with https://jsonplaceholder.typicode.com/',
    accordionItems: [
      {
        id: '1',
        body: [{ title: 'Data Fetching', path: '/data-fetching' }]
      }
    ]
  },
  {
    id: 3,
    title: 'React Query',
    text: 'React Query is a JavaScript library designed to simplify and optimize data fetching and state management in React applications, particularly those that interact with remote data sources such as APIs. It provides a set of hooks and utilities that make it easy to fetch, cache, update, and synchronize data across components.',
    accordionItems: [
      {
        id: '2',
        body: [{ title: 'React Query', path: '/reactQuery' }]
      }
    ]
  }
]

const CardsList = () => {
  return (
    <Container fluid>
      <Row>
        {cardData.map(card => (
          <Col sm={4}>
            <Card key={card.id} style={{ width: 'auto' }}>
              <Accordion>
                {card.accordionItems.map((item, index) => (
                  <Accordion.Item eventKey={item.id} key={index}>
                    <Accordion.Header>
                      <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                      </Card.Body>
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.body.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path} // Use the path for navigation
                          className='btn btn-link d-flex flex-column' // Style the link as a button or according to your needs
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardsList
