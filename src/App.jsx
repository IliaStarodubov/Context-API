import { useEffect, useState } from 'react';
import './app.module.css';
import { TodoList } from './components/TodoList/TodoList';
import { SearchTodo } from './components/SearchTodo/SearchTodo';
import { AppContextProvider } from './AppContextProvider';
import { AddNewTodo } from './components/AddNewTodo/AddTodo';

export const App = () => {
	const [todos, setTodods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const refetch = () => {
		fetch('http://localhost:3000/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodods(loadedTodos))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		refetch();
	}, []);

	return (
		<AppContextProvider
			todos={todos}
			setIsLoading={setIsLoading}
			setTodods={setTodods}
			isLoading={isLoading}
			refetch={refetch}
		>
			<SearchTodo />
			<TodoList />
			<AddNewTodo />
		</AppContextProvider>
	);
};
