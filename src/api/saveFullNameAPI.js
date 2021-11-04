import axios from "axios";

const SaveFullNameApi = {
  save: async (data) => {
    axios.post('mock.mock', data)
  }
};

export default SaveFullNameApi;
