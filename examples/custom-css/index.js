var gui     = require( '../../' )     // stand alone: replace with  require( 'easy-web-app' ) 
var express = require( 'express' )


// define to load /css-custom/custom.css from local folder
gui.getExpress().use( '/css-custom', express.static( __dirname ) )
  

// define a main page
var mainPage = gui.init()
mainPage.title = 'Customize CSS Demo'
mainPage.header.logoText = 'Customize CSS Demo'

mainPage.addView( { 'id':'row1view', 'title':'Row 1 View', 'height':'100px' } )
mainPage.addView( { 'id':'row2view', 'title':'Row 2 View', 'height':'100px' } )
