import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    CNavbar,
    CNavbarBrand,
    CContainer,
    CCollapse,
    CNavItem,
    CNavLink, CNavbarToggler, CNavbarNav
} from '@coreui/react';
import logo_icon from '../assets/logo_worthwhile.png'
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [visible, setVisible] = useState(false)
    return (
        <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
            <CContainer fluid>
                <CNavbarBrand href="#">
                    <img
                        src={logo_icon}
                        alt=""
                        width="22"
                        height="24"
                        className="d-inline-block align-top"
                    /> WorthWhile
                </CNavbarBrand>
                <CNavbarToggler
                    aria-label="Toggle navigation"
                    aria-expanded={visible}
                    onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse" visible={visible}>
                    <CNavbarNav>
                        <CNavItem>
                            <CNavLink href="/" active>
                                Dashboard
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="/goals">
                                Goals
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="transactions">
                                Transactions
                            </CNavLink>
                        </CNavItem>
                    </CNavbarNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    );
};

export default TopNav