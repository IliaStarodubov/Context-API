import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

export const AppContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const refetch = () => {
		fetch('http://localhost:3000/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		refetch();
	}, []);

	return (
		<AppContext value={{ todos, setTodos, isLoading, setIsLoading, refetch }}>
			{children}
		</AppContext>
	);
};
