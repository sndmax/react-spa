import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { submit } from 'actions/signup';
import { getSign } from 'actions/signup';
import { connect } from 'react-redux';
import './SignUpContainer.scss';

const renderField = ({ input, label, type }) =>
    <div>
        <input className="auth-form-input" {...input} placeholder={label} type={type} />
    </div>;

class SignUpContainer extends Component {
    render() {
        const { status, data, error, handleSubmit, submitting } = this.props;
        const errorMsg = status == 'error' ? data.errors._error : false;
        return (
            <section>
                <form className="auth-form" onSubmit={handleSubmit(getSign)}>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="Username"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        label="Password"
                    />
                    {errorMsg &&
                    <strong>
                        {errorMsg}
                    </strong>}
                    <div className="auth-form-buttons">
                        <button type="submit" disabled={submitting}>
                            Log In
                        </button>
                    </div>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        status: store.auth.status,
        data: store.auth.data
    }
};

SignUpContainer = reduxForm({
    form: 'submitValidation'
})(SignUpContainer);

SignUpContainer = connect(mapStateToProps)(SignUpContainer);

export default SignUpContainer;
