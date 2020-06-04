import * as axios from "axios";

const apiCovid = axios.create({
  baseURL: "https://api.thevirustracker.com/free-api?" // attention URL an maj !!
});

export default apiCovid;