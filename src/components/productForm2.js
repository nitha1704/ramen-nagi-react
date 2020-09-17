import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { productFetch, productsFetch, productDelete, productCreate, productEdit, productsClear, productGetId} from '../actions/index';


// Component
import Header from '../components/header';
import Footer from '../components/footer';
import {renderInput, renderTextArea} from '../components/form/productForm/renderProductForm';






class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showConfirmBox: false }

        this.setConfirmMsgFalse = this.setConfirmMsgFalse.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.productFetch(this.props.match.params.id);

            // Test
            this.props.productGetId(parseInt(this.props.match.params.id));
        }

        if (this.props.match.path.indexOf('add') > 0) {
            this.props.productsClear();
        }
    }

  
    addProduct(formValues) {
        this.props.productCreate(formValues);
        this.setState({showConfirmBox:true});
    }

    editProduct() {
        this.props.productEdit(this.props.productId, this.props.formValues);
        this.setState({showConfirmBox:true});
    }

    setConfirmMsgFalse() {
        this.setState({showConfirmBox:false});
        // this.props.products.saved = false;
    }


    render() {
        const { handleSubmit, pristine, submitting, reset, formValues } = this.props;
        return (
            <div>
                <Header />
                <section className="product-form-section1">
                    {/* Add Product */}
                    {this.props.match.path.indexOf('add') > 0 &&
                        <form onSubmit={handleSubmit(() => this.addProduct(formValues))}>
                            {this.state.showConfirmBox &&
                                <div className="confirm-order bg-success">
                                    Product has been created
                                </div>
                            }
                            <h1>Add Product</h1>
                            <Field name="product_name" type="text"
                                label="Product Name" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="product_price" type="number"
                                label="Product Price" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="image" type="text"
                                label="Image" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="introduction" type="text"
                                label="Introduction" component={renderTextArea} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <div className="wrap-btn">
                                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={reset}>Clear Value</button>
                            </div>
                        </form>
                    }

                    {/* Edit Product */}
                    {this.props.match.path.indexOf('edit') > 0 &&
                        <form onSubmit={handleSubmit(() => this.editProduct())}>
                            {this.state.showConfirmBox &&
                                <div className="confirm-order bg-success">
                                    Product has been edited
                                </div>
                            }
                            <h1>Edit Product</h1>
                            <Field name="product_name" type="text"
                                label="Product Name" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="product_price" type="number"
                                label="Product Price" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="image" type="text"
                                label="Image" component={renderInput} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <Field name="introduction" type="text"
                                label="Introduction" component={renderTextArea} onsetConfirmMsgFalse={this.setConfirmMsgFalse} required />
                            <div className="wrap-btn">
                                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={reset}>Clear Value</button>
                            </div>
                        </form>
                    }
                </section>
                <Footer />
                {console.log(this.props.showState)}
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
    } else if (values.product_name.length > 30) {
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
        productId: state.productId,
        initialValues: state.product
    }
}

ProductForm = reduxForm({ form: 'productForm', enableReinitialize: true, validate, warn })(ProductForm);

export default connect(mapStateToProps, { productFetch, productCreate, productEdit, productsClear, productGetId })(ProductForm);