import Vue from 'vue';
import VueResource from 'vue-resource';

import TodoItems from './components/Todo/TodoItems.vue';
import TodoAddForm from './components/Todo/TodoAddForm.vue'

Vue.use(VueResource);

Vue.component('todo-items', TodoItems);
Vue.component('todo-add-form', TodoAddForm);

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").getAttribute('content');

new Vue({
	el: '#vue-app',

	created(){
		this.$http.get('api/v1/todos').then((response) => {
			console.log(response.data);
			this.todos = response.data;
		});
	},	

	data: {
		newTodo: {},
		todos: []
	},

	watch: {
		newTodo(newValue, oldValue){ 
			console.log(newValue);
			this.todos.push({
				id: Math.floor(Date.now()),
				title: newValue.title,
				completed: false
			});
		}
	}
});