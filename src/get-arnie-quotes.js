const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const arnieQuotePromises = urls.map(async (url) => {
    const response = await httpGet(url);
    const { message } = JSON.parse(response.body);

    const resultObject =
      response.status === 200
        ? {
            "Arnie Quote": message,
          }
        : {
            FAILURE: message,
          };
    return resultObject;
  });

  const results = await Promise.all(arnieQuotePromises);
  return results;
};

module.exports = {
  getArnieQuotes,
};
