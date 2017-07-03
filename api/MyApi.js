import RestClient from 'react-native-rest-client';

export default class MyApi extends RestClient {
  constructor () {
    // Initialize with your base URL
    super('http://devprimetableapp.azurewebsites.net', {
      headers: {
        // Include as many custom headers as you need
        // Authorization: `JWT ${authToken}`
        // Content-Type: application/json
        // and
        // Accept: application/json
        // are added by default
      },
      // Simulate a slow connection on development by adding
      // a 2 second delay before each request.
      simulatedDelay: 2000
    });
  }
  // Now you can write your own methods easily
  login(username, password) {
    // Returns a Promise with the response.
    return this.POST('/Token', { username, password });
  }
  getCurrentUser () {
    // If the request is successful, you can return the expected object
    // instead of the whole response.
    return this.GET('/auth').then(response => response.user);
  }
};
