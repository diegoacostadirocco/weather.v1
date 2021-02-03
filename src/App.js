import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './assets/css/App.css';

const cities = [
  'Buenos Aires, AR',
  'Washington D.C., US',
  'Bogota, CO',
  'Ciudad de Mexico, MX',
  'Barcelona, ES',
  'Tokyo, JPN',
  'Lima, PE',
];

//    DECISION DE ARQUITECTURA DEFINIR CUANTOS CONTAINERS USAR, TRATAR DE HACER LOS MINIMOS.

// SMART COMPONENTS (CONTAINERS): TIENEN ACCESO AL ESTADO DE LA APP(CONNECT). NO TIENE PRESENTACION VISUAL
// IDEAL QUE LOS CONTAINERS SEAN DE ALTO NIVEL NO SE METAN ADENTRO DE LAS CAPAS.
// DUMB COMPONENTS (PRESENTATIONAL): SOLO TIENEN LOGICA DE PRESENTACION
class App extends Component {
  
  render(){

    return(
      <Grid>
        <Row>
          <AppBar position="sticky" className="appBar">
            <Toolbar>
                Weather App
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={cities}  />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer  />  
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default App;

