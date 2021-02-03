import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from '../../WeatherLocation/WeatherData/WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data : { temperature, weatherState, humidity, wind } }) => {
  
  return(
    <div className="weatherDataCont" >
        <WeatherTemperature
          temperature={temperature}
          weatherState={weatherState}
        />
        <WeatherExtraInfo
          humidity ={humidity}
          wind ={wind}
        />
    </div>
  );
};

WeatherData.protTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}
export default WeatherData;