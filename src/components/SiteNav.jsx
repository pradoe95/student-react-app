import React, {useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import FormModal from './FormModal';

const SiteNav = (props) => {
  // State contains values for search bar to pass back up to App
  const [searchValue, setSearchValue] = useState('');

  // State changes logged to pass back up to app when search button is clicked
  const handleSearch = (evt) => {
    evt.preventDefault();
    props.search(searchValue, true);
  }

  console.log(searchValue);

  return (
    <Navbar bg="dark" variant="dark" sticky='top'>
      <Navbar.Brand href="#home">School for Pets</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Pets by Type</Nav.Link>
        <Nav.Link href="#">Pets By Locatin</Nav.Link>
      </Nav>
      <FormModal type ='create'/>
      <Form inline onSubmit={handleSearch}>
        <FormControl  type="text" placeholder="Search our Student Pets" className="mr-sm-2" onChange={e=>setSearchValue(e.target.value)} />
        <Button variant="outline-info" type='submit'>Search</Button>
      </Form>
    </Navbar>
  );
}

export default SiteNav;


