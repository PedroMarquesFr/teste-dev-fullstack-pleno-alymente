import { getUsers } from "@/services/users";
import React, { createContext, useState, useContext, ReactNode } from "react";
import usersMock from "../../data.json";

interface PersonContextType {
  data: User[];
  fetchUsers: () => void;
  isLoading: boolean;
  createUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
}

const PersonContext = createContext<PersonContextType>({
  data: [],
  fetchUsers: () => {},
  isLoading: false,
  createUser: (user: User) => {},
  updateUser: (user: User) => {},
  deleteUser: (userId: string) => {},
});

type ThemeContextProps = {
  children: ReactNode;
};
const PersonProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchUsers = async () => {
    setIsLoading(true);
    const users = await getUsers();
    setData(users);
    setIsLoading(false);
  };
  const getUser = () => {};

  const createUser = (user: User) => {
    console.log("user updated");
    // setData([...data]);
  };
  const updateUser = (user: User) => {
    console.log("user updated");
    // const changedStatusTemporary = data.map((user) => {
    //   if (user.id === patientId) {
    //     return {
    //       ...user,
    //       status: newStatus,
    //     };
    //   }
    //   return user;
    // });
    // setData(changedStatusTemporary);
  };
  const deleteUser = (userId: string) => {
    console.log("user deleted");
  };
  return (
    <PersonContext.Provider
      value={{
        data,
        fetchUsers,
        isLoading,
        createUser,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
export { PersonContext, PersonProvider };
