import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      {
          name: 'Home',
          url: '#'
      },
      {
          name: 'Portfolio',
          menuItem: [
              {
                  name: 'portfolio',
                  url: '#'
              },
              {
                  name: 'Single portfolio',
                  url: '#'
              }
          ]
      },
      {
          name: 'Blog',
          menuItem: [
              {
                  name: 'blog 3 column',
                  url: '#'
              },
              {
                  name: 'Blog details',
                  url: '#'
              }
          ]
      },
      {
          name: 'Shop',
          image: '#',
          menuWithTitle: [
              {
                  title: 'shop layout',
                  url: '#',
                  menuItem: [
                      {
                          name: 'default shop',
                          url: '#'
                      }
                  ]
              },
              {
                  title: 'product details layout',
                  url: '#',
                  menuItem: [
                      {
                          name: 'tab style 1',
                          url: '#'
                      }
                  ]
              }
          ]
      },
      {
          name: 'pages',
          menuItem: [
              {
                  name: 'about',
                  url: '#'
              },
              {
                  name: 'testimonials',
                  subMenu: [
                      {
                          name: 'customer review',
                          url: '#'
                      }
                  ],
                  icon: 'zmdi zmdi-chevron-right'
              },
              {
                  name: 'shop',
                  url: '#'
              },
              {
                  name: 'shop sidebar',
                  url: '#'
              },
              {
                  name: 'product details',
                  url: '#'
              },
              {
                  name: 'cart',
                  url: '#'
              },
              {
                  name: 'wishlist',
                  url: '#'
              },
              {
                  name: 'checkout',
                  url: '#'
              },
              {
                  name: 'team',
                  url: '#'
              },
              {
                  name: 'login & register',
                  url: '#'
              }
          ]
      },
      {
          name: 'contact',
          url: '#'
      }
    ],
    testimonials: [
        {
            client: "Jonathon Smith",
            company: "Hazrat Group",
            designation: "CEO",
            imageUrl: require('@/assets/images/testimonial.png'),
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            client: "Jonathon Smith",
            company: "Hazrat Group",
            designation: "CEO",
            imageUrl: require("@/assets/images/testimonial.png"),
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            client: "Jonathon Smith",
            company: "Hazrat Group",
            designation: "CEO",
            imageUrl: require("@/assets/images/testimonial.png"),
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            client: "Jonathon Smith",
            company: "Hazrat Group",
            designation: "CEO",
            imageUrl: require("@/assets/images/testimonial.png"),
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
