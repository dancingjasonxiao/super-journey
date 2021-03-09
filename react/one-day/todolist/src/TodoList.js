import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['number one', 'number two']
        }
    }
    render() {
        return (
            <>
                {/* TodoList */}
                <div>
                    <label htmlFor="input">请输入内容：</label>
                    <input
                        id="input"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>保存</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleBtnDelete.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html: item}}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }

    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    // 点击保存
    handleBtnClick () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    // 点击删除
    handleBtnDelete (index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({ list });
    }
}

export default TodoList;