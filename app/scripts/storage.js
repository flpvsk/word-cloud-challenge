var Promise = require('es6-promise').Promise;

/**
 * Fetch a list of topics.
 * Returns a promise.
 *
 * Example of result:
 *    {
 *      "topics": [
 *        {"id": "1", ...}
 *        {"id": "2", ...}
 *        ...
 *        {"id": "n", ...}
 *      ]
 *    }
 */
exports.getTopics = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'topics.json', true);

    xhr.onload = function(e) {
      if (this.status == 200) {
        resolve(JSON.parse(this.response));
      } else {
        reject(this.status, this.response);
      }
    };

    xhr.send();
  });
};
