import { HOME } from '../actions/ActionTypes';

const initialState = {
    heading: "",
    subheading: "",
    heroImageUrl: ""
};

const hero = (state = initialState, action) => {
    switch (action.type) {
    case HOME.SET_HERO_MODEL: {
        return {
            ...action.payload
        };
    }    
    default:
        return state;
    }
};

export default hero;