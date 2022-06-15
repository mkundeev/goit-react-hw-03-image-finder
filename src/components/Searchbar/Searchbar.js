import PropTypes from 'prop-types';
import React from 'react';
import s from './Searchbar.module.css'



class Searchbar extends React.Component{
state={
search: '',
}

  onChange=e=> {
    this.setState({ search: e.currentTarget.value })

  }

  render() {
     return (<header className={s.searhbar}>
  <form className={s.form}>
    <input
      className={s.input}
           type="text"
           name='search'
      autoComplete="off"
           autoFocus
           onChange={this.onChange}
      placeholder="Search images and photos"
        />
    <button type="submit" className={s.button}>
      <span className={s.buttonLabel}  onSubmit={this.props.onSearch}>Search</span>
    </button>
  </form>
</header>)
  }
}


export default Searchbar