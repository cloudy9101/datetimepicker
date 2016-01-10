import React from 'react'

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <a href='javascript:;'>
          <div className="ok">
          确定
          </div>
        </a>
        <a href='javascript:;'>
          <div className="cancel">
          取消
          </div>
        </a>
      </div>
    );
  }
}

module.exports = Footer;
