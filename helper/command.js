/* eslint-disable prettier/prettier */
export const getCompany =
  'curl -X GET "http://localhost:3000/company" -H "accept: application/json"';

export const postCompany =
  'curl -X POST "http://localhost:3000/company" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\": \"test company\", \"isEnterprise\": true }';

  export const getUser =
  'curl -X GET "http://localhost:3000/user" -H "accept: application/json"';

export const postUser =
  'curl -X POST "http://localhost:3000/user" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"name\": \"test user\", \"companyId\": 2 }"';

export const getUserWithCompany =
  'curl -X GET "http://localhost:3000/user?join=company" -H "accept: application/json"';