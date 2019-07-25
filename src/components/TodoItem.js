import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                           onChange={this.props.toggleComplete.bind(this, id)}
                    />
                    { title }
                    <button
                        onClick={this.props.delTodo.bind(this.props).bind(this, id)}
                        style={btnStyle}>
                        x
                    </button>
                </p>
            </div>
        )
    }

    getStyle() {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            boarderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem
