import { use } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Loader } from '../Loader/Loader';
import { AppContext } from '../../AppContext';

export const TodoList = () => {
	const { isLoading, todos } = use(AppContext);

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
