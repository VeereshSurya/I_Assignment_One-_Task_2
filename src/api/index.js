import React from "react";

// URL of the api
const url = "https://jsonplaceholder.typicode.com/photos";

// Making request to the api to fetch images data
export const FetchImage = async () => {
  return await fetch(url).then((res) => {
    return res.json();
  });
};
