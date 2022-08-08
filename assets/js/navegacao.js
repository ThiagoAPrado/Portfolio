$(document).ready(function(){

    $(".sobre-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".sobre").offset().top)
        })
    })

    $(".projetos-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".projetos").offset().top)
        })
    })
    
    $(".formacao-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".formacao").offset().top)
        })
    })

    $(".skills-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".skills").offset().top)
        })
    })

    $(".hobbies-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".hobbies").offset().top)
        })
    })

    $(".interesses-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".interesses").offset().top)
        })
    })

    $(".certificados-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".certificados").offset().top)
        })
    })

    $(".contato-nav").click(function(){
        $('html, body').animate({
            scrollTop: ($(".contato").offset().top)
        })
    })
    
})

