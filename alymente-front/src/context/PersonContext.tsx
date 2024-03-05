"use client"
import { getUsers } from "@/services/users";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { saveUsers } from "@/services/cookies";

interface PersonContextType {
  data: User[];
  fetchUsers: () => void;
  isLoading: boolean;
  createUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (userEmail: string) => void;
  populateUsers: (users: User[]) => void;
}

const PersonContext = createContext<PersonContextType>({
  data: [],
  fetchUsers: () => {},
  isLoading: false,
  createUser: (user: User) => {},
  updateUser: (user: User) => {},
  deleteUser: (userEmail: string) => {},
  populateUsers: (users: User[]) => {}
});

type ThemeContextProps = {
  children: ReactNode;
};
const PersonProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    saveUsers(data);
  }, [data]);

  const fetchUsers = async () => {
    setIsLoading(true);
    const users = await getUsers();
    saveUsers(users);
    setData(users);
    setIsLoading(false);
  };
  const populateUsers = (users:User[]) => {
    setData(users);
  };

  const createUser = (user: User) => {
    setData([...data, user]);
  };
  const updateUser = (newUser: User) => {
    const newData = data.map((user) => {
      if (user.email === newUser.email) {
        return {
          ...newUser,
        };
      }
      return user;
    });
    setData(newData);
  };
  const deleteUser = (userEmail: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == userEmail) {
        const newData = [...data];
        newData.splice(i, 1);
        setData(newData);
        break;
      }
    }
  };
  return (
    <PersonContext.Provider
      value={{
        data,
        fetchUsers,
        isLoading,
        createUser,
        updateUser,
        deleteUser,
        populateUsers
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
export { PersonContext, PersonProvider };
