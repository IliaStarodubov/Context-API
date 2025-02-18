import { use } from 'react';
import styles from './SearchTodo.module.css';
import { AppContext } from '../../AppContext';

const debounce = (func, delay) => {
	let timeoutId;

	return function executedFunction(...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
};

export const SearchTodo = () => {
	const { setTodos } = use(AppContext);

	const onSearchTodoChange = ({ target }) => {
		fetch(`http://localhost:3000/todos?q=${target.value}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos));
	};

	const onSortTodosChange = () => {
		fetch(`http://localhost:3000/todos?_sort=title&_order=asc`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos));
	};

	return (
		<>
			<h1 className={styles.app}>Todo List</h1>
			<form className={styles.form}>
				<input
					onChange={debounce(onSearchTodoChange, 300)}
					className={styles.search}
					type="search"
					placeholder="search todos"
					name="search"
				/>
			</form>
			<button className={styles.buttonSort}>
				<img
					onClick={onSortTodosChange}
					className={styles.imgButtonSort}
					src="/src/assets/sort-alpha-down.svg"
					alt="sort"
				/>
			</button>
		</>
	);
};
