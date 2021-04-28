import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
  }

  //LifeCycle
  //getDefaultProps()
  //getinitialState();

  //compomnent Mounting 단계
  componentWillMount() {
    console.log("랜더가일어나기전수행");
  }

  componentDidMount() {
    console.log("랜더이후 수행");
  }

  //Updating단계
  componentDidUpdate() {
    console.log("캄포넌트 업데이트시 수행");
  }
  shouldComponentUpdate() {
    console.log("컴포넌트속에서 값이 바뀔떄수행 React.Memo");
  } //React.Memo 해당컴포넌트의 값이변경될떄 수행된다

  getSnapshotBeforeUpdate() {
    console.log("값이바뀌고난뒤 수행");
  }

  //이단계에서는 ReactDom update  Dom and Ref  포커스단계에서는타지않아 포커스에선 랜더를 바로탄다.

  //React Updates Dom and Refs 는 마운팅과 업데이팅 단계에서
  //진행됨
  // getDefaultPorps => getinitalState =>
  // componentWillMount => render  => componentDidMount
  //=> componentDidUpdate   => shouldcomponentUpdate => getSnapShotBeforeUpdate  => componentWillUnmount
  //기본적으로 포커스업데이트 상태에,  render 이벤트발생, 스테이트와 프롭스변경상태에선 shouldcomponentUpdate 상태에서 진행된다.

  //unMontinge 단계
  componentWillUnmount() {
    console.log("언마운트 단계에서수행 ");
  }

  render() {
    console.log("랜더");
    return (
      <div>
        <p onClick={() => this.setState({ data: 2 })}>sssssss</p>
      </div>
    );
  }
}

export default App;
