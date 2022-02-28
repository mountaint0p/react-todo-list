import { React, useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
	const [todos, setTodos] = useState([]);
	return (
		<VStack p={4}>
			<Heading
				size="2xl"
				fontWeight="extrabold"
				bgGradient="linear(to-r, pink.500, blue.500)"
				bgClip="text"
				pb={6}
				pt={6}
			>
				Todo List
			</Heading>
			<TodoList todos={todos} setTodos={setTodos} />
			<AddTodo todos={todos} setTodos={setTodos} />
		</VStack>
	);
}

export default App;
