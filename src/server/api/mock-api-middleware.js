
const casual = require("casual");
const mockApiMiddleware = require("connect-mock-api").middleware
const fs = require('fs');

// api/images
// api/images/[1..6]

module.exports = mockApiMiddleware({
  baseUrl: '', //optional
  endpoints: [
      {
          path: '/api/images/',
          template: function() {
              var arr = [];
              for (var i = 1; i <= 6 ; i++) {
                arr.push({
                  id: i,
                  title: casual.title,
                  path: "images/" + i + ".jpg",
                  description: casual.description
                })
              }
              return arr;
          }
      },
      {
          path: '/api/images/:id',
          template: function(params) {
              return {
                id: params.$routeMatch.id,
                title: casual.title,
                path: "images/" + params.$routeMatch.id + ".jpg",
                description: casual.description
              };
          }
      },
      {
          path: '/api/layout',
          template: function() {
              var layout = fs.readFileSync('./server/api/mock-result.json');
              return JSON.parse(layout);
          }        
      }
    ]
})