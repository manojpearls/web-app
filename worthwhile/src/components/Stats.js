import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CRow,
    CCol, CWidgetStatsB, CCard, CCardBody
} from '@coreui/react';

const stylecard = {
    'margin': 20,
  };

const Stats = () => {
    return (
        <div style={stylecard}> 
            <CCard>
                <CCardBody>
                    <div className="hero-title text-center mb-2">
                        <h1 className="display-6">Your Foot Prints</h1>
                    </div>
                    <CRow>

                        <CCol xs={4}>
                            <CWidgetStatsB
                                className="mb-3"
                                color="primary"
                                inverse
                                progress={{ value: 75 }}
                                text="Above Average"
                                title="Last Month"
                                value="4023.4 CO2kg"
                            />
                        </CCol>
                        <CCol xs={4}>
                            <CWidgetStatsB
                                className="mb-3"
                                progress={{ color: 'success', value: 15 }}
                                text="You are doing good"
                                title="This Month"
                                value="1003.2 CO2kg"
                            />
                        </CCol>
                        <CCol xs={4}>
                            <CWidgetStatsB
                                className="mb-3"
                                color="info"
                                inverse
                                progress={{ value: 50 }}
                                text="Rewards for your contribution"
                                title="Points"
                                value="5605"
                            />
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </div>

    );
};

export default Stats;
