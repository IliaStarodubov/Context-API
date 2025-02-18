import './app.module.css';
import { TodoList } from './components/TodoList/TodoList';
import { SearchTodo } from './components/SearchTodo/SearchTodo';
import { AppContextProvider } from './AppContextProvider';
import { AddNewTodo } from './components/AddNewTodo/AddTodo';

export const App = () => {
	return (
		<AppContextProvider>
			<SearchTodo />
			<TodoList />
			<AddNewTodo />
		</AppContextProvider>
	);
};
