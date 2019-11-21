# Back-End
--- 

### Back End Engineer: Ian Schwartz (Github: ian-schwartz) & Darren Carrillo (Github: darrenjcarrillo)

---

Base URL: 
--
https://bw-wanderlust.herokuapp.com

---

# REGISTRATION & LOGIN

## User Registration (POST)
https://bw-wanderlust.herokuapp.com/api/auth/guides/register

Client sends: 

{
	  "email": "register@gmail.com",
    "username": "register",
    "password": "register"
}


Server returns: 

{
  "id": 9
}

## User Login (POST)

https://bw-wanderlust.herokuapp.com/api/auth/guides/login

Client sends: 

{
	  "email": "register@gmail.com",
    "username": "register",
    "password": "register"
}

Server returns:

{
  "subject": "Hello register, here's a token."
  
}

--- 

# Trips Info (User side)

https://bw-wanderlust.herokuapp.com/api/trips

### Display All Trips (GET)

Server returns:

[
  {
    "id": 2,
    "tourname": "rainforest excursion"
  },
  {
    "id": 3,
    "tourname": "rainforest excursion"
  },
  {
    "id": 1,
    "tourname": "Anotther nice trip"
  }
]

### Display Single Trip (GET)

https://bw-wanderlust.herokuapp.com/api/trips/1

Server returns:

{
  "id": 1,
  "tourname": "Anotther nice trip",
  "description": "In the MOuntains",
  "price": "40 per hour",
  "duration": "4 hours",
  "location": "Beach",
  "language": "English"
}

### ADD TRIPS FROM GUIDE ACCOUNT (POST) (USER ACCESS ONLY)

https://bw-wanderlust.herokuapp.com/api/trips

Client Sends: 

{
  "tourname": "AASDA",
  "description": "AASDASDS",
  "price": "AASDAS",
  "duration": "THIS",
  "location": "THIS",
  "language": "THIS"
}

***Note: User has to be logged in

Server returns: 

{
  "id": 27
}

### EDIT TRIPS INFO FROM GUIDE ACCOUNT (PUT) (USER ACCESS ONLY)

https://bw-wanderlust.herokuapp.com/api/trips/1

Client Sends: 

{
  "tourname": "AASDA",
  "description": "AASDASDS",
  "price": "AASDAS",
  "duration": "THIS",
  "location": "THIS",
  "language": "THIS"
}

Server returns: 

{
  "id": 27
}

### DELETE TRIPS INFO FROM GUIDE ACCOUNT (DELETE) (USER ACCESS ONLY)

https://bw-wanderlust.herokuapp.com/api/trips/1

Server returns:

{
  "message": "1 has been deleted"
}



