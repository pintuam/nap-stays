<template>
<!-- Body main wrapper start -->
    <div>
        <!-- Start Header Style -->
        <header id="header" class="htc-header header--3 bg__white">
            <!-- Start Mainmenu Area -->
            <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div class="logo">
                                <a href="javascript:void(0)">
                                    <img src="@/assets/images/logo/logo.png" alt="logo">
                                </a>
                            </div>
                        </div>
                        <!-- Start MAinmenu Ares -->
                        <div class="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav class="mainmenu__nav hidden-xs hidden-sm">
                                <ul class="main__menu" v-if="menus.length">
                                    <li class="drop" v-for="menu in menus" v-if="menu.name">
                                        <a :href="menu.url" v-if="menu.url">{{menu.name}}</a>
                                        <a v-else>{{menu.name}}</a>
                                        <ul class="dropdown" v-if="menu.menuItem">
                                            <li v-for="submenuItem in menu.menuItem" v-if="submenuItem.name">
                                                <a :href="submenuItem.url" v-if="submenuItem.url">{{submenuItem.name}}</a>
                                                <a :href="submenuItem.url" v-else>{{submenuItem.name}}<span><i class="zmdi zmdi-chevron-right"></i></span></a>
                                                <ul class="lavel-dropdown" v-if="submenuItem.subMenu">
                                                    <li v-for="nestedMenu in submenuItem.subMenu" v-if="nestedMenu.name"><a :href="nestedMenu.url">{{nestedMenu.name}}</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="dropdown mega_dropdown" v-if="menu.menuWithTitle">
                                            <li v-for="menuTitle in menu.menuWithTitle" v-if="menuTitle.title"><a class="mega__title" :href="menuTitle.url">{{menuTitle.title}}</a>
                                                <ul class="mega__item" v-for="menuItem in menuTitle.menuItem" v-if="menuTitle.menuItem">
                                                    <li><a :href="menuItem.url">{{menuItem.name}}</a></li>
                                                </ul>
                                            </li>
                                            
                                            <li>
                                                <ul class="mega__item">
                                                    <li>
                                                        <div class="mega-item-img">
                                                            <a href="#">
                                                                <img src="@/assets/images/feature-img/3.png" alt="">
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- End MAinmenu Ares -->
                        <!--<div class="col-md-2 col-sm-4 col-xs-3">  
                            <ul class="menu-extra">
                                <li class="search search__open hidden-xs"><span class="ti-search"></span></li>
                                <li><a href="#"><span class="ti-user"></span></a></li>
                                <li class="cart__menu"><span class="ti-shopping-cart"></span></li>
                                <li class="toggle__menu hidden-xs hidden-sm"><span class="ti-menu"></span></li>
                            </ul>
                        </div>-->
                    </div>
                    <div class="mobile-menu-area"></div>
                </div>
            </div>
            <!-- End Mainmenu Area -->
        </header>
        <!-- End Header Style -->
        
          <div class="body__overlay"></div>
          <!-- Start Offset Wrapper -->
          <div class="offset__wrapper">
              <!-- Start Search Popap -->
              <div class="search__area">
                  <div class="container" >
                      <div class="row" >
                          <div class="col-md-12" >
                              <div class="search__inner">
                                  <form action="#" method="get">
                                      <input placeholder="Search here... " type="text">
                                      <button type="submit"></button>
                                  </form>
                                  <div class="search__close__btn">
                                      <span class="search__close__btn_icon"><i class="zmdi zmdi-close"></i></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- End Search Popap -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CustomHeader',
    computed: {
        ...mapState(['menus'])
    }
}
</script>