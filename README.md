# Cruzhacks Backend Engineering Challenge

Neha Ashwin
August 2024

Description: This is a REST API that supports GET, POST, PATCH, and DELETE
functions for applicants in a database. It is written in Javascript using
node.js along with express and mongoose libraries.

Files:
app.js - Contains the REST API code that supports the functions
package.json, package-lock.json - Contains version information and dependencies

Instructions:
To run the api via localhost, type 'npm start' into a terminal.
A message will appear telling which port the program is listening on,
default port is 3000. 

Once the program is listening, use the urls for the different requests: 

http://localhost:3000/api/user/ for GET requests

http://localhost:3000/api/user/apply for POST request

http://localhost:3000/api/user/update/ for PATCH request

http://localhost:3000/api/user/delete/ for DELETE request

For GET and DELETE requests add either the id or the email of the applicant after the
last '/'. For PATCH requests the same applies, but only the id can be used.

To enter data into the database use the following schema entered into the body:

{

    "name": string [1-60 chars]
    "gender": ['He/Him', 'She/Her', 'Other']
    "otherGender": string [1-30 chars] (Only fill if Gender choice is other)
    "email: string [1-320 chars] (unique: required)
    "age": number [1-200 value]
    "applicationType": [Hacker, Judge]

    //FIELDS FOR HACKERS ONLY
    "ucscStudent": ['Yes', 'No']
    "otherSchool": string [1-50 chars] (Only fill if answer to previous question was No)

    //FIELDS FOR JUDGES ONLY
    "currentComp": string [1-50 chars]
}

Example schema:

{

    "name": "Hema",
    "gender": "She/Her",
    "email": "hema@test.com",
    "age": 20,
    "applicationType": "Hacker",
    "ucscStudent": "Yes",
}
