import axios from 'axios';
import config from '../../config';

import { HOME, FAQ } from './ActionTypes';

/**
 * When Home is loaded - request data
 */
export const onHomeLoad = () => ((dispatch) => {
    dispatch(getHeroModel());
});

/**
 * Get home page hero model
 */
export const getHeroModel = () => ((dispatch) => {
        const { apiBaseUrl, endpoints: { homepage } } = config;

        axios.get(`${apiBaseUrl}${homepage}/`)
        .then((res) => {                  
            console.log('SUCCESS fetching HERO MODEL: ', res.data)
            dispatch(setHeroModel(res.data));            
        })
        .catch(() => {
            console.error('ERROR while fetching Hero data!')
        });
});


/**
 * Set hero model
 */
export const setHeroModel = ({heading, subheading, heroImageUrl}) => ({
    type: HOME.SET_HERO_MODEL,
        payload: {
            heading,
            subheading,
            heroImageUrl
        }
});




/**
 * When FAQs is loaded - request data
 */
export const onFAQLoad = () => ((dispatch) => {
    dispatch(getFAQModel());
});

/**
 * Get FAQ page model
 */
export const getFAQModel = () => ((dispatch) => {
    const { apiBaseUrl, endpoints: { faqs } } = config;

    axios.get(`${apiBaseUrl}${faqs}/`)
    .then((res) => {                  
        console.log('SUCCESS fetching FAQ MODEL: ', res.data)
        dispatch(setFAQModel(res.data));            
    })
    .catch(() => {
      console.error('ERROR while fetching FAQ data!')
    });
});


/**
* Set FAQ model
*/
export const setFAQModel = (articles) => ({
    type: FAQ.SET_MODEL,
    payload: {
        articles
    }
});


/**
* Set FAQ active article
*/
export const setFAQActiveArticle = (index) => ({
    type: FAQ.SET_ACTIVE_ARTICLE,
    payload: {
        index
    }
});