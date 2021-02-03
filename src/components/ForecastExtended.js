import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem  
           key={`${forecast.weekDay}${forecast.hour}`}
           weekDay={forecast.weekDay}
           hour={forecast.hour}
           data={forecast.data} 
       />));
};
const renderProgress = () => {
   return <CircularProgress />;
};

const ForecastExtended = ({ city, forecastData }) => (
       <div>
          <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
          {forecastData ? 
            renderForecastItemDays(forecastData) :
            renderProgress()}
       </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;