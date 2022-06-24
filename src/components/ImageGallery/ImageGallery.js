import PropTypes from 'prop-types';
import React from 'react';
import axios from "axios";
import s from './ImageGallery.module.css'
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { axiosCongif } from 'config/axiosConfig';

const { API_KEY, url, options } = axiosCongif;



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
           this.setState({status: 'pending'})
             axios(`${url}?q=${this.props.search}&page=${this.state.page}&key=${API_KEY}${options}`).then(({data}) => this.setState((prevState) => ({ searchResults: [...prevState.searchResults, ...data.hits], status: 'resolved' }))) 
             
        }
        if (this.props.search !== prevProps.search) {
            this.setState({ searchResults: [], page: 1, })
            this.setState({status: 'pending'})
            axios(`${url}?q=${this.props.search}&page=1&key=${API_KEY}${options}`).then(({data})  => this.setState({ searchResults:data.hits, status: 'resolved'}))
        
        }
    }

    loadMore = () => {
       
    this.setState((prevState) => {
    return {
      page: prevState.page + 1
    };
    });
     
    };

    openModal = url => {
        console.log(url)
        this.setState({
            showModal: !this.state.showModal,
        modalUrl: url});
        
    }

    handleToggleModal=()=> {
  this.setState({ showModal: !this.state.showModal });
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
                {this.state.showModal && <Modal onCloseRequest={this.handleToggleModal}> <img src={this.state.modalUrl} alt="" /> </Modal>}
            <Button loadMore={this.loadMore} /></>
        }

    }
}
ImageGallery.propTypes = {
    search: PropTypes.string.isRequired,

} 


export default ImageGallery