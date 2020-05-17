// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import 'tachyons';
// import CardList from './CardList';
// import { robots } from './robots'
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//     <CardList robots={robots} />
//     , document.getElementById('root'));



// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import axios from 'axios'; 

import React,{Component} from 'react'; 

import { useState } from 'react';

import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

import { Navbar } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';

import { Form } from 'react-bootstrap';

import { FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import { Image } from 'react-bootstrap'

import { Row } from 'react-bootstrap'

import { Modal } from 'react-bootstrap'

import { Col } from 'react-bootstrap'

import { Card } from 'react-bootstrap'



function Areca() {
		const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return(
			<div>
			<Nav.Link href="#features" onClick={handleShow}>About Areca</Nav.Link>
			<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
			<Modal.Title>About ARECA</Modal.Title>
			</Modal.Header>
			<Modal.Body>Areca Nut is the seed of the areca palm, which grows in much of the tropical specific,South East and South Asia.
			The areca nut is not a true nut, but rather the seed of a fruit categorized as a berry. It is commercially available in dried, cured, and fresh forms. When the husk of the fresh fruit is green, the nut inside is soft enough to be cut with a typical knife. In the ripe fruit, the husk becomes yellow or orange, and as it dries, the fruit inside hardens to a wood-like consistency. At that stage, the areca nut can only be sliced using a special scissors-like cutter.
			In 2017, world production of areca nut was 1.3 million tonnes, with India providing 54% of the total. As other leading producers, Myanmar, Indonesia, Bangladesh and Taiwan combined contributed 38% of the world total (table).
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>DONE</Button>
			</Modal.Footer>
			</Modal>
			</div>
		);
}

function AboutUs() {
	const [show, setShow] = useState(false);

		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);

		return(
			<div>
			<Nav.Link href="#pricing" onClick={handleShow}>About us</Nav.Link>
			<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
			<Modal.Title>About ARECA</Modal.Title>
			</Modal.Header>
			<Modal.Body><h6>Developed by</h6><br />Elson DSA<br />HS Sunag Hemmanna<br />Ganesh Naidu N<br />Sourav Pai K
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>DONE</Button>
			</Modal.Footer>
			</Modal>
			</div>
		);
}

class App extends Component { 


	constructor(){
		super();
	this.state = { 

	// Initially, no file is selected 
	selectedFile: null,
	urlFile: null,
	category: null
	}; 
	this.onFileChange = this.onFileChange.bind(this);
	this.getCategory = this.getCategory.bind(this);
}


	getCategory() {
		
		let file = this.state.selectedFile;
		let formdata = new FormData();

		formdata.append('image',file);
		formdata.append('name','somefile');
		this.setState({ category: "Loading......."})
		axios.post("http://localhost:3001/api/category",formdata)
		.then((response) => {
			this.setState({category: response.data.cat})
		})
		.catch((error)=>{
			console.log(error);
		})
	}

	
	// On file select (from the pop up) 
	onFileChange(event) { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0], urlFile: URL.createObjectURL(event.target.files[0]) }); 
	
	}; 
	
	
	
	// File content to be displayed after 
	// file upload is complete 
	fileData = () => { 
	
	if (this.state.selectedFile) { 
		
		return ( 
		<div> 
			<p>IMAGE:</p>
			<Image src={this.state.urlFile} height="200" width="200"></Image>
			
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Choose before Pressing the Upload button</h4> 
		</div> 
		); 
	} 
	}; 

	categoryData = () => { 
	
		if (this.state.category==0) { 
			return ( 
		<div>
		<Row> 
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Areca belongs to</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CATEGORY 1</Card.Subtitle>
    <Card.Text>
      This is a good quality Areca, that has good price in the market. Its outer layer is clean and polished. 
    </Card.Text>
  </Card.Body>
</Card>
		</Row> 
		</div>
		);
		}
		if (this.state.category==1) { 
			return ( 
		<div>
		<Row> 
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Areca belongs to</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CATEGORY 2</Card.Subtitle>
    <Card.Text>
	This is a medium quality Areca, that has average price in the market. Its outer layer is hairy and cracks are visible. 
    </Card.Text>
  </Card.Body>
</Card>
		</Row> 
		</div>
		);
		} 
		if (this.state.category==2) { 
			return ( 
		<div>
		<Row> 
		<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Areca belongs to</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">CATEGORY 3</Card.Subtitle>
    <Card.Text>
      The quality of this areca is degraded and it has least price. 
    </Card.Text>
  </Card.Body>
</Card>
		</Row> 
		</div>
		);
		}  
		} 
	
	
	render() { 
	
	return ( 
		<div> 
			  <Navbar bg="primary" variant="dark" >
    <Navbar.Brand href="#home">ARECA CLASSIFICATION</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Areca />
	  <AboutUs />
      
    </Nav>
  </Navbar>
  <br/>
  <br/>
  <Container fluid="md">
		<Row>
			<Col>
			<h3> 
			Upload a areca picture! 
			</h3> 
			<br/>
			<div> 
				<input type="file" onChange={this.onFileChange} /> <br/>
				<Button variant="primary" onClick={this.getCategory} >PREDICT</Button>{' '}
			</div>
			</Col> 
			<Col>
		{this.fileData()} 
		</Col>
		</Row>
		<Row>
		{this.categoryData()}
		
		</Row>
		
		
		</Container>
		</div> 
	); 
	} 
} 

ReactDOM.render(<App />, document.getElementById('root'))

