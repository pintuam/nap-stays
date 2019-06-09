<template>
<!--================ testimonial Area =================-->
        <section class="testimonial_area_two testi_inner_area" id="team">
          <div class="container-fluid">
              <div class="testimonial-carousel owl-carousel">
                  <div class="item" v-for="testimonial in items">
                      <div class="slider-item">
                          <i class="fa fa-quote-left"></i>
                          <p>{{testimonial.feedback}}</p>
                          <h4>{{testimonial.client}}</h4>
                          <h6>{{testimonial.designation}}, {{testimonial.company}}</h6>
                          <div class="img">
                              <img class="img-circle" :src="testimonial.imageUrl" alt="user">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!--================End testimonial Area =================-->
</template>

<script>
export default {
    name: 'testimonial',
    props: {
        items: {
            type: Array,
            require: true
        }
    }
}
</script>