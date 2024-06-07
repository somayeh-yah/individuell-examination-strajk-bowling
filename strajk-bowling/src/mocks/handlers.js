import { http, HttpResponse } from "msw";



//mock-data
const bookingData = {
  "when":"2024-05-27T12:00",
  "lanes":"1",
  "people":"2",
  "shoes":[
     "45",
     "41"
  ],
  "price":340,
  "id":"STR7032TPJH",
  "active":true
}

export const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    ({ request }) => {
        return HttpResponse.json(bookingData);      
    }
  ),
  http.get('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
      return HttpResponse.json(bookingData);
      
      
    }),
    
];
