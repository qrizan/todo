<!DOCTYPE html>
<html>
    <head>
        <title>Laravel - VueJS</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="{{ url('css/app.css') }}">
        <style type="text/css">
            li.completed{
              text-decoration: line-through;
            }
            .margin-right-10{
              margin-right: 10px;
            }            
        </style>
    </head>
    <body>
        <div class="container" id="vue-app">

              <div class="row">
                <div class="col-md-6 col-md-offset-3">
                  <h1>Todos App</h1>
                  <todo-items :todos.sync="todos"></todo-items>
                  
                  <todo-add-form :newtodo.sync="newTodo"></todo-add-form>
                </div>
              </div>
            
        </div>

        <script type="text/javascript" src="{{ elixir('js/main.js') }}"></script>
    </body>
</html>
