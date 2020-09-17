import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { connect } from 'react-redux';
import { menuFetch, productsFetch } from '../actions/index'

// Component
import Header from '../components/header';
import Footer from '../components/footer';
import Calculator from '../components/calculator';
import { isArray } from 'jquery';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { orders: [], totalPrice: 0, confirmMessage: "", confirmClassName: "", confirmBox: false }

        this.addOrder = this.addOrder.bind(this);
    }

    componentDidMount() {
        this.props.menuFetch();
        this.props.productsFetch();

    }



    getMenu() {
        return this.props.products && this.props.products.map((menuMap) => {
            return (
                <div className="col-md-4 menu-item">
                    <img src={menuMap.image} className="img-fit menu-picture" alt="" />
                    <div className="menu-item1">
                        <span>{menuMap.product_name}</span> <span>${menuMap.product_price}</span>
                    </div>
                    <p className="menu-item2">{menuMap.introduction}</p>
                    <div className="menu-item3">
                        <button className="btn btn-primary btn-block" onClick={() => this.addOrder(menuMap)}>Add to Cart</button>
                    </div>
                </div>
            )
        })
    }

    addOrder(menuMap) {
        const ordersFind = this.state.orders.find((ordersFind) => ordersFind.product.id == menuMap.id);

        if (ordersFind) {
            ordersFind.quantity++;
        } else {
            this.state.orders.push({ product: menuMap, quantity: 1 });
        }

        const totalPriceUpdate = this.state.totalPrice + parseInt(menuMap.product_price);
        this.setState({ orders: this.state.orders, totalPrice: totalPriceUpdate, confirmBox: false });
    }

    incrementOrder(ordersMap) {
        const ordersFind = this.state.orders.find((ordersFind) => ordersFind.product.id == ordersMap.product.id);

        if (ordersFind) {
            ordersFind.quantity++;
        }

        const totalPriceUpdate = this.state.totalPrice + parseInt(ordersFind.product.product_price);
        this.setState({ orders: this.state.orders, totalPrice: totalPriceUpdate });
    }


    decrementOrder(ordersMap) {
        const ordersFind = this.state.orders.find((ordersFind) => ordersFind.product.id == ordersMap.product.id);

        if (ordersFind) {
            ordersFind.quantity--;
        }
        const totalPriceUpdate = this.state.totalPrice - parseInt(ordersFind.product.product_price);
        this.setState({ orders: this.state.orders, totalPrice: totalPriceUpdate });

        if (ordersFind.quantity == 0) {
            const ordersFilter = this.state.orders.filter((ordersFilter) => ordersFilter.product.id != ordersFind.product.id);
            this.setState({ orders: ordersFilter });
        }
    }

    confirmOrder() {
        const { orders, totalPrice } = this.state;

        if (orders.length > 0) {
            axios.post('http://localhost:3001/totalOrders', { orderedDate: new Date().toLocaleString(), totalPrice, orders })
                .then(res => {
                    this.setState({
                        orders: [], totalPrice: 0, confirmClassName: "confirm-order bg-success",
                        confirmMessage: "Your order has been ordered", confirmBox: true
                    });
                })
        } else {
            this.setState({
                confirmClassName: "confirm-order bg-danger",
                confirmMessage: "Please choose your product", confirmBox: true
            });
        }


    }

    cancelOrder() {
        this.setState({ orders: [], totalPrice: 0, confirmBox: false });
    }

    calculator() {
        if (this.state.orders.length > 0) {
            return this.state.orders.map((ordersMap) => {
                return (
                    <li>{ordersMap.product.product_name} x {ordersMap.quantity} = {ordersMap.quantity * ordersMap.product.product_price}
                        <button className="btn btn-dark" onClick={() => this.incrementOrder(ordersMap)}>+</button>
                        <button className="btn btn-dark" onClick={() => this.decrementOrder(ordersMap)}>-</button>
                    </li>
                )
            })
        } else {
            return <li>No Order Yet</li>

        }
    }



    render() {
        return (
            <div>
                <Header />

                {/* Menu Section 1 */}
                <section className="menu-section1">
                    <div className="menu-section1-video-cover">
                        <video className="menu-section1-video"
                            src="/resources/video/nagi-ramen-video.mp4" autoplay="autoplay" loop="loop" muted="muted">
                        </video>
                    </div>
                    <div className="menu-section1-bg-overlay"></div>
                    <div className="menu-section1-title">
                        Universal<br />
                        <span>Noodle</span><br />
                        Creator
                    </div>
                </section>

                {/* Menu Section 2 */}
                <section className="menu-section2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 menu-title">
                                Menu
                            </div>
                            <div className="col-md-8">
                                {Array.isArray(this.props.products) &&
                                    <div className="row">
                                        {this.getMenu()}
                                    </div>
                                }
                            </div>
                            <div className="col-md-4 calculator-col">
                                <p className="total-orders">Total Orders</p>
                                <ul>
                                    {this.calculator()}
                                </ul>
                                <p className="total-price">Total Price: ${this.state.totalPrice}</p>

                                {this.state.confirmBox == true
                                    ? <div className={this.state.confirmClassName}>{this.state.confirmMessage}</div>
                                    : ""
                                }

                                <button className="btn btn-block btn-primary" onClick={() => this.confirmOrder()}>Submit</button>
                                <button className="btn btn-block btn-danger" onClick={() => this.cancelOrder()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                {console.log(this.props.showState)}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { showState: state, menu: state.menu, products: state.product }
}


export default connect(mapStateToProps, { menuFetch, productsFetch })(Menu);