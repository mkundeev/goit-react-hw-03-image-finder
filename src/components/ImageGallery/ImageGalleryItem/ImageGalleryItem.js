import PropTypes from 'prop-types';
import React from 'react';
import s from './ImageGalleryItem.module.css'


class ImageGalleryItem extends React.Component{
    state = {
        togle: false,
        url: ''
    } 

    onTogle = e => {
        this.setState((prevState)=>({togle: !prevState.togle,}))
        this.setState({url: e.target.dataset.src});
        this.props.onClick(this.state)
    }

    render() {
       return <><img src={this.props.url} alt="" className={s.galleryImg} data-src={this.props.data} onClick={this.onTogle} />
    </> 
    }
}


export default ImageGalleryItem