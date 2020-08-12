import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const todoList = [
  { 
    'id': 1,
    'title': 'Todo App (Django Template)',
    'description': 'what Django is all about. basics of creating a simple todo app.',
    'github': 'https://github.com/jinho6225/django_todo',
    'live': 'https://jinhomyung.pythonanywhere.com/',
    'img': '/asset/todoDjangoTemplate.gif',
    'stack': ['CSS Variable', 'HTML5', 'Python', 'Django', 'Django template', 'Sqlite3']
  },
  { 
    'id': 2,
    'title': 'Todo App (Django REST framework + Vanilla JavaScript)',
    'description': 'Django REST framework + Vanilla JavaScript todos',
    'github': 'https://github.com/jinho6225/todo_drf',
    'live': 'https://jinho6225.pythonanywhere.com/',
    'img': '/asset/todoVanilla.gif',
    'stack': ['CSS Variable', 'HTML5', 'Python', 'Django', 'Vanilla JavaScript', 'Sqlite3']
  },
  { 
    'id': 3,
    'title': 'Todo App (Django REST framework + React.js)',
    'description': 'Django RESTful API + React.js',
    'github': 'https://github.com/jinho6225/todo_drf_react',
    'live': 'https://jhmyung.pythonanywhere.com/',
    'img': '/asset/todoReact.gif',
    'stack': ['CSS Variable', 'HTML5', 'Python', 'Django', 'Django REST Framework', 'django-cors-headers', 'React', 'Sqlite3']

  },
  { 
    'id': 4,
    'title': 'Todo App (Django RESTful API + React Hooks)',
    'description': 'Django RESTful API + React Hooks',
    'github': 'https://github.com/jinho6225/todo_drf_react_hooks',
    'live': 'https://jhmyung6225.pythonanywhere.com/',
    'img': '/asset/todoHooks.gif',
    'stack': ['CSS Variable', 'HTML5', 'Python', 'Django', 'Django REST Framework', 'django-cors-headers', 'React Hooks', 'Sqlite3']
  },
]

ReactDOM.render(
    <App todoList={todoList} />,
  document.getElementById('root')
);


