import axios from "axios";
import mockData from "./mockData";

const SaveFullNameApi = {
  save: async (data) => {
    axios.post('mock.mock', data)
  },

  fetch: async () => {
    return mockData;
  }
};

export default SaveFullNameApi;
