<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--给TodoHeader标签对象绑定add事件监听,适合父子间传递-->
      <!--<TodoHeader @add="add"/>-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" />
      <todo-footer>
        <input type="checkbox" v-model="selectAll" @click="allTodo" slot="checkAll"/>
        <span slot="count">已完成{{ completeTodo }} / 全部{{ todos.length }}</span>
        <button class="btn btn-danger" @click="delCompleted" slot="delete">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
import {PubSub} from 'pubsub-js'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import storageUtil from './util/storageUtil'

export default {
  data () {
    return {
      // 从localStorage读取todos
      todos: storageUtil.readTodos()
    }
  },
  watch: { // 监视
    todos: {
      deep: true, // 深度监视
      // handler: function (value) {
      //   // 将todos最新的值的json数据保存到localStorage
      //   window.localStorage.setItem('todos_key', JSON.stringify(value))
      // }
      handler: storageUtil.saveTodos
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    add (item) {
      this.todos.unshift(item)
    },
    del (index) {
      this.todos.splice(index, 1)
    },
    delCompleted () {
      this.todos = this.todos.filter(todo => todo.complete !== true)
    },
    allTodo () {
      this.todos.map(todo => (todo.complete = true))
    }
  },
  mounted () {
    // 给<TodoHeader/>绑定add事件监听,可以爷孙间传递
    // 此处this是App
    // this.$on('add', this.add)
    this.$refs.header.$on('add', this.add)

    // 订阅消息，接收
    PubSub.subscribe('del', (msg, index) => {
      this.del(index)
      // this指PubSub,不对,可以用箭头函数
    })
  },
  computed: {
    completeTodo () {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },
    selectAll: {
      get () {
        return this.todos.length === this.completeTodo && this.todos.length > 0
      },
      set () {
        this.allTodo()
      }
    }
  }
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
