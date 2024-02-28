import React , {useState} from 'react'
//---import BootStrap Component---//
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// ---Import Badge of Material UI---//
import Badge from '@mui/material/Badge';
//---Import Model----//
import OrderModal from './Modals';
// ---get cart item from store---//
import { useSelector } from 'react-redux';
//import react icons
import { FaShoppingCart } from "react-icons/fa";
import Signup from './Signup';
import {Link} from "react-router-dom"

const Header = () => {
    const items = useSelector((state) => state.cart.cartItems);
    const [modalShow, setModalShow] = useState(false);
  return (
      <>
          <Navbar style={{ background: '#033fff' }} variant="dark" className='fixed-top'>
              <Container>
                  <Nav.Link to='/' className='text-light mx-4 fw-bold fs-3 fst-italic'>Meal Hub</Nav.Link>
                  <Nav className="me-auto">
                      <Nav.Link href="/" className='text-light fw-bolder lnk'>Home</Nav.Link>
                      &nbsp; &nbsp; &nbsp;
                      
                  </Nav>
                  {/* react-bootsrap badge */}
                  <Badge badgeContent={items.length} color="primary">
                  <Link to="/createuser" className='text-light fw-bolder lnk'>Signup</Link>
                  <Link to="/login" >Login</Link>
                  <FaShoppingCart className="fa-solid fa-cart-shopping text-light " style={{ fontSize: 25, cursor: "pointer" }} onClick={() => setModalShow(true)}></FaShoppingCart>
                      <OrderModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                      />
                  </Badge>
              </Container>
          </Navbar>
      </>
  )
}

export default Header
