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

  login(username, password) {
    var details = {
        'userName': username,
        'password': password,
        'grant_type': 'password'
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch("http://devprimetableapp.azurewebsites.net/Token", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'appId': 'PTApp',
        'appVersion': '1.0',
        'osVersion': '1.0',
        'deviceId': '01234567889',
        'platform': 'Android',
        'gpsLatitude': '38.736946',
        'gpsLongitude': '-9.142685'
      },
      body: formBody
    }).then(r => r.json());
  }


  getCurrentUser () {
    // If the request is successful, you can return the expected object
    // instead of the whole response.
    return this.GET('/auth').then(response => response.user);
  }
};
