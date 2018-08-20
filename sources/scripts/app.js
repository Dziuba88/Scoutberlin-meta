$('[data-carousel=viewed]').owlCarousel({
  autoWidth:true,
  dots: false,
  navs: false,
  responsiveRefreshRate: 0,
  responsive : {
    0 : {items : 1},
    769 : {items : 2},
    961 : {items : 3},
    1241 : {items : 4},
  }
})