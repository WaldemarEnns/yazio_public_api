const BASE_URL = "https://yzapi.yazio.com/v15";
const BEARER_TOKEN = "YOUR_ACCESS_TOKEN_HERE";
const DATE = new Date().toISOString().slice(0, 10);

fetch(`${BASE_URL}/user/bodyvalues/weight/last?date=${DATE}`, {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
})
  .then((r) => r.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
