

# PictureTile Class

### [Types](/readme_types.md)

Live [readme-sample](https://react-hover-grid.herokuapp.com/readme-sample) on Heroku

### picture\_src
>*Required*  
Type: `string`

Name of image file

	picture_tile = {picture_src: '1_east_van.png'}  


### normal\_area 
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'  
>Cascades from ReactHoverGrid.normal\_area if none

Location of text when image is not being hovered on 

	picture_tile = {...
                  , normal_area: 'north-east'}   

### hover\_area
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'  
>Cascades from ReactHoverGrid.hover\_area if none

Location of text when image is being hovered on 


	picture_tile = {...
                  , hover_area: 'south-west'}   





### normal\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.normal\_style if none

Style of text when image is not being hovered on 

	picture_tile = {...
                  , normal_style: 'font-size: 24px; color: #aabbcc'} 
	picture_tile = {...
                  , normal_style: '.css-style-from-file'}
	picture_tile = {...
                  , normal_style: {fontSize: '24px', color: '#aabbcc'} }

### hover\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.hover\_style if none

Style of text when image is being hovered on 

	picture_tile = {...
                  , hover_style: 'font-size: 24px; color: #aabbcc'} 
	picture_tile = {...
                  , hover_style: '.css-style-from-file'}
	picture_tile = {...
                  , hover_style: {fontSize: '24px', color: '#aabbcc'} }


### hover\_gradient
>Type: CSS\_GRADIENT  
>Cascades from ReactHoverGrid.hover\_gradient if none  
>Overridden by hover\_linear\_gradient 

Gradient over image when it is being hovered on 

	picture_tile = {...
                  , hover_gradient: 'rgba(255, 0, 0, 0.1)' }


### normal\_gradient
>Type: CSS\_GRADIENT  
>Cascades from ReactHoverGrid.normal\_gradient if none  
>Overridden by normal\_linear\_gradient 

Gradient over image when it is not being hovered on 

	picture_tile = {...
                  , normal_gradient: 'rgba(255, 0, 0, 0.1)' }

### hover\_linear\_gradient
>Type: LINEAR\_GRADIENT  
>Cascades from ReactHoverGrid.hover\_linear\_gradient if none  
>overrides hover\_gradient 

Linear gradient over image when it is being hovered on 

	picture_tile = {...
                  , hover_linear_gradient: {clear_percent: 50
                                          , gradient_rgba: 'rgba(255, 255, 255, 1)'} }


### normal\_linear\_gradient
>Type: LINEAR\_GRADIENT  
>Cascades from ReactHoverGrid.normal\_linear\_gradient if none  
>overrides normal\_gradient 

Linear gradient over image when it is not being hovered on 

	picture_tile = {...
                  , normal_linear_gradient: {clear_percent: 75 
							               , gradient_rgba: 'rgba(0, 0, 0, 0.99)'} }








### normal\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.normal\_title\_style if none  
Style of first line of text when image is not being hovered on 

	picture_tile = {...
                  , normal_title_style: 'font-size: 24px; color: #aabbcc'} 
	picture_tile = {...
                  , normal_title_style: '.css-style-from-file'}
	picture_tile = {...
                  , normal_title_style: {fontSize: '24px', color: '#aabbcc'} }



### normal\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.normal\_text\_style if none  
Style of second line of text when image is not being hovered on 

	picture_tile = {...
                  , normal_text_style: 'font-size: 12px; color: #112233'} 
	picture_tile = {...
                  , normal_text_style: '.css-style-from-file'}
	picture_tile = {...
                  , normal_text_style: {fontSize: '12px', color: '#112233'} }


### hover\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.hover\_title\_style if none  
Style of first line of text when image is being hovered on 

	picture_tile = {...
                  , hover_title_style: 'font-size: 24px; color: #aabbcc'} 
	picture_tile = {...
                  , hover_title_style: '.css-style-from-file'}
	picture_tile = {...
                  , hover_title_style: {fontSize: '24px', color: '#aabbcc'} }



### hover\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades from ReactHoverGrid.hover\_text\_style if none  
Style of second line of text when image is being hovered on

	picture_tile = {...
                  , hover_text_style: 'font-size: 12px; color: #112233'} 
	picture_tile = {...
                  , hover_text_style: '.css-style-from-file'}
	picture_tile = {...
                  , hover_text_style: {fontSize: '12px', color: '#112233'} }


### filter\_normal
>Type: CSS\_FILTER  
>Cascades from ReactHoverGrid.filter\_normal if none  
Filter when image is not being hovered on 

	picture_tile = {...
                  , filter_normal: 'hue-rotate(150deg)'} 

### filter\_hover
>Type: CSS\_FILTER  
>Cascades from ReactHoverGrid.filter\_hover if none  
Filter when image is being hovered on 

	picture_tile = {...
                  , filter_hover: 'hue-rotate(150deg)'}


### link\_url
>Type: `string`  

If no link_url then an image click will display the original image 

	picture_tile = {...
                  , link_url: 'http://www.heroku.com'}


### normal\_title
>Type: `string`  

The first line of text when image is not being hovered on

	picture_tile = {...
                  , normal_title: 'First line of normal text'}

### normal\_info
>Type: `string`  

The second line of text when image is not being hovered on

	picture_tile = {...
                  , normal_info: 'Second line of normal text'}

 

### hover\_title
>Type: `string`  

The first line of text when image is being hovered on

	picture_tile = {...
                  , hover_title: 'First line of hover text'}

### hover\_info
>Type: `string`  

The second line of text when image is being hovered on

	picture_tile = {...
                  , hover_info: 'Second line of hover text'}



### static\_col
>Type: number  
Always show image in this column, only one image can have this setting.  
Must be paired with static_row

	react_hover_grid = {...
       , static_col: 2 }

### static\_row
>Type: number  
Always show image in this row, only one image can have this setting.   
Must be paired with static_col

	react_hover_grid = {...
       , static_row: 2 }

## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
