<script>
	export default{

		props: ['newtodo'],

		data(){
			return {
				todo: {id: null, title: '', completed: false}
			}
		},

		methods: {
			addNewTodo(){
				var postData = {title: this.todo.title};
				this.$http.post('api/v1/todo', postData).then((response) => {
					if (response.status == 201){
						this.newtodo = response.data; 
						this.todo = {id: null, title: '', completed: false}					
					}
				}).catch((response) => {
					console.log('Error', response); 
				});
			}  
		}		
	}
</script>

<template>
	<form v-on:submit.prevent="addNewTodo()">
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Add new Todo" v-model="todo.title"> 
		</div>

		<div class="form-group">
			<button class="btn btn-primary btn-block">Add</button>
		</div>
	</form>
</template>