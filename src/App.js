import React from 'react';
import Todos from "./components/Todos";
import './App.css'
import Header from "./components/layout/Header";
import {AddTodo} from "./components/AddTodo";
import uuid from "uuid"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from "./components/pages/About";

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Take out trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Dinner with boss',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Grocery shopping',
                completed: false
            }
        ]
    };

    toggleComplete = id => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            }) })
    };

    delTodo = id => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    };

    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState( { todos: [...this.state.todos, newTodo] })
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className={"container"}>
                        <Header />
                        <Route
                            exact path={"/"}
                            render={() =>
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo}/>
                                    <Todos
                                        todos={this.state.todos}
                                        toggleComplete={this.toggleComplete}
                                        delTodo={this.delTodo}
                                    />
                                </React.Fragment>
                            }
                        />
                        <Route
                            path={"/about"}
                            component={About}
                        />
                    </div>
                </div>
            </Router>

        );
    }


}

export default App;
