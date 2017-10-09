function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<html><head><title>Hello - welcome to markojs</title></head><body><h1>Hello " +
      escapeXml(data.name) +
      "</h1></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
