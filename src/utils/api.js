/* Api methods to call /functions */
import { getAuthToken } from "../modules/user-management/user-service";
// https://stackoverflow.com/questions/43842793/basic-authentication-with-fetch
const getHeaders = () => {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + getAuthToken() + ":");
  return headers;
};

const create = data => {
  return fetch("/.netlify/functions/todos-create", {
    body: JSON.stringify(data),
    headers: getHeaders(),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const readAll = () => {
  return fetch("/.netlify/functions/todos-read-all", { headers: getHeaders() }).then(response => {
    return response.json();
  });
};

const update = (todoId, data) => {
  return fetch(`/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    headers: getHeaders(),
    method: "POST"
  }).then(response => {
    return response.json();
  });
};

const deleteTodo = todoId => {
  return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
    method: "POST",
    headers: getHeaders()
  }).then(response => {
    return response.json();
  });
};

const batchDeleteTodo = todoIds => {
  return fetch(`/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: "POST",
    headers: getHeaders()
  }).then(response => {
    return response.json();
  });
};

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
};
