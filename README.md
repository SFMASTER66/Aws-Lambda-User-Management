# Aws-Lambda-User-Management
**Version 1.0.0**
<br />
A RESTful backend API with NodeJS for user management

# Getting Started
The RESTful backend API has been deployed to AWS Lambda.
<br />
The main URL is
<br />https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production
<br />
The URL of user Management is
<br />https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users

# Prerequisites
Install the Postman https://www.postman.com/downloads/

# How to test it
The format of the data is:
```
{
    "name":"testing",
    "email":"testing@gmail.com",
    "age": 34,
    "dateOfBirth": "2020.01.01"
}
```

Get all users: (No value in the body when testing in AWS as **CloudFront doesn't allow GET with body**)
```
https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users
```
Get a user: (No value in the body when testing in AWS as **CloudFront doesn't allow GET with body**)
```
https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users/{userId}
```
Post: (Add all fields in JSON)
```
https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users
```
Delete a user:
```
https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users/{userId}
```

Update a user: (Add one or more fields in JSON)
```
https://zks14wqiff.execute-api.ap-southeast-2.amazonaws.com/production/users/{userId}
```

# How to run in local
1: Clone the project
<br />
2: Open the project and go to app.js
<br />
3: comment out the 'module.exports = app'
<br />
4: uncomment out the 'app.listen(3000)'
<br />
5: npm start

# License & Copywrite
© Mingyue Wei