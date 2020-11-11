// import React, { Component } from "react";
import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.charactorData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharactor(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
  //   return (
  //     <tbody>
  //       <tr>
  //         <td>zhangsan</td>
  //         <td>meituan</td>
  //       </tr>
  //       <tr>
  //         <td>lisi</td>
  //         <td>eleme</td>
  //       </tr>
  //       <tr>
  //         <td>wangwu</td>
  //         <td>jindong</td>
  //       </tr>
  //       <tr>
  //         <td>zhaoliu</td>
  //         <td>fengcao</td>
  //       </tr>
  //     </tbody>
  //   );
};

// class Table extends Component {
//   render() {
//       const {charactorData} = this.props
//     return (
//       <table>
//         <TableHeader />
//         <TableBody charactorData={charactorData} />
//       </table>
//     );
//   }
// }
const Table = (props) => {
  const { charactorData, removeCharactor } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        charactorData={charactorData}
        removeCharactor={removeCharactor}
      />
    </table>
  );
};

export default Table;

// 简单组件
/*
    React中的另一种类型的组件是simple component，它是一个函数。该组件不使用class关键字。
    让我们Table为它做两个简单的组件-一个表头和一个表主体。

    我们将使用ES6箭头功能来创建这些简单的组件。首先，表头

    TableHeader和TableBody组件都在同一文件中，并由Table类组件使用。
*/
