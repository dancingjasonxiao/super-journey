import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['number one', 'number two']
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleBtnDelete = this.handleBtnDelete.bind(this);
    }

    // 当组件的state或props发生改变时，render函数就会重新执行
    render() {
        console.log('list render');
        return (
            <>
                {/* TodoList */}
                <div>
                    <label htmlFor="input">请输入内容：</label>
                    <input
                        id="input"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>保存</button>
                </div>
                <ul>{this.getListItem()}</ul>
            </>
        );
    }

    getListItem () {
        return this.state.list.map((item, index) => {
            return (
                <TodoListItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleBtnDelete}
                />
            )
        })
    }

    handleInputChange (e) {
        const value = e.target.value;
        this.setState(() => ({ inputValue: value }));
    }

    // 点击保存
    handleBtnClick () {
        this.setState(prevState => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    // 点击删除
    handleBtnDelete (index) {
        this.setState(prevState => {
            let list = [...prevState.list];
            list.splice(index, 1);
            return { list };
        });
    }
}

export default TodoList;