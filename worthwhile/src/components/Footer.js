import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    CFooter,
    CLink,
} from '@coreui/react';
const Footer = () => {
    return (

        <CFooter>
            <div>
                <CLink href="#">WorthWhile </CLink>
                <span>&copy; 2023 Hackathon.</span>
            </div>
            <div>
                <span>Powered by </span>
                <CLink href="#">Bank of APIs</CLink>
            </div>
        </CFooter>
    );
}

export default Footer
