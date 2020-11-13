var vm = new Vue({
    el: '#app',
    data: {
        error: [],
        hoten: '',
        email: '',
        sodienthoai: '',
        ghichu: '',
        kiemtraloi: false,
        
    },
    methods: {
        kiemtradulieu: function(e){
            e.preventDefault();
            this.error=[];
            this.kiemtraloi = false;
            // kiem tra ho ten
            if (this.hoten == '') {
                this.error.push("vui long nhap ho ten!");
            } else if(this.hoten.length <5){
                this.error.push("nhap ho ten tu 5 ky tu tro len!");
            }
            // kiem tra email
            if(this.email == ""){
                this.error.push("nhap email !");
            } else if(this.email.length <5){
                this.error.push("nhap email tu 5 ky tu tro len!");
            }
            // kiem tra so dien thoai
            if(this.sodienthoai == ""){
                this.error.push("nhap so dien thoai !");
            } else if(this.sodienthoai.length != 10){
                this.error.push("so dien thoai khong hop le !");
            }
            //kiem tra loi xong
            this.kiemtraloi = true;
            return false;
         },
         hienThiThongBaoLoi: function() {
            if(this.kiemtraloi== false) {
                return false;
            }

         }
    }
});
