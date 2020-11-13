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
        listNews_sanpham: [{
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

            },
            {
                id: 5,
                tensp: 'Đầm phối váy ren',
                feature_image: '../image/nu/dam_1.jpg',
                giaban: '320.000VND',
                link: '#',
            },
            {
                id: 6,
                tensp: 'Sét đùi bèo cạp áo nơ eo',
                feature_image: '../image/nu/setnu2.jpg',
                giaban: '350.000VND',
                link: '#',

            },
            {
                id: 7,
                tensp: 'Váy cổ u ĐH hoa ốc',
                feature_image: '../image/nu/dam_4.jpg',
                giaban: '460.000VND',
                link: '#',

            },
            {
                id: 8,
                tensp: 'Áo ly vai xoắn ngực',
                feature_image: '../image/nu/aonu_2.jpg',
                giaban: '250.000VND',
                link: '#',

            },
            {
                id: 9,
                tensp: 'Set bộ nam',
                feature_image: '../image/nam/bonam_1.jpg',
                giaban: '170.000VND',
                giagiam: '370.000VND',
                link: '#',

            },
            {
                id: 10,
                tensp: 'Áo khoác dài cổ lông',
                feature_image: '../image/nu/khoacnu_1.2.jpg',
                giaban: '560.000VND',
                giagiam: '640.000VND',
                link: '#',

            },
            {
                id: 11,
                tensp: 'Sơ mi trắng',
                feature_image: '../image/nam/somi_1.jpg',
                giaban: '200.000VND',
                giagiam: '250.000VND',
                link: '#',

            },
            {
                id: 12,
                tensp: 'Áo hoodie in gấu',
                feature_image: '../image/nam/thunnam_1.jpg',
                giaban: '170.000VND',
                giagiam: '',
                link: '#',

            },

        ],
        // -------------------------------------
    },

});