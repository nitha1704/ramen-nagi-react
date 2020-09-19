import React from 'react';
import $ from 'jquery';

// Components
import Header from '../components/header';
import Footer from '../components/footer';

class Home extends React.Component {

    // componentDidMount() {
    //     function headerExpandedMenuFilter() {
    //         $('.header-menu-expand-item4 li').hover(function () {
    //             const data_filter = $(this).attr('data-filter');

    //             $(this).parent('ul').find('li').removeClass('active');
    //             $(this).addClass('active');


    //             $(this).parents('.header-menu-expand').find('.header-menu-expand-item3 .image-item img').removeClass('active');
    //             $(this).parents('.header-menu-expand').find('.header-menu-expand-item3 .image-item img[img-filter=' + data_filter + '] ').addClass('active');
    //         })
    //     }

    //     function openCloseExpandedMenu() {

    //         $('.hamburger-menu').click(function () {
    //             $('.header-menu-expand').addClass('active');
    //             $('.header-menu-expand-item3').addClass('active');

    //             setTimeout(() => {
    //                 $('.header-menu-expand-item4').addClass('active');
    //             }, 300);


    //             ///////////////////// Method 1 JQuery /////////////////////
    //             $('.header-menu-expand-item4 ul li').each(function (i, item) {
    //                 const index2 = i + 1;
    //                 const index3 = index2 * 0.2;
    //                 const index4 = 'pucker2 ' + index3 + 's';
    //                 $(this).css({ 'animation': index4 })
    //             })


    //             ///////////////////// Method 3 Javascript /////////////////////
    //             // var get_item = document.querySelectorAll('.header-menu-expand-item4 ul li');

    //             // get_item.forEach((item,index)=>{
    //             //     const index2 = index + 1;
    //             //     const index3 = index2 * 0.2;
    //             //     item.style.animation = 'pucker2 ' + index3 + 's';
    //             //     console.log(index3)
    //             // })

    //         })

    //         $('.close-expanded-menu').click(function () {
    //             $('.header-menu-expand').removeClass('active');
    //             $('.header-menu-expand-item3').removeClass('active');
    //             $('.header-menu-expand-item4').removeClass('active');

    //             $('.header-menu-expand-item4 ul li').removeAttr('style')
    //         })
    //     }
    //     openCloseExpandedMenu();
    //     headerExpandedMenuFilter();
    // }

    render() {
       
        return (
            <div>
                <Header />
                <section className="home-section1">
                    <div className="home-section1-overlay"></div>
                    <div className="home-section1-item1">
                        <p>Ramen and BeyondXXYY</p>
                    </div>
                </section>

                <section className="home-section2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 home-section2-item1">
                                <p className="home-section2-item1-1">
                                    <span>Traditional Ramen,</span><br />
                                    <span>Bold Flavor</span>
                                </p>
                            </div>
                            <div className="col-md-6 home-section2-item2">
                                <p className="home-section2-item2-1">
                                    We are known for our perfect noodles and authentic, yet cutting-edge, flavors of broth. In addition to our four signature ramen flavors, we launch new “Limited King” ramen varieties to highlight our creativity and push the (delicious) boundaries. Experiment freely with flavors while adding your own personal touch, or leave it up to our master ramen chef to craft your bowl.
                                </p>
                                <p className="home-section2-item2-2">"Delicious food is a shared language."</p>
                                <p className="home-section2-item2-3">- Ramen Master Chef Satoshi Ikuta</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-section3">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-12 home-section3-item1">
                                <p>Our Ramen</p>
                            </div>

                            <div className="col-md-6 home-section3-item2">
                                <div className="row">
                                    <div className="col-md-6 ramen-product">
                                        <p>Original King</p>
                                        <div className="underline">
                                            <div className="underline-dot"></div>
                                        </div>
                                        <p>Luscious signature<br />
                                            tonkotsu pork-broth.</p>
                                        <p>Award-winning tonkotsu pork-broth prepared in the traditional method, mouth-wateringly rich, fresh, and aromatic; special handcrafted noodles and classic Nagi pork chashu.</p>
                                    </div>
                                    <div className="col-md-6 ramen-product-img">
                                        <img src="resources/images/ramen-2.png" alt="" className="img-fit" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 home-section3-item3">
                                <div className="row">
                                    <div className="col-md-6 ramen-product">
                                        <p>Red King</p>
                                        <div className="underline">
                                            <div className="underline-dot"></div>
                                        </div>
                                        <p>The ultimate in savory<br />
                                            spiciness.</p>
                                        <p>A striking blend of garlic, chili oil, and cayenne pepper in a velvety broth; topped by a tempting ball of miso-infused minced pork and select Nagi cayenne,with tender chashu.</p>
                                    </div>
                                    <div className="col-md-6 ramen-product-img">
                                        <img src="resources/images/ramen-5.png" alt="" className="img-fit" />
                                    </div>
                                </div>
                            </div>

                            <div className="row row2">
                                <div className="col-md-6 home-section3-item4">
                                    <div className="row">
                                        <div className="col-md-6 ramen-product">
                                            <p>Black King</p>
                                            <div className="underline">
                                                <div className="underline-dot"></div>
                                            </div>
                                            <p>Sumptuous jet-black aroma<br />
                                            and flavor.</p>
                                            <p>Fragrant blackened garlic and calamari ink in a silky broth with succulent chashu; finished with a ball of minced pork, black sesame, and Nagi spices that is irresistibly complex.</p>
                                        </div>
                                        <div className="col-md-6 ramen-product-img">
                                            <img src="resources/images/ramen-3.png" alt="" className="img-fit" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 home-section3-item5">
                                <div className="row">
                                    <div className="col-md-6 ramen-product">
                                        <p>Green King</p>
                                        <div className="underline">
                                            <div className="underline-dot"></div>
                                        </div>
                                        <p>Nagi’s fusion of gourmet<br />
                                            cultures.</p>
                                        <p>A marriage of fresh basil and olive oil with delectable tonkotsu broth in a truly unique combination; lavishly garnished with grated parmesan cheese and richly marbled chashu.</p>
                                    </div>
                                    <div className="col-md-6 ramen-product-img">
                                        <img src="resources/images/ramen-4.png" alt="" className="img-fit" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 home-section3-item6">
                                <div className="row">
                                    <div className="col-md-6 ramen-product">
                                        <p>Veggie King</p>
                                        <div className="underline">
                                            <div className="underline-dot"></div>
                                        </div>
                                        <p>A vegetarian modern classic</p>
                                        <p>Savory Japanese soup stock expertly blended with cauliflower purée, featuring hashed potato "chashu" and accented with shiitake mushrooms and spinach; Nagi's amazing vegetarian ramen. </p>
                                    </div>
                                    <div className="col-md-6 ramen-product-img">
                                        <img src="resources/images/ramen-1.png" alt="" className="img-fit" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default Home;