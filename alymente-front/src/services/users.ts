import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import userData from "../../data.json";
const mock = new MockAdapter(axios);

// Simula resposta
mock.onGet("/api/user").reply(200, {
  data: userData,
});

const getUsers = async (): Promise<User[]> => {
  const response = await axios.get("/api/user");

  return response.data?.data;
};

const addUser = async (user: User): Promise<User[]> => {
  const response = await axios.get("/api/user");

  return response.data?.data;
};

export { getUsers, addUser };
