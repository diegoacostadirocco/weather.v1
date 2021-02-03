import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

//CONNECT: CONECTA REACT Y REDUX, SE USA EN CADA COMPONENTE QUE QUIERO QUE SE CONECTE CON EL STORE.
//ESPERA COMO PARAMETRO 2 FUNCIONES.
//RETORNA OTRA FUNCION QUE ESPERA UN PARAMETRO QUE ES UN COMPONENTE. ESCRIBO FUNCION CONNECT FINAL ABAJO. 
//1°RA FUNCION: RECIBIMOS EL STATE DE LA APP(UNICO) COMO PARAMETRO Y
// RETORNA UN OBJ CON PROP QUE UTILIZAMOS Y NOS QUEDA DISPONIBLE CON THIS.PROP (mapStateToProps)
//2°DA FUNCION: NOS PERMITE TRABAJAR CON LAS ACCIONES, USAMOS EL DISPATCH Y  RETORNAMOS OBJ CON FUNC, (mapDispatchToProps)
//3°FUNCION: COMPONENTE CREADO.
//CONNECT FINAL ACA SERIA export default connect(null, mapDispatchToProps)(LocationListContainer);

class LocationListContainer extends Component {
    
    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city } = this.props;
       
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }
    render() {
        return (
            <LocationList 
            cities={this.props.citiesWeather} 
            onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city:PropTypes.string.isRequired,
}

//setCity(PROPIEDAD TIPO FUNCION)QUE TIENE UN VALUE(PARAMETRO),
// INVOCO DISPATCH(GRACIAS A QUE USAMOS EL STORE CON EL PROVIDER EN INDEX.JS) 
//Y LLAMO EL ACTIONCREATOR(setCity)
//COINCIDIERON setCity PERO NO SON EL MISMO 
//---EL 1RO ES UNA PROP DEL HANDLESELECTEDLOCATION EL 2DO UN ACTIONCREATOR

// const mapDispatchToProps = dispatch => ({ 
    //     setCity: value => dispatch(setSelectedCity(value)),
    //     setWeather: cities => dispatch(setWeather(cities))
    // });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
        citiesWeather: getWeatherCities(state),
        city: getCity(state)
    });
    
    
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);