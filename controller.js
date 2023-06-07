const getData = async (req, res) => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const data2 = await data.json();

    if (data.status === 200) {
      console.log(data2.map((el) => el.name));
      res.send(data2.map((el) => el.name)).status(200);
    }
  } catch (err) {
    console.error(err);
  }
};

// getData();

module.exports = { getData };
