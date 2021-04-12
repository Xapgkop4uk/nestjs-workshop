export const getCompany =
  'curl -X GET "http://localhost:3000/company" -H "accept: application/json"';

export const postCompany =
  'curl -X POST "http://localhost:3000/company" -H "accept: application/json" -H "Content-Type: application/json" -d "{"name": "test company", "isEnterprise": true }';
