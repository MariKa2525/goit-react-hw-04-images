import css from './Modal.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
componentDidMount() {
window.addEventListener('keydown', this.onClose)
}

componentWillUnmount() {
    window.removeEventListener('keydown', this.onClose)
}

onClose = evt => {
    if((evt.code === 'Escape') || (evt.currentTarget === evt.target)) {
        this.props.onClose()
    }
}

    render() {
        
        return (
            <div className={css.overlay} onClick={this.onClose}>
            <div className={css.modal}>
            <img src={this.props.src} alt='large img' />
            </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    
};
