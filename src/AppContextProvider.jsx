import { LoadingContext } from './LoadingContext';
import { RefreshContext } from './RefreshContext';
import { TodosContext } from './TodosContext';

export const AppContextProvider = ({
	todos,
	setTodods,
	children,
	isLoading,
	setIsLoading,
	isRefreshTodos,
	setIsRefreshTodo,
}) => (
	<TodosContext value={{ todos, setTodods }}>
		<RefreshContext value={{ isRefreshTodos, setIsRefreshTodo }}>
			<LoadingContext value={{ isLoading, setIsLoading }}>
				{children}
			</LoadingContext>
		</RefreshContext>
	</TodosContext>
);
