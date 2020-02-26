import React, { useState } from 'react';
import { Card, InputGroup, FormControl, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function Register() {
	let [ model, update ] = useState({
		email: '',
		password: '',
		firstname: '',
		lastname: '',
		address: '',
		city: '',
		state: '',
		zip: ''
	});
	function changeval(event) {
		let obj = Object.assign({}, model);
		obj[event.target.name] = event.target.value;
		update(obj);
	}

	function submit(e) {
		e.preventDefault();
		console.log(model);
		axios
			.post('/api/user', model)
			.then((response) => {
				//
			})
			.catch((err) => {
				throw err;
			});
	}
	return (
		<Col>
			<Card>
				<Card.Header>Please login to your account.</Card.Header>
				<Card.Body>
					<form onSubmit={submit}>
						<InputGroup>
							{Object.keys(model).map((item) => {
								return (
									<Col key={'form_' + item} lg={12} style={{ marginBottom: '10px' }}>
										<FormControl
											type={item === 'password' ? 'password' : 'text'}
											placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
											name={item}
											aria-label={item}
											onChange={changeval}
										/>
									</Col>
								);
							})}
						</InputGroup>
						<Button variant="dark" type="submit" block>
							Submit
						</Button>
					</form>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Register;
