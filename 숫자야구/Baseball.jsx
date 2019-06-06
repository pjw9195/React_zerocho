import React, { Component } from 'react';

function getNumbers() {}
class Baseball extends Component {
  state = {
    result: '',
    value: '',
    tries: '',
    answer: getNumbers(),
  };
  onSubmitForm = () => {};
  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: '사과', taste: '맛있다' },
            { fruit: '바나나', taste: '맛없다' },
            { fruit: '포도', taste: '시다' },
            { fruit: '귤', taste: '떫다' },
            { fruit: '배', taste: '맛있다' },
            { fruit: '사과', taste: '맛없다' },
          ].map((v, i) => {
            return (
              <li key={v.fruit + v.taste}>
                <b>{v.fruit}</b> - {i}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default Baseball;
