import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // 当父组件的render函数执行时，它的子组件的render都将被重新执行
    render () {
        console.log('item render');
        return (
            <>
                <div dangerouslySetInnerHTML={{__html: this.props.content}} onClick={this.handleClick}></div>
                {this.props.test}
            </>
        )
    }

    // 点击删除
    handleClick () {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

TodoListItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    test: PropTypes.string.isRequired
}

TodoListItem.defaultProps = {
    test: '123'
}

export default TodoListItem