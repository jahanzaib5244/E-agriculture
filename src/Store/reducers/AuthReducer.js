import {
  ALLCROPS,
  ALLPRICE,
  ALLPRODUCTS,
  LOGIN,
  LOGOUT,
  USERDATA,
  WEATHER,
} from '../States';

const initialState = {
  userData: {},
  role: '',
  weather: {},
  AllProducts: [],
  AllPrices: [],
  AllCrops: [],
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case USERDATA: {
      return {
        ...state,
        userData: action.payload.data,
        role: action.payload.role,
      };
    }

    case WEATHER: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        usertoken: {},
      };
    }
    case ALLPRICE: {
      return {
        ...state,
        AllPrices: action.payload,
      };
    }
    case ALLPRODUCTS: {
      return {
        ...state,
        AllProducts: action.payload,
      };
    }
    case ALLCROPS: {
      return {
        ...state,
        AllCrops: action.payload,
      };
    }

    default:
      return state;
  }
}
