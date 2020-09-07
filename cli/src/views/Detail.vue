<template>
  <div class="product_deals_featured">
    <div class="container">
      <h1><center>Product Detail</center></h1>

        <div class="row md-4" >
            <div class="col d-flex flex-lg-row flex-column align-items-center justify-content-center">
                <!-- product_deals -->
        <div class="product_deals">
          <div class="ribbon ribbon-top-right">
            <span>{{item.item_discount}}% OFF</span>
          </div>
          <div class="product_deals_title">{{item.item_desc}}
         </div>
          <div class="product_deals_slider_container">
<!-- product_deals Item -->
<div class=" product_deals_item">                         
 <div class="product_deals_content">
  <div class="card">
    <div class="card-header">
      <div class="card-title product_deals_item_name">{{item.item_name}}</div>
    </div>
    <img :src="item.item_photo" class="card-img-top">
    
                                
<div class="product_deals_info_line d-flex flex-row justify-content-start">
  <!-- <div class="product_deals_item_name">{{item.item_name}}
 </div> -->
    <div class="product_deals_item_price justify-">{{item.item_price}} MMK</div>
</div>

  <div class="card-footer">
    <div class="product_deals_item_name ml-auto">
        <button class="btn btn-success">Add to Cart</button>
    </div><br>
  <div class="product_deals_item_price ml-auto">
    <button class="btn btn-warning">CheckOut</button>
  </div></div></div></div></div></div></div></div></div></div></div>



</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'
  export default{
    data (){
      return{
        item: Object
      }
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        let id=this.$route.params.id;
        ItemService.getItem(id)
          .then(res=>{
            this.item=res.data.item
          })
          .catch(err=>{
            console.log('There was an error:',err.response)
          })
      }
    }
  }
</script>

<style type="text/css">
  div {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}
.ribbon {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: absolute
}
.ribbon::before,
.ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9
}
.ribbon span {
    position: absolute;
    display: block;
    width: 220px;
    padding: 6px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    font: 100 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    text-transform: uppercase;
    text-align: center
}
.ribbon-top-right {
    top: -10px;
    right: -10px
}
.ribbon-top-right::before,
.ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent
}
.ribbon-top-right::before {
    top: 0;
    left: 15px
}
.ribbon-top-right::after {
    bottom: 15px;
    right: 0
}
.ribbon-top-right span {
    left: -25px;
    top: 10px;
    transform: rotate(45deg)
}
.container {
    margin-top: 50px;
    margin-bottom: 50px
}
.product_deals_featured {
    width: 80%
}
.product_deals {
    width: 36%;
    margin-right: 7%;
    padding-top: 85px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 35px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px
}
.product_deals_title {
    position: absolute;
    top: 27px;
    left: 40px;
    font-size: 20px;
    font-weight: 500;
    color: #3498db;
}
.product_deals_slider_container {
    width: 100%
}
.product_deals_item {
    width: 100% !important
}
.product_deals_image {
    width: 100%
}
.product_deals_image img {
    width: 100%
}
.product_deals_content {
    margin-top: 33px
}
.product_deals_item_category a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5)
}
.product_deals_item_price_a {
    font-size: 10px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.6)
}
.product_deals_item_name {
    font-size: 20px;
    font-weight: 200;
    color: #000000
}
.product_deals_item_price {
    font-size: 20px;
    font-weight: 100;
    color: #df3b3b
}
.available {
    margin-top: 19px
}
.available_title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400
}
.available_title span {
    font-weight: 700
}
.sold_title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400
}
.sold_title span {
    font-weight: 700
}
@media only screen and (max-width: 1199px) {
    .product_deals_timer_box {
        width: 150px
    }
    .product_deals_timer_unit {
        font-size: 20px
    }
}
@media only screen and (max-width: 991px) {
    .product_deals {
        width: 100%;
        margin-right: 0px
    }
}
@media only screen and (max-width: 575px) {
    .product_deals {
        padding-left: 15px;
        padding-right: 15px
    }
    .product_deals_title {
        left: 15px;
        font-size: 16px
    }
    .product_deals_slider_nav_container {
        right: 5px
    }
    .product_deals_item_name,
    .product_deals_item_price {
        font-size: 20px
    }
    .product_deals_item_category a,
    .product_deals_item_price_a {
        font-size: 12px
    }
    .product_deals_timer_unit {
        font-size: 16px
    }
}
</style>