import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createPost } from '../../actions';
import Spinner from '../Spinner';

class PostEdit extends React.Component {
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input type="text" {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    };

    onSubmit = (formValues) => {
        const memberId = this.props.match.params.id;
        const postObject = {...formValues};
        postObject.userId = memberId;

        this.props.createPost(postObject);
    }

    render(){
        if(this.props.dataLoading) return <Spinner />
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                    <Field name="title" component={this.renderInput} label="Title" />
                    <Field name="body" component={this.renderInput} label="Body" />

                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const validationErrors = { };

    if(!formValues.title) {
        validationErrors.title = 'Please enter a title.';
    }

    if(!formValues.description){
        validationErrors.description = 'Please enter a description.';
    }

    return validationErrors;
};

const mapStateToProps = (state) => {
    return { dataLoading: state.dataLoading };
}

PostEdit = connect(mapStateToProps, { createPost: createPost })(PostEdit);

export default reduxForm(
    {
        form: 'postEdit',
        validate: validate
    }
)(PostEdit);
