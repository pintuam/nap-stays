<template>
  <div class="wrapper fixed__footer">
    <CustomHeader/>
    <!--================Service Six Area =================-->
        <section class="service_six_area p_100" id="service">
        	<div class="container">
        		<div class="main_title">
                    <h2>OUR SERVICE</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                </div>
        		<div class="row service_s_inner">
        			<div class="col-md-3 col-sm-4 col-xs-6">
        				<div class="ss_item">
        					<img src="@/assets/images/icons/ss-icon-1.png" alt="">
        					<h4>Cloud Hosting</h4>
        					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        				</div>
        			</div>
        			<div class="col-md-3 col-sm-4 col-xs-6">
        				<div class="ss_item">
        					<img src="@/assets/images/icons/ss-icon-2.png" alt="">
        					<h4>Web Hosting</h4>
        					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        				</div>
        			</div>
        			<div class="col-md-3 col-sm-4 col-xs-6">
        				<div class="ss_item">
        					<img src="@/assets/images/icons/ss-icon-3.png" alt="">
        					<h4>Share Hosting</h4>
        					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        				</div>
        			</div>
        			<div class="col-md-3 col-sm-4 col-xs-6">
        				<div class="ss_item">
        					<img src="@/assets/images/icons/ss-icon-4.png" alt="">
        					<h4>VPS Server</h4>
        					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
        <!--================End Service Six Area =================-->
        <testimonial :items="testimonials"></testimonial>
  </div>
</template>

<script>
import CustomHeader from '@/views/Layout/CustomHeader.vue'
import Testimonial from '@/components/Testimonial.vue'
import { mapState } from 'vuex';

  export default {
    name: 'home',
  components: {
    CustomHeader,
    Testimonial
  },
  computed: {
      ...mapState(['testimonials'])
  }
  }
</script>
