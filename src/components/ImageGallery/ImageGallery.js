import PropTypes from 'prop-types';
import React from 'react';
import axios from "axios";
import s from './ImageGallery.module.css'
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';


class ImageGallery extends React.Component{
    state = {
        searchResults: [],
        page: 1,
        status: 'idle',
        showModal: false,
        modalUrl: '',
        }
    

    componentDidUpdate(prevProps, prevState) {
         if (this.state.page > prevState.page) {
            console.log(this.state)
           this.setState({status: 'pending'})
            fetch(`https://pixabay.com/api/?q=${this.props.search}&page=${this.state.page}&key=27704897-33eca0a5ea9474d62773139fd&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState((prevState) => ({ searchResults: [...prevState.searchResults, ...data.hits], status: 'resolved'}))) 
        }
        if (this.props.search !== prevProps.search) {
            this.setState({ searchResults: [], page: 1, })
            this.setState({status: 'pending'})
            fetch(`https://pixabay.com/api/?q=${this.props.search}&page=1&key=27704897-33eca0a5ea9474d62773139fd&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json()).then(data => this.setState({ searchResults:data.hits, status: 'resolved'}))
        }
       
    }
    loadMore = () => {
    this.setState((prevState) => {
    return {
      page: prevState.page + 1
    };
  });
    };
    
    openModal = ({togle,url}) => {
        this.setState({showModal: togle,
        modalUrl:url})
    }

    render()
    {
        if (this.state.status === 'pending') {
        return <Loader />
        }
        if (this.state.status === 'resolved') {
            return <>
            <ul className={s.gallery}>
            {this.state.searchResults.map(({id, webformatURL, largeImageURL })=> {
               return   <li key={id} className={s.item}>
                   <ImageGalleryItem url={webformatURL} data={largeImageURL} onClick={this.openModal} />
                        </li>  
            })}
                </ul>
                {this.state.showModal && <Modal url={this.state.modalUrl} />}
            <Button loadMore={this.loadMore} /></>
        }

    }
}

export default ImageGallery