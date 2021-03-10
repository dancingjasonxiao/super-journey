import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (<div dangerouslySetInnerHTML={{__html: this.props.content}} onClick={this.handleClick}></div>)
    }

    // 点击删除
    handleClick () {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

export default TodoListItem