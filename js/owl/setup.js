$('.owl-carousel').owlCarousel({
  loop:true, //acrescenta efeito de loop, no caso de true o carousel fica infinito
  margin: 10, //margin entre os itens 
  nav:false, //botões de seta para navegação, preferi deixar false
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  } //está definindo o número de itens na janela a cada intervalo de dimensão para garantir que os elementos se adaptem aos diversos dispositivos 
})