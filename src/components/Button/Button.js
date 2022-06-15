import s from './Button.module.css'

function Button({loadMore}) {
  return (<button type="button" className={s.button} onClick={loadMore}>
      <span className={s.buttonLabele}>Load more</span>
    </button>)
}

export default Button