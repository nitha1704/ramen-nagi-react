$(document).ready(function () {
    //deleteTotalOrder()
    // headerExpandedMenuFilter();
    // openCloseExpandedMenu();
    // test();
    
})

$(window).scroll(function () {
    scrollHeader();
})

function test() {
    $('.menu-section1-title').hover(function () {
        alert('weporjk')
    })
}


function scrollHeader() {
    const window_scrollTop = $(window).scrollTop();
    // const home_section_item1 = $('.home-section1-item1').offset().top;

    if (window_scrollTop > 200) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
}

function headerExpandedMenuFilter() {
    $('.header-menu-expand-item4 li').hover(function () {
        const data_filter = $(this).attr('data-filter');

        $(this).parent('ul').find('li').removeClass('active');
        $(this).addClass('active');


        $(this).parents('.header-menu-expand').find('.header-menu-expand-item3 .image-item img').removeClass('active');
        $(this).parents('.header-menu-expand').find('.header-menu-expand-item3 .image-item img[img-filter=' + data_filter + '] ').addClass('active');
    })
}



function openCloseExpandedMenu() {

    $('.hamburger-menu').click(function () {
        $('.header-menu-expand').addClass('active');
        $('.header-menu-expand-item3').addClass('active');

        setTimeout(() => {
            $('.header-menu-expand-item4').addClass('active');
        }, 300);


        ///////////////////// Method 1 JQuery /////////////////////
        $('.header-menu-expand-item4 ul li').each(function (i, item) {

            const index2 = i + 1;
            const index3 = index2 * 0.2;
            const index4 = 'pucker2 ' + index3 + 's';
            $(this).css({ 'animation': index4 })
        })


        ///////////////////// Method 3 Javascript /////////////////////
        // var get_item = document.querySelectorAll('.header-menu-expand-item4 ul li');

        // get_item.forEach((item,index)=>{
        //     const index2 = index + 1;
        //     const index3 = index2 * 0.2;
        //     item.style.animation = 'pucker2 ' + index3 + 's';
        //     console.log(index3)
        // })

    })

    $('.close-expanded-menu').click(function () {
        $('.header-menu-expand').removeClass('active');
        $('.header-menu-expand-item3').removeClass('active');
        $('.header-menu-expand-item4').removeClass('active');

        $('.header-menu-expand-item4 ul li').removeAttr('style')
    })
}


function deleteTotalOrder() {
    $('.btn-danger').click(function () {
        alert('wer')
    })
}