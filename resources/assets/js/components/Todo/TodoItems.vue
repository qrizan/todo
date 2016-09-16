<script>
	export default {

		props: ['todos'],

		methods: {
			todoDelete(todo){
				var postData = {id: todo.id};
				this.$http.post('api/v1/todo-delete', postData).then((response) => {
					if (response.status == 200){
						this.todos.$remove(todo)
					}
				}).catch((response) => {
					console.log('Error', response);
				});
			},

			todoCompleted(todo){
				var postData = {id: todo.id};
				this.$http.post('api/v1/todo-status', postData).then((response) => {
					if (response.status == 200){
						todo.completed = !todo.completed
					}
				}).catch((response) => {
					console.log('Error', response);
				});				
			}  	
		}	
	}
</script>

<template>
	<ul class="list-group">
	  	<li v-for="todo in todos"
	  		class="list-group-item" 
	  		v-bind:class="{'completed' : todo.completed}">
	  		{{ todo.title }}

	  		<button class="btn btn-warning btn-xs pull-right" 
	  				v-on:click="todoDelete(todo)">Delete
	  		</button>

	  		<button class="btn btn-xs pull-right margin-right-10" 
	  				v-bind:class="{'btn btn-success' : todo.completed, 'btn-danger' : !todo.completed}"
	  				v-on:click="todoCompleted(todo)">
	  				{{todo.completed ? 'Completed' : 'Pending'}}
	  		</button>
	  	</li>
	</ul>
</template>