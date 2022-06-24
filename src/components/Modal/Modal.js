import React from 'react'
import s from './Modal.module.css'


class Modal extends React.Component {
  state = {
    
  }
  
  componentDidMount() {
  window.addEventListener('keydown', this.handleKeyUp); 
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyUp);
  }
  
  handleKeyUp = (e) => {
    if (e.code === 'Escape') {
      this.props.onCloseRequest();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  };

  handleOutsideClick = (e) => {    
    if (e.target === e.currentTarget) {
      this.props.onCloseRequest();
    }
  
  };

  render() {
    return <div className ={s.overlay} onClick={this.handleOutsideClick}>
  <div className={s.modal}>
    {this.props.children}
  </div>
</div>}

}


export default Modal