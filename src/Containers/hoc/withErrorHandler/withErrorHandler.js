import React, { Component } from 'react';
import Modal from '../../../Components/UI/Modal/Modal';
import Aux from '../auxx';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        render() {
            return (
                <Aux>
                    {this.state.error == null ? null : <Modal>{this.state.error.message}</Modal>}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;