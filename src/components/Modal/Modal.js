import s from './Modal.module.css'


function Modal({ url}) {

    return <div className ={s.overlay}>
  <div className={s.modal}>
    <img src={url} alt="" />
  </div>
</div>
}

export default Modal