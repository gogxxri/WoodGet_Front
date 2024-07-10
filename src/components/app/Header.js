import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태로 가정
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // 로그인 상태
    const handleLogout =() => {
        setIsLoggedIn(false);
    }
    
    // Navbar 토글
    const handleNavToggle=() => {
        setIsNavExpanded(!isNavExpanded);
    }

    return (
        <div className="header-container">
            <Navbar bg="dark" expand="lg" style={{backgroundColor:'white'}} expanded={isNavExpanded}>
                <Container fluid className="header-box">
                    <Navbar.Brand href="/main" className="header-logo">
                        <img
                            src={process.env.PUBLIC_URL + '/logo192.png'}
                            height="70"
                            className='header-logo'
                            alt="Navbar Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" onClick={handleNavToggle}/>
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/store">Store</Nav.Link>
                            
                            { isLoggedIn ? (
                                <>
                                <Nav.Link href="/mypage">MyPage</Nav.Link>
                                <Nav.Link href="/cart">Cart</Nav.Link>
                                <Nav.Link href="/main" onClick={handleLogout}>Log-Out</Nav.Link>
                                </>
                            ):(
                                <Nav.Link href="/login">Log-In</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;