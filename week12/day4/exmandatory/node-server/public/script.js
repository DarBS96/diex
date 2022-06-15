const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/");
    console.log(res);
    const data = await res.json();
    // console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

getData();
