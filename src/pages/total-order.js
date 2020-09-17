import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import { totalOrderFetch, totalOrderGetId, deleteTotalOrder } from '../actions/index';

// Component
import Header from '../components/header';
import Footer from '../components/footer';

class TotalOrder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showModalBox: false};
    }

    componentDidMount() {
        this.props.totalOrderFetch();

    }

    getTotalOrder() {
        return this.props.totalOrder && this.props.totalOrder.map((totalOrderMap) => {
            return (
                <div className="col-md-4 total-order-col">
                    <button className="btn btn-danger delete-total-order-btn" onClick={ () => this.openModalBox(totalOrderMap.id)}>-</button>
                    <p>Date: {totalOrderMap.orderedDate}</p>
                    <p>Total Price: ${totalOrderMap.totalPrice}</p>
                    <ul>
                        {totalOrderMap.orders.map((totalOrderMap2) => {
                            return (
                                <li>{totalOrderMap2.product.product_name} x {totalOrderMap2.quantity} = ${totalOrderMap2.quantity * totalOrderMap2.product.product_price}</li>
                            )
                        })}
                    </ul>
                    <hr />
                </div>
            )
        })
    }

    openModalBox(id) {
        this.props.totalOrderGetId(id);
        this.setState({showModalBox:true});
    }

    deleteTotalOrder(id) {
        this.props.deleteTotalOrder(id);
        this.setState({showModalBox: false});
    }

    render() {
        return (
            <div>
                <Header />

                {/* Total Order Section 1 */}
                <section className="total-order-section1">
                    <div className="total-order-overlay-bg"></div>
                    <div className="total-order-section1-title">
                        <p>Total Order</p>
                    </div>
                </section>


                {/* Total Order Section 2 */}
                <section className="total-order-section2">
                    <div className="container">
                        <div className="row">
                            {this.getTotalOrder()}
                        </div>
                    </div>
                </section>

                {this.state.showModalBox == true
                ?<div className="total-order-modal-box">
                    <div className="total-order-modal-box-cover">
                        <div className="total-order-modal-box-content">
                            <button className="btn btn-danger close-modal-btn" onClick={() => this.setState({showModalBox:false})}>X</button>
                            <p>Do you want to delete item ?</p>
                            <div>
                                <button className="btn btn-danger" onClick={()=>this.deleteTotalOrder(this.props.totalOrderId)}>Yes</button>
                                <button className="btn btn-primary" onClick={() => this.setState({showModalBox:false})}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
                :""
                }
                
                {console.log(this.props.seeState)}
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {seeState: state, totalOrder: state.totalOrder, totalOrderId: state.totalOrderId }
}

export default connect(mapStateToProps, { totalOrderFetch, totalOrderGetId, deleteTotalOrder })(TotalOrder);