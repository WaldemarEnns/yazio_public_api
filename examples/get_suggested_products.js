const BASE_URL = "https://yzapi.yazio.com/v15";
const BEARER_TOKEN = "YOUR_ACCESS_TOKEN_HERE";
const DATE = new Date().toISOString().slice(0, 10);
const DAYTIME = "breakfast"; // change to: lunch | dinner | snack

fetch(`${BASE_URL}/user/products/suggested?date=${DATE}&daytime=${DAYTIME}`, {
  headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
})
  .then((r) => r.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
