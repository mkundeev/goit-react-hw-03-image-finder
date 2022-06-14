import PropTypes from 'prop-types';
import s from './Searchbar.module.css'


function Searchbar({props}) {
    
    return (<header className={s.searhbar}>
  <form className={s.form}>
    <input
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
        />
    <button type="submit" className={s.button}>
      <span className={s.buttonLabel}>Search</span>
    </button>
  </form>
</header>)
}

export default Searchbar