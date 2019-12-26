https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/.netlify/functions", {
      target: "http://localhost:9000",
      pathRewrite: {
        "^/\\.netlify/functions": ""
      }
    })
  );
};
/*

Old way from readme:

  "proxy": {
    "/.netlify/functions": {
      "target": "http://localhost:9000",
      "pathRewrite": {
        "^/\\.netlify/functions": ""
      }
    }
  },*/
