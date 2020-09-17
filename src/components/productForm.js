import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { productFetch, productsFetch, productDelete, productCreate, productEdit, productsClear } from '../actions/index';

// Component
import Header from '../components/header';
import Footer from '../components/footer';





const formField = [
    { label: "Product Name", name: 'product_name', type: "text", required: true },
    { label: "Product Price", name: 'product_price', type: "number", required: true },
    { label: "Image", name: 'image', type: "text", required: true },
    { label: "Introduction", name: 'introduction', type: "text", required: true }
]

class ProductForm extends React.Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);
        }

        if (this.props.match.path.indexOf('add') > 0) {
            this.props.productsClear();
        }
    }

    getFormField() {

        return formField.map((formFieldMap => {
            return (
                <Field name={formFieldMap.name} type={formFieldMap.type}
                    label={formFieldMap.label} component={this.renderInput} required={formFieldMap.required} />
            )
        }));
    }

    renderInput = ({ input, label, name, type, required, meta }) => {
        return (
            <div>
                <label className="form-label">{label}</label>
                <input className="form-control" {...input} name={name} type={type} required={required} />

                {meta.touched &&
                    (
                        (meta.error && <div className="p-2 mb-2 text-danger bg-dark box-error">{meta.error}</div>)
                        ||
                        (meta.warning && <div className="p-2 mb-2 text-warning bg-secondary box-warning">{meta.warning}</div>)
                    )
                }

                {console.log(meta)}
            </div>
        )
    }

    setConfirmMsgFalse() {
        this.props.products.saved = false;
    }



    render() {
        const { handleSubmit, pristine, submitting, reset, formValues } = this.props;
        return (
            <div>
                <Header />
                <section className="product-form-section1">
                    {/* Add Product */}
                    {this.props.match.path.indexOf('add') > 0 &&
                        <form onSubmit={handleSubmit(() => this.props.productCreate(formValues))}>

                            {this.props.products.saved &&
                                <div className="confirm-order bg-success">
                                    Product has been created
                                </div>
                            }
                            <h1>Add Product</h1>
                            {this.getFormField()}
                            <div className="wrap-btn">
                                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={reset}>Clear Value</button>
                            </div>
                        </form>
                    }

                    {/* Edit Product */}
                    {this.props.match.path.indexOf('edit') > 0 &&
                        <form onSubmit={handleSubmit(() => this.props.productEdit(this.props.products.id, this.props.formValues))}>

                            {this.props.products.saved &&
                                <div className="confirm-order bg-success">
                                    Product has been edited
                                </div>
                            }
                            <h1>Edit Product</h1>
                            {this.getFormField()}
                            <div className="wrap-btn">
                                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={reset}>Clear Value</button>
                            </div>
                        </form>
                    }
                </section>
                <Footer />
                {console.log(validate)}
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {}

    // formField.forEach((formFieldItem, index) => {
    //     if (!values[formFieldItem.name]) {
    //         errors[formFieldItem.name] = 'Required';
    //     } 
    // })

    if (!values.product_name) {
        errors.product_name = 'Required';
    } else if (values.product_name.length > 10) {
        errors.product_name = 'This name is too long';
    }

    if (!values.product_price) {
        errors.product_price = 'Required';
    } else if (values.product_price == 666) {
        errors.product_price = 'THIS IS SATAN';
    } else if (values.product_price > 100) {
        errors.product_price = 'Too Much';
    } else if (values.product_price <= 0) {
        errors.product_price = 'Price must more than 0';
    } else if (isNaN(Number(values.product_price))) {
        errors.product_price = 'Value must be a number';
    }

    if (!values.image) {
        errors.image = 'Required';
    }

    if (!values.introduction) {
        errors.introduction = 'Required';
    }
    return errors;

}

const warn = (values) => {
    const warnings = {};
    if (values.product_name == 'puck') {
        warnings.product_name = 'Does this name is not strange ?';
    }

    if (values.product_price < 5) {
        warnings.product_price = 'Is it not too cheap ?';
    }
    return warnings;
}

function mapStateToProps(state) {
    return {
        showState: state,
        formValues: state.form.productForm ? state.form.productForm.values : null,
        products: state.product,
        initialValues: state.product
    }
}

ProductForm = reduxForm({ form: 'productForm', enableReinitialize: true, validate, warn })(ProductForm);

export default connect(mapStateToProps, { productFetch, productCreate, productEdit, productsClear })(ProductForm);