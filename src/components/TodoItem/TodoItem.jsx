import { use, useState } from 'react';
import styles from './todoitem.module.css';

import { RefreshContext } from '../../RefreshContext';
import { LoadingContext } from '../../LoadingContext';

export const TodoItem = ({ title, id }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [newValue, setNewValue] = useState(title);
	const { setIsLoading } = use(LoadingContext);
	const { setIsRefreshTodo, isRefreshTodos } = use(RefreshContext);

	const src = isEdit ? '/src/assets/check-circle.svg' : '/src/assets/pencil-square.svg';

	const editMode = (
		<div>
			<input
				onChange={({ target }) => setNewValue(target.value)}
				type="text"
				name="edit"
				className={styles.labelInput}
				value={newValue}
			/>
		</div>
	);

	const readMode = <span>{title}</span>;

	const requestEditTodo = (id, title) => {
		setIsLoading(true);

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
			}),
		})
			.then(() => setIsRefreshTodo(!isRefreshTodos))
			.finally(() => setIsLoading(false));
	};

	const onConfirmEditClick = () => {
		if (isEdit) {
			requestEditTodo(id, newValue);
		}

		setNewValue('');
		setIsEdit(!isEdit);
	};

	const requestDeleteTodo = (id) => {
		setIsLoading(true);

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => setIsRefreshTodo(!isRefreshTodos))
			.finally(() => setIsLoading(false));
	};

	return (
		<div key={id} className={styles.element}>
			{isEdit ? editMode : readMode}
			<div className={styles.buttons}>
				<button onClick={onConfirmEditClick}>
					<img className={styles.imgButton} src={src} alt="edit" />
				</button>
				<button onClick={() => requestDeleteTodo(id)}>
					<img
						className={styles.imgButton}
						src="/src/assets/trash.svg"
						alt="delete"
					/>
				</button>
			</div>
		</div>
	);
};
