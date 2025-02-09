import { use } from 'react';
import { TodosContext } from '../../TodosContext';
import { TodoItem } from '../TodoItem/TodoItem';
import { Loader } from '../Loader/Loader';
import { LoadingContext } from '../../LoadingContext';

export const TodoList = () => {
	const { todos } = use(TodosContext);
	const { isLoading } = use(LoadingContext);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				todos?.map(({ id, title }) => <TodoItem id={id} key={id} title={title} />)
			)}
		</>
	);
};
