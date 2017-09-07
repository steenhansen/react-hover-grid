

#React Hover Grid Component


 ![visual explanation](https://react-hover-grid.herokuapp.com/react_hover_grid.jpg)

Live [gmap-dragdrop-react examples](https://react-hover-grid.herokuapp.com/).

Full [webserver on GitHub with examples](https://github.com/steenhansen/react-hover-grid-examples).

## Install

$ npm install --save react-hover-grid

$ yarn add --save react-hover-grid

## JSX

	import ReactHoverGrid from 'react-hover-grid'
	import React from 'react'
	import ReactDOM from 'react-dom'
	
	const city_grid_data = require('../grid-data/city_grid_data.js')
	const picture_tile_widths = require('../picture_tile_widths.js')
	const all_tile_image_widths = require('../grid-data/ALL_TILE_IMAGE_WIDTHS.js')
	const city_grid_texts =  city_grid_data.pictureTile_text
	const city_grid_widths =  all_tile_image_widths['city_grid']
	
	const pictureTile_widths= picture_tile_widths.mergeWidthsWithText(city_grid_texts, city_grid_widths, 'city_grid_images')
	city_grid_data['pictureTile_list']=pictureTile_widths
	const city_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...city_grid_data} />
	                                      , document.getElementById(city_grid_data.hover_grid_id))
	module.exports = {city_grid_ReactHoverGrid}

## Data

	const city_grid_data = [{
    picture_src: 'amc_spirit.jpg'
    , filter_hover: 'grayscale(1)'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: ' Spirit'
    , hover_title: 'by AMC '
    , normal_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#9BC7EC'}
    , hover_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#000'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(155, 199, 236, 0.99)'}
    , normal_linear_gradient: {clear_percent: 60, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
	 }, {
    picture_src: 'canada_bernie.jpg'
    , filter_hover: 'sepia(1)'
    , normal_area: 'north'
    , hover_area: 'south'
    , normal_title: 'Bernie'
    , hover_title: 'Goes to Canada'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  	}, {
    picture_src: 'christmas_cranes.jpg'
    , filter_hover: 'hue-rotate(90deg)'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , normal_title: 'Christmas Cranes'
    , normal_info: 'in Burquitlam'
    , hover_title: 'Como Lake &'
    , hover_info: 'North Road'
    , normal_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#8341D9'}
    , hover_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#2193EC'}
    , hover_linear_gradient: {clear_percent: 30, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  	}, {
    picture_src: 'denver_nukes.jpg'
    , filter_hover: 'grayscale(1)'
    , normal_area: 'east'
    , hover_area: 'west'
    , normal_title: 'Denver'
    , normal_info: 'Nukes'
    , hover_title: 'Wings Over'
    , hover_info: 'the Rockies'
    , normal_style: {fontFamily: "'Share Tech Mono', monospace", fontSize: '36px', color: 'white'}
    , hover_linear_gradient: {clear_percent: 10, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  	}, {
    picture_src: 'hello_kitty_skytrain.jpg'
    , filter_hover: 'hue-rotate(90deg)'
    , normal_area: 'south-east'
    , hover_area: 'north-west'
    , normal_title: 'Hello'
    , normal_info: 'Kitty'
    , hover_title: 'Broadway'
    , hover_info: 'Station'
    , normal_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: '#856771'}
    , hover_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(133, 103, 113, 0.99)'}
    , normal_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  	}, {
    picture_src: 'pkd_tombstone.jpg'
    , filter_hover: 'sepia(1)'
    , normal_area: 'south'
    , hover_area: 'north'
    , normal_title: "Philip K. Dick"
    , hover_title: 'Fort Morgan, Co'
    , normal_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '32px', fontWeight: 'bolder', color: 'white'}
    , hover_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '18px', fontWeight: 'bolder', color: 'white'}
  	}, {
    picture_src: 'kiwi_airforce.jpg'
    , filter_hover: 'grayscale(1)'
    , normal_area: 'south-west'
    , hover_area: 'north-east'
    , normal_title: 'New Zealand'
    , normal_info: 'Airforce'
    , hover_title: 'Tauranga'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: '#102F66'}
  	}, {
    picture_src: 'new_west.jpg'
    , filter_hover: 'hue-rotate(90deg)'
    , normal_area: 'north-east'
    , hover_area: 'east'
    , normal_title: 'New Westminster'
    , normal_style: {fontFamily: "'Allerta Stencil', sans-serif", fontSize: '18px', color: '#7D3529'}
  	}, {
    picture_src: 'sfu_observatory.jpg'
    , filter_hover: 'sepia(1)'
    , hover_title: 'Trottier Observatory'
    , hover_info: 'at SFU'
    , normal_style: {fontFamily: "'Carter One', cursive", fontSize: '24px', color: 'red'}
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'
  	}, {
    picture_src: 'i_like_coffee.jpg'
    , filter_hover: 'grayscale(1)'
    , normal_title: 'Crystal Mall'
    , hover_title: 'Food Court'
    , normal_style: {fontFamily: "'Fredericka the Great', cursive", fontSize: '24px', color: 'white'}
  	}]

	module.exports = {
  		hover_grid_id: 'city_grid_id'
  		, hover_grid_row_height: 222
  		, pictureTile_text:city_grid_data
  		, hor_text_edge: 9
  		, tile_edge: 2
  		, max_rows: 2
  		, google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'
	}

## Attribution

- This project is a spruced up copy of [https://github.com/benhowell/react-grid-gallery](https://github.com/benhowell/react-grid-gallery) which can be seen in action here [https://github.com/benhowell/react-grid-gallery](https://github.com/benhowell/react-grid-gallery)

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT ©

