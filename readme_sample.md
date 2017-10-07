

#Sample Illustration

Live [readme-sample](https://react-hover-grid.herokuapp.com/readme-sample) on Heroku


### Image files

	 public/hover-grid-images/readme_sample_grid_images/1_east_van.png
	 public/hover-grid-images/readme_sample_grid_images/2_over_sasamat.png
	 public/hover-grid-images/readme_sample_grid_images/3_bc_snake.png
	 public/hover-grid-images/readme_sample_grid_images/4_amazon_in_bc.png

### readme\_sample\_grid\_data.js
	const readme_sample_grid_data = [
	  {
	    picture_src: '1_east_van.png'
	    , normal_area: 'north-east'
	    , hover_area: 'south-west'
	    , normal_style: 'color: red'
	    , normal_title_style: 'font-size: 23px; font-family: Arial;'
	    , normal_info_style: 'font-size: 19px; font-family: Arial;'
	    , hover_style: {color: 'green'}
	    , hover_title_style: {fontSize: '17px'}
	    , hover_info_style: {fontSize: '11px'}
	    , normal_title: 'East'
	    , normal_info: 'Vancouver'
	    , hover_title: 'East'
	    , hover_info: 'Van'
	  } , {
	    picture_src: '2_over_sasamat.png'
	    , hover_gradient: 'rgba(255, 0, 0, 0.1)'
	    , normal_gradient: 'rgba(0, 255, 0, 0.1)'
	    , link_url: 'https://www.vancouvertrails.com/trails/sasamat-lake/'
	  } , {
	    picture_src: '3_bc_snake.png'
	    , normal_area: 'north-east'
	    , hover_area: 'south-west'
	    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
	    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
	  } , {
	    picture_src: '4_amazon_in_bc.png'
	    , normal_title: 'css'
	    , normal_title_style: '.readme-sample-grid-css-style'
	    , filter_normal: 'hue-rotate(250deg)'
	    , filter_hover: 'hue-rotate(150deg)'
	  }
	]
	
	module.exports = {
	  hover_grid_id: 'readme_sample_grid_id'
	  , hover_grid_row_height: 234
	  , pictureTile_text: readme_sample_grid_data
	}


### readme\_sample\_grid\_entry.jsx

	import ReactHoverGrid from 'react-hover-grid'
	import React from 'react'
	import ReactDOM from 'react-dom'
	
	const readme_sample_grid_data = require('../grid-data/readme_sample_grid_data.js')
	const browser_helpers = require('../browser_helpers.js')
	const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')
	
	const readme_sample_grid_texts = readme_sample_grid_data.pictureTile_text
	const readme_sample_grid_widths = all_tile_image_widths['readme_sample_grid']
	const pictureTile_widths = browser_helpers.mergeWidthsWithText(readme_sample_grid_texts,
						             readme_sample_grid_widths, 'readme_sample_grid_images')
	readme_sample_grid_data['pictureTile_list'] = pictureTile_widths
	const readme_sample_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...readme_sample_grid_data} />
	  , document.getElementById(readme_sample_grid_data.hover_grid_id))
	
	module.exports = {readme_sample_grid_ReactHoverGrid}

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
