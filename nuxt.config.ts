import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    head: {
        // script: [
        //     {src:'/assets/js/jquery-1.12.4.min.js', body: true},
        //     {src:'/assets/js/isotope.pkg.min.js', body: true},
        //     {src:'/assets/js/wow.min.js', body: true},
        //     {src:'/assets/js/jquery.slick.min.js', body: true},
        //     {src:'/assets/js/lightgallery.min.js', body: true},
        //     {src:'/assets/js/jquery.counter.min.js', body: true},
        //     {src:'/assets/js/select2.min.js', body: true},
        //     {src:'/assets/js/ripples.min.js', body: true},
        //     {src:'/assets/js/jquery-ui.min.js', body: true},
        //     {src:'/assets/js/animated-headline.js', body: true},
        //     {src:'/assets/js/parallax.min.js', body: true},
        //     {src:'/assets/js/main.js', body: true}
        // ],

        // link: [
        //     {rel:"stylesheet", href:"assets/css/fontawesome.min.css"},
        //     {rel:"stylesheet", href:"assets/css/bootstrap.min.css"},
        //     {rel:"stylesheet", href:"assets/css/lightgallery.min.css"},
        //     {rel:"stylesheet", href:"assets/css/select2.min.css"},
        //     {rel:"stylesheet", href:"assets/css/slick.css"},
        //     {rel:"stylesheet", href:"assets/css/jquery-ui.min.css"},
        //     {rel:"stylesheet", href:"assets/css/animate.min.css"},
        //     {rel:"stylesheet", href:"assets/css/animated-headline.css"},
        //     {rel:"stylesheet", href:"assets/css/style.css"},
        // ]
    },
    // plugins: [
    //     '~/plugins/jquery-1.12.4.min.js',
    //     '~/plugins/isotope.pkg.min.js',
    //     '~/plugins/wow.min.js',
    //     '~/plugins/jquery.slick.min.js',
    //     '~/plugins/lightgallery.min.js',
    //     '~/plugins/jquery.counter.min.js',
    //     '~/plugins/select2.min.js',
    //     '~/plugins/ripples.min.js',
    //     '~/plugins/jquery-ui.min.js',
    //     '~/plugins/animated-headline.js',
    //     '~/plugins/parallax.min.js',
    //     '~/plugins/main.js',
    // ],

    // script: [
    //     '@/assest/js/jquery-1.12.4.min.js',
    //     '@/assest/js/isotope.pkg.min.js',
    //     '@/assest/js/wow.min.js',
    //     '@/assest/js/jquery.slick.min.js',
    //     '@/assest/js/lightgallery.min.js',
    //     '@/assest/js/jquery.counter.min.js',
    //     '@/assest/js/select2.min.js',
    //     '@/assest/js/ripples.min.js',
    //     '@/assest/js/jquery-ui.min.js',
    //     '@/assest/js/animated-headline.js',
    //     '@/assest/js/parallax.min.js',
    //     '@/assest/js/main.js',
    // ],
    css: [
        '@/assets/css/fontawesome.min.css',
        '@/assets/css/bootstrap.min.css',
        '@/assets/css/lightgallery.min.css',
        '@/assets/css/select2.min.css',
        '@/assets/css/slick.css',
        '@/assets/css/jquery-ui.min.css',
        '@/assets/css/animate.min.css',
        '@/assets/css/animated-hadline.css',
        '@/assets/css/style.css',  
    ],

    build: {
        transpile: ['vue-tooltip']
    }
})
