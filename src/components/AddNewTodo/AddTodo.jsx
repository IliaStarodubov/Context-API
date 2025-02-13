import { use, useState } from 'react';
import styles from './AddNewTodo.module.css';
import { LoadingContext } from '../../LoadingContext';
import { RefreshContext } from '../../RefreshContext';

export const AddNewTodo = () => {
	const [newTodo, setNewTodo] = useState('');
	const { setIsLoading } = use(LoadingContext);
	const { refetch } = use(RefreshContext);

	const onSubmit = (event) => {
		event.preventDefault();

		setIsLoading(true);

		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTodo,
			}),
		})
			.then(() => refetch())
			.finally(() => {
				setIsLoading(false);
				setNewTodo('');
			});

		event.target.reset();
	};

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<label>Add a new todo...</label>
			<input
				className={styles.labelInput}
				type="text"
				name="add"
				onChange={({ target }) => setNewTodo(target.value)}
			/>
			<button type="submit" className={styles.buttonAdd}>
				Add
			</button>
		</form>
	);
};
