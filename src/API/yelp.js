import axios from 'axios';

export default axios.create({
  baseURL:
    'https://api.yelp.com/v3',
  headers: {
    'user-key':
      'sC4J-NWeL9EQgXM_6uHjTKcD3cYf61f2KkGs7q5OFS5rcOdpGk0nCHksvn4CV3Vj17Ec4xZcOlXSsVDUVpW6u-asOgsFVtVf-6BxeXtTffCJ7NcU-3nle6YEJigRXXYx',
  },
});
