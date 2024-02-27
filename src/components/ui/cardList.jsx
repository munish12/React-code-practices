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
  },
  {
    id: 4,
    title: 'Redux',
    text: `
            Redux Toolkit is a package that simplifies the process of managing state and writing Redux logic in React applications. It provides several utilities and abstractions that streamline common Redux tasks, such as store setup, reducer creation, and action creation.
            Initialize Store: You create a Redux store using the createStore() function provided by Redux. You pass it the root reducer function, which combines all your application's reducers into a single reducer.
            Dispatch Actions: Components in your application dispatch actions to the store using the dispatch function provided by the useDispatch hook (in React with React-Redux) or by using store.dispatch() directly.
            Reducers Update State: When an action is dispatched, the root reducer function is called. It delegates the responsibility of handling the action to the appropriate reducer functions based on the action's type.
            State Updates: Reducer functions return a new state object based on the action and the current state. Redux then updates the store's state with the new state returned by the reducer.
            Components Re-render: Components that are subscribed to the store's state (using useSelector in React with React-Redux) will be re-rendered with the updated state, reflecting the changes in the UI.
`,
    accordionItems: [
      {
        id: '3',
        body: [{ title: 'Redux example', path: '/redux-example' }]
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
