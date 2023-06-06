var ghpages = require("gh-pages");

ghpages.publish("bundle", function (err) {
  console.error(err);
});
