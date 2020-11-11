import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    charactors: [
      //   {
      //     name: "zhangsan",
      //     job: "meituan",
      //   },
      //   {
      //     name: "lisi",
      //     job: "eleme",
      //   },
      //   {
      //     name: "wangwu",
      //     job: "jingdong",
      //   },
      //   {
      //     name: "zhaoliu",
      //     job: "fengcao",
      //   },
    ],
  };

  removeCharactor = (index) => {
    const { charactors } = this.state;

    this.setState({
      charactors: charactors.filter((charactor, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (charactor) => {
    this.setState({ charactors: [...this.state.charactors, charactor] });
  };
  render() {
    //   const charactors = [
    //       {
    //           name: 'zhangsan',
    //           job: 'meituan',
    //       },
    //       {
    //           name: 'lisi',
    //           job: 'eleme',
    //       },
    //       {
    //           name: 'wangwu',
    //           job: 'jingdong',
    //       },
    //       {
    //           name: 'zhaoliu',
    //           job: 'fengcao',
    //       }
    //   ]
    const { charactors } = this.state;

    return (
      <div className="container">
        <Table
          charactorData={charactors}
          removeCharactor={this.removeCharactor}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

// 类组件
/*
    React几乎所有内容都由组件组成，这些组件可以是类组件或简单组件
    大多数React应用程序都有许多小组件，所有内容都加载到主App组件中
*/
