import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="header-inner">
          <div className="header-logo">
            <h2>タイトル</h2>
          </div>
          <ul className="header-list">
            <li><a href="#">新規会員登録</a></li>
            <li><a href="#">ログイン</a></li>
          </ul>
        </div>
      </div>
      
    );
  }
}
export default Header;