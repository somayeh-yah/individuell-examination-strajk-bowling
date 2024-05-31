import { http, HttpResponse } from "msw";

const ERROR_RESULT = { Response: "False", Error: "Unsuccesfull" };

//mock-data
const bookingData = [{
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
}]
export const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    ({ request }) => {
      JSON.parse(request.body);
      const apiKey = request.headers.get(
        "738c6b9d-24cf-47c3-b688-f4f4c5747662"  
      );
      if (
        apiKey === "738c6b9d-24cf-47c3-b688-f4f4c5747662"  //här gör vi en check om api-nyckeln är lika med den vi angivit
      ) {
        return HttpResponse.json({  //om api-nyckeln är korrekt så ska koden under köras
          success: true,
          message: "Your booking added successfully",
          
        });
        
      }

      return HttpResponse.json({ success: false, message: ERROR_RESULT });// om api-nyckeln är fel så ska en error meddelande visas
    }
  ),
  http.get('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
      return HttpResponse.json(bookingData);
      
      
    }),
    
];
