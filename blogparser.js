const fs = require('fs');
const xml2js = require('xml2js');

function parseBlog(callback) {
  const parser = new xml2js.Parser();
  fs.readFile(__dirname + '/blog.xml', (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    parser.parseString(data, (err, result) => {
      if (err) {
        console.error(err);
        return callback(err);
      }
      const posts = result.blog.post;
      callback(null, posts);
    });
  });
}

module.exports = {
  parseBlog,
};
