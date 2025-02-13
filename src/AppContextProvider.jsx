import { LoadingContext } from './LoadingContext';
import { RefreshContext } from './RefreshContext';
import { TodosContext } from './TodosContext';

export const AppContextProvider = ({
	todos,
	setTodods,
	children,
	isLoading,
	setIsLoading,
	refetch,
}) => (
	<TodosContext value={{ todos, setTodods }}>
		<RefreshContext value={{ refetch }}>
			<LoadingContext value={{ isLoading, setIsLoading }}>
				{children}
			</LoadingContext>
		</RefreshContext>
	</TodosContext>
);
