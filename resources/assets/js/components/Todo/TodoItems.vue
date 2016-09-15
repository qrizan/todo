<script>
	export default {

		props: ['todos'],

		methods: {
			todoDelete(todo){
				this.todos.$remove(todo)
			},

			todoCompleted(todo){
				todo.completed = !todo.completed
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