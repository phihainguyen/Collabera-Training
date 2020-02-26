import React, {useState} from 'react';
import { Card, InputGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap';

function Login() {
    let [model, update] = useState({
      email: '',
      password: ''
  })
  function changeval(event) {
    let obj = Object.assign({}, model)
    obj[event.target.name] = event.target.value
    update(obj)
  }

  function submit(e) {
    e.preventDefault()
    console.log(model)
  }
    return <Col><Card>
      <Card.Header>
        Please login to your account.
      </Card.Header>
      <Card.Body>
        <form onSubmit={submit}>
          <InputGroup>
          {Object.keys(model).map( (item) => {
            return (
                <Col key={'form_' + item} lg={12} style={{marginBottom: '10px'}}>              
                <FormControl
                type={item === 'password' ? 'password' : 'text'}
                placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                name={item}
                aria-label={item}
                onChange={changeval}
                >
              </FormControl>
              </Col>
            )
          })
          }
          </InputGroup>
          <Button type="submit">Submit</Button>
        </form>
      </Card.Body>
    </Card>
    </Col>;
  }

export default Login