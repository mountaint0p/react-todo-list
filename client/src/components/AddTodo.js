import React from "react";
import { useState } from "react";
import { HStack, Input, useToast, Button } from "@chakra-ui/react";

function AddTodo({ todos, setTodos }) {
	const [description, setDescription] = useState("");
	const toast = useToast();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (description === "") {
			toast({
				title: "Error",
				description: "Cannot add a blank item",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			return;
		}
		try {
			const body = { description };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			setTodos([...todos, await response.json()]);
		} catch (err) {
			console.log(err.message);
		}
		setDescription("");
	};
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<HStack pt={6}>
				<Input
					variant="filled"
					placeholder="Enter Todo Item"
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button variant="primary" px="8" type="submit">
					Add Todo
				</Button>
			</HStack>
		</form>
	);
}

export default AddTodo;
