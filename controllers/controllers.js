exports.sayHello = (req, res) => {
  console.log("you've hit the endpoint /api/hello");
  res.json({ greeting: 'hello API' });
};

exports.showBaseTime = (req, res) => {
  let date = new Date();
  console.log("you've hit the endpoint /api/timestamp");
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
};

exports.showUserTime = (req, res) => {
  let inputDate = req.params.date_string;
  //api response placeholder
  let apiResponse;
  ///checks if inputDate is not empty
  if (!isNaN(inputDate)) {
    //checks for unix timestamp (input will be in string format)
    //converts unix timestamp from string to int and extract human
    //readable date from it
    apiResponse = new Date(parseInt(inputDate));
  } else {
    //convert date string into human readable date format
    apiResponse = new Date(inputDate);
  }
  //invalid date response
  if (apiResponse.toString() === 'Invalid Date') {
    console.log('There was an error');
    res.json({ error: 'Invalid Date' });
  } else {
    console.log(
      'you have successfully hit the endpoint - /api/timestamp/:date_string'
    );
    res.json({
      unix: apiResponse.getTime(),
      utc: apiResponse.toUTCString(),
    });
  }
};
