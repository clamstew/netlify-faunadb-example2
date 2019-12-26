export const signup = data => {
  return fetch("/.netlify/functions/users-create", {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

export const login = data => {
  return fetch("/.netlify/functions/users-login", {
    body: JSON.stringify(data),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};
