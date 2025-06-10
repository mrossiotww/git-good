class TodoApp {
    constructor() {
        this.todos = [];
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.stats = document.getElementById('stats');

        this.init();
    }

    init() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });

        this.loadTodos();
        this.render();
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (!text) return;

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date()
        };

        this.todos.push(todo);
        this.todoInput.value = '';
        this.saveTodos();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
    }

    render() {
        if (this.todos.length === 0) {
            this.emptyState.style.display = 'block';
            this.stats.style.display = 'none';
            return;
        }

        this.emptyState.style.display = 'none';
        this.stats.style.display = 'block';

        const todoHTML = this.todos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''}">
                <input type="checkbox" class="todo-checkbox" 
                       ${todo.completed ? 'checked' : ''} 
                       onchange="app.toggleTodo(${todo.id})">
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
            </div>
        `).join('');

        this.todoList.innerHTML = todoHTML;
        this.updateStats();
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('pendingTasks').textContent = pending;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveTodos() {
        // In a real application, you would use localStorage:
        // localStorage.setItem('todos', JSON.stringify(this.todos));
        console.log('Todos saved:', this.todos);
    }

    loadTodos() {
        // In a real application, you would use localStorage:
        // const saved = localStorage.getItem('todos');
        // if (saved) {
        //     this.todos = JSON.parse(saved);
        // }

        // For demo purposes, start with some sample data
        this.todos = [
            { id: 1, text: 'Learn git branching strategies', completed: false, createdAt: new Date() },
            { id: 2, text: 'Practice merge conflicts', completed: true, createdAt: new Date() },
            { id: 3, text: 'Master the team workflow', completed: false, createdAt: new Date() }
        ];
    }
}

// Initialize the app
const app = new TodoApp();