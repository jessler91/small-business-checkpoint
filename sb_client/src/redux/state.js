 
export default {
    user:[

         { 
            username: 'test-user-1',
            email: 'test-user@example.com',
            password: '1234',
            loggedIn:false,
         },
         { 
            username: 'ts',
            email: 't@s.com',
            password: 'ts',
            loggedIn:false,
         },
    ],
    listings: [
        {
           "id": 1,
           "businessName": "Flix Brewhouuse",
           "description": 'alamo draft house like establishment, movie and diner',
           "address": "2200 S Interstate 35, Ste B1, Round Rock",
           "hours": '10am - 11pm',
        },
        {
           "id": 2,
           "businessName": "SkinnyBobs",
           "description": 'local poolhall, ',
           "address": "300 Hesters Crossing Rd, Ste A1, Round Rock, TX 78681",
           "hours": '4pm - 12pm',
        },
        {
           "id": 3,
           "businessName": "doc orthopedic care",
           "description": 'urgent care orthopedic',
           "address": "2000 S IH-35, Ste N5, Round Rock, TX 78681",
           "hours": '8am - 5pm',
        },
    ],
    map: []
  };
  