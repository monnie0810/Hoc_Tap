// Hide submenus
$('#body-row .collapse').collapse('hide');

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left');

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }

    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}
// ------------------------------------------------------------------------------------------------------------------
// card sản phẩm
// sản phẩm hot 
Vue.component('news-item', {
    props: ['obj'],
    template: `
    <div class="card h-80 shadow-sm card-fa card-body ele-card">
        <div class="div_img_card">
            <img :src="obj.feature_image" class="card-img-top news-item-img image-card">
                <div class="overlay">
                    <div class="icon_thanhtoan">
                        <a href="">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div class="icon_xemthem">
                        <a href="../HtmlFile/mua_sanpham.html">
                            <i class="fa fa-search-plus" aria-hidden="true"></i> </a>
                        </a>
                    </div>
                </div>
        </div>      
        <div class="bodyCard">
                <h5 class="card-title text-center">{{ obj.tensp }}</h5>
                <span class="card-text giagiam">{{obj.giagiam}}</span>
                <p class="card-text">{{obj.giaban}}</p>
        </div>
    </div>
        `
})
var vm = new Vue({
    el: '#app',
    data: {
        listNews_sphamhot: [{
                id: 1,
                tensp: 'Đầm phối váy ren',
                feature_image: '../image/nu/dam_1.jpg',
                giaban: '320.000VND',
                giagiam: '',
                link: '#',
            },
            {
                id: 2,
                tensp: 'Áo khoác dài cổ lông',
                feature_image: '../image/nu/khoacnu_1.2.jpg',
                giaban: '560.000VND',
                giagiam: '640.000VND',
                link: '#',

            },
            {
                id: 3,
                tensp: 'Sơ mi trắng',
                feature_image: '../image/nam/somi_1.jpg',
                giaban: '200.000VND',
                giagiam: '250.000VND',
                link: '#',

            },
            {
                id: 4,
                tensp: 'Áo hoodie in gấu',
                feature_image: '../image/nam/thunnam_1.jpg',
                giaban: '170.000VND',
                giagiam: '',
                link: '#',

            }
        ],

        // dành cho nữ
        listNews_danhchonu: [{
                id: 1,
                tensp: 'Đầm phối váy ren',
                feature_image: '../image/nu/dam_1.jpg',
                giaban: '320.000VND',
                link: '#',
            },
            {
                id: 2,
                tensp: 'Sét đùi bèo cạp áo nơ eo',
                feature_image: '../image/nu/setnu2.jpg',
                giaban: '350.000VND',
                link: '#',

            },
            {
                id: 3,
                tensp: 'Váy cổ u ĐH hoa ốc',
                feature_image: '../image/nu/dam_4.jpg',
                giaban: '460.000VND',
                link: '#',

            },
            {
                id: 4,
                tensp: 'Áo ly vai xoắn ngực',
                feature_image: '../image/nu/aonu_2.jpg',
                giaban: '250.000VND',
                link: '#',

            }
        ],
        // dành cho nam 
        listNews_danhchonam: [{
                id: 1,
                tensp: 'Sơ mi trắng',
                feature_image: '../image/nam/somi_1.jpg',
                giaban: '200.000VND',
                giagiam: '350.000VND',
                link: '#',
            },
            {
                id: 2,
                tensp: 'Áo thun nam',
                feature_image: '../image/nam/thunnam_2.jpg',
                giaban: '150.000VND',
                giagiam: '250.000VND',
                link: '#',

            },
            {
                id: 3,
                tensp: 'Set bộ nam',
                feature_image: '../image/nam/bonam_1.jpg',
                giaban: '170.000VND',
                giagiam: '370.000VND',
                link: '#',

            },
            {
                id: 4,
                tensp: 'Áo khoác nam kaki',
                feature_image: '../image/nam/khoacnam_1.jpg',
                giaban: '180.000VND',
                giagiam: '330.000VND',
                link: '#',

            }
        ],
        // -------------------------------------
    },

});