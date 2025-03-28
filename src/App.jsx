import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "./components/UserList";

const queryClient = new QueryClient();

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке пользователей");
  }
  return response.json();
};

const App = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <QueryClientProvider client={queryClient}>
      <UserList users={users} />
    </QueryClientProvider>
  );
};

export default App;
