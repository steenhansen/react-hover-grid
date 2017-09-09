

#React Hover Grid Component

 ![visual explanation](https://react-hover-grid.herokuapp.com/react_hover_grid.jpg)

An automatically resizing React gallery component with many hovering capabilities. [Server side rendering](https://react-hover-grid.herokuapp.com/fast_grid) is also possible. No need to enter images dimensions as Gulp files control all image sizes. Can also work [inside a react-split-pane](https://react-hover-grid.herokuapp.com/sizeable_grid) component, or be contained in a div [which changes size](https://react-hover-grid.herokuapp.com/mountains_grid) via timers.

This component is virtually impossible to use without Gulp and Webpack.

Live [gmap-dragdrop-react examples](https://react-hover-grid.herokuapp.com/).

Full [webserver on GitHub with examples](https://github.com/steenhansen/react-hover-grid-examples).

## Install

$ yarn add react-hover-grid --save

$ npm install react-hover-grid --save

## JSX

	'use strict'  // jsx entry file

	import ReactHoverGrid from 'react-hover-grid'
	import React from 'react'
	import ReactDOM from 'react-dom'

	const tiny_grid_data = require('../grid-data/tiny_grid_data.js')
	const picture_tile_widths = require('../picture_tile_widths.js')
	const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

	const tiny_grid_texts =  tiny_grid_data.pictureTile_text
	const tiny_grid_widths =  all_tile_image_widths['tiny_grid']
	const pictureTile_widths= picture_tile_widths.mergeWidthsWithText(tiny_grid_texts, tiny_grid_widths, 'tiny_grid_images')
	tiny_grid_data['pictureTile_list']=pictureTile_widths
	const tiny_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...tiny_grid_data} />
                                               , document.getElementById(tiny_grid_data.hover_grid_id))

	module.exports = {tiny_grid_ReactHoverGrid}


## Data

	'use strict'  // data file

	const tiny_grid_data = [{
    	picture_src: 'canada_bernie.jpg'
    	, filter_hover: 'sepia(1)'
    	, normal_area: 'north-west'
    	, hover_area: 'south-east'
    	, normal_title: 'Bernie'
    	, hover_title: 'HONDA'
    	, normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    	, hover_style: {fontFamily: "'Zilla Slab', serif", fontSize: '30px', color: 'black'}
    	, hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    	, normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  	}]

	module.exports = {
  		hover_grid_id: 'tiny_grid_id'
  		, hover_grid_row_height: 234
  		, pictureTile_text:tiny_grid_data
  		, max_rows:2
  		, google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Zilla+Slab:700'
	}

## Attribution

- This project is a spruced up copy of [https://github.com/benhowell/react-grid-gallery](https://github.com/benhowell/react-grid-gallery) which can be seen in action here [https://benhowell.github.io/react-grid-gallery/](https://benhowell.github.io/react-grid-gallery/)

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT ©

