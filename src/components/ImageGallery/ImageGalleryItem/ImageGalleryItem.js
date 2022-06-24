import PropTypes from 'prop-types';
import React from 'react';
import s from './ImageGalleryItem.module.css'


class ImageGalleryItem extends React.Component{
   

    onOpen = e => {
        console.log(this.props.data)
        this.props.onClick(this.props.data)
    }

    render() {
        
       return <img src={this.props.url} alt="" className={s.galleryImg} data-src={this.props.data} onClick={this.onOpen} />
     
    }
}


export default ImageGalleryItem