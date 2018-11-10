import React, { Component } from 'react';

class UserForm extends Component {

addUser = (e) => {
    e.preventDefault(); //nie przeładowuj strony
    console.log(this.inputValue.value);
    this.props.update(this.inputValue.value);
}

  render() {
    return (
      <div className="form">
        <h2>To jest formularz</h2>
        <form onSubmit={this.addUser}>
            <input type="text" placeholder="Nazwa użytkownika" ref={(data)=>{this.inputValue = data}}/>
            <input type="submit" value="Dodaj użytkownika"/>
            
        </form>
      </div>
    );
  }
}

export default UserForm;
