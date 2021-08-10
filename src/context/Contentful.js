import * as contentful from "contentful";
console.log(process.env.REACT_TECH_STORE_SPACE);
export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
