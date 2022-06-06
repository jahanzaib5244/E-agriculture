import axios from 'axios';
import {WEATHER} from '../States';

export const getweatherData = (lat, lon) => async dispatch => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2a50c4942b570058222a77bcd50a326f&units=metric`,
    );
    console.log(res.data);
    dispatch({
      type: WEATHER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
