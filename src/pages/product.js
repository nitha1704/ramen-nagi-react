import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productsFetch, productDelete, productGetId } from '../actions/index';

// Component
import Header from '../components/header';
import Footer from '../components/footer';




class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {showModalBox: false}
    }

    componentDidMount() {
        this.props.productsFetch();
    }



    getProduct() {
        return this.props.products && this.props.products.map(({ id, image, product_name, product_price, introduction }) => {
            return (
                <div className="col-md-4 product-section2-item">
                    <div className="product-section2-item1">
                        <img src={image} className="img-fit" />
                    </div>

                    <div className="product-section2-item2">
                        <span>{product_name}</span>
                        <span>${product_price}</span>
                    </div>
                    <p className="product-section2-item3">{introduction}</p>
                    <div className="product-section2-item4">
                        <button className="btn btn-primary" onClick={() => this.productEdit(id)}>EDIT PRODUCT</button>
                        <button className="btn btn-danger" onClick={() => this.showModalBox(id)}>DELETE PRODUCT</button>
                    </div>
                </div>
            )
        })
    }

    productEdit(id) {
        this.props.history.push('/product/edit/' + id);
    }

    productDelete(id) {
        this.props.productDelete(id);
        this.setState({showModalBox: false});
    }

    showModalBox(id) {
        this.setState({showModalBox: true});
        this.props.productGetId(id);
    }

    render() {
        return (
            <div>
                <Header />

                {/* Product Section 1 */}
                <section className="product-section1">
                    <div className="product-section1-overlay-bg"></div>
                    <div className="product-title">
                        <p>Product</p>
                    </div>
                </section>

                {/* Product Section 2 */}
                <section className="product-section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 product-section2-col-1">
                                <button className="btn btn-success add-btn" onClick={() => this.props.history.push('/product/add')}>ADD PRODUCT</button>
                            </div>
                        </div>

                        {this.props.products && Array.isArray(this.props.products) &&
                            <div className="row">
                                {this.getProduct()}
                            </div>
                        }
                    </div>
                </section>


                {/* Modal Box */}
                {this.state.showModalBox == true
                ?<div className="total-order-modal-box">
                    <div className="total-order-modal-box-cover">
                        <div className="total-order-modal-box-content">
                            <button className="btn btn-danger close-modal-btn" onClick={() => this.setState({showModalBox:false})}>X</button>
                            <p>Do you want to delete item ?</p>
                            <div>
                                <button className="btn btn-danger" onClick={()=>this.productDelete(this.props.productId)}>Yes</button>
                                <button className="btn btn-primary" onClick={() => this.setState({showModalBox:false})}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
                :""
                }

                {console.log(this.props.showState)}
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { showState: state, products: state.product, productId: state.productId }
}

export default connect(mapStateToProps, { productsFetch, productDelete, productGetId })(Product);