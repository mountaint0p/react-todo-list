import { React, useEffect } from "react";
import {
	VStack,
	HStack,
	Text,
	IconButton,
	StackDivider,
	Spacer,
	Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, setTodos }) {
	const getTodos = async () => {
		try {
			const response = await fetch("http://localhost:5000/todos");
			const jsonData = await response.json();
			setTodos(jsonData);
			console.log(jsonData);
		} catch (err) {
			console.log(err.message);
		}
	};

	const deleteTodos = async (deleteID) => {
		try {
			const response = await fetch(`http://localhost:5000/todos/${deleteID}`, {
				method: "DELETE",
			});
			setTodos(todos.filter((todo) => todo.todo_id !== deleteID));
		} catch (err) {
			console.log(err.message);
		}
	};
	useEffect(() => {
		getTodos();
	}, []);
	if (!todos.length) {
		return (
			<Badge
				colorScheme="green"
				py={4}
				px={8}
				borderRadius="lg"
				variant="subtle"
			>
				No Tasks!
			</Badge>
		);
	}
	return (
		<VStack
			divider={<StackDivider />}
			borderWidth="2px"
			borderColor="gray.100"
			p={2}
			borderRadius="lg"
			w="100%"
			maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
			alignItems="stretch"
		>
			{todos.map((todo) => {
				return (
					<HStack key={todo.todo_id}>
						<Text>{todo.description}</Text>
						<Spacer />
						<IconButton
							icon={<FaTrash />}
							isRound="true"
							size="sm"
							onClick={() => deleteTodos(todo.todo_id)}
						/>
					</HStack>
				);
			})}
		</VStack>
	);
}

export default TodoList;
