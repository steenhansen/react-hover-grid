

#ReactHoverGrid Class

### [Types](/readme_types.md)

Live [readme-sample](https://react-hover-grid.herokuapp.com/readme-sample) on Heroku


### hover\_grid\_id
>*Required*  
Type: `string`

Id of containing element

	react_hover_grid = {hover_grid_id: 'readme_sample_grid_id'}




### hover\_grid\_row\_height
>*Required*  
Type: `string`

Display height of all images in grid 

	react_hover_grid = {...
                      , hover_grid_row_height: 234}



### pictureTile\_text
>*Required*  
Type: `array`

Array of PictureTiles 

	react_hover_grid = {...
                       , pictureTile_text: readme_sample_grid_data}



### ssr\_grid\_id
>Type: `string`

Server Side Rendering id of reactHoverGrid, should be one character like 's' so css styles stay small

	react_hover_grid = {...
				      , ssr_grid_id: 's'}


### normal\_area 
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'  
>Cascades to PictureTile.normal\_area if none

Location of text when image is not being hovered on   
	
	react_hover_grid = {...    
                      , normal_area: 'north-east'}     

### hover\_area
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'  
>Cascades to PictureTile.hover\_area if none

Location of text when image is being hovered on 


	react_hover_grid = {...
                      , hover_area: 'south-west'}   




### normal\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.normal\_style if none

Style of text when image is not being hovered on 

	react_hover_grid = {...
                  , normal_style: 'font-size: 24px; color: #aabbcc'} 
	react_hover_grid = {...
                  , normal_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , normal_style: {fontSize: '24px', color: '#aabbcc'} }

### hover\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.hover\_style if none

Style of text when image is being hovered on 

	react_hover_grid = {...
                  , hover_style: 'font-size: 24px; color: #aabbcc'} 
	react_hover_grid = {...
                  , hover_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , hover_style: {fontSize: '24px', color: '#aabbcc'} }


### hover\_gradient
>Type: CSS\_GRADIENT  
>Cascades to PictureTile.hover\_gradient if none  
>Overridden by hover\_linear\_gradient 

Gradient over image when it is being hovered on 

	react_hover_grid = {...
                  , hover_gradient: 'rgba(255, 0, 0, 0.1)' }


### normal\_gradient
>Type: CSS\_GRADIENT  
>Cascades to PictureTile.normal\_gradient if none  
>Overridden by normal\_linear\_gradient 

Gradient over image when it is not being hovered on 

	react_hover_grid = {...
                  , normal_gradient: 'rgba(255, 0, 0, 0.1)' }

### hover\_linear\_gradient
>Type: LINEAR\_GRADIENT  
>Cascades to PictureTile.hover\_linear\_gradient if none  
>overrides hover\_gradient 

Linear gradient over image when it is being hovered on 

	react_hover_grid = {...
                  , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'} }


### normal\_linear\_gradient
>Type: LINEAR\_GRADIENT  
>Cascades to PictureTile.normal\_linear\_gradient if none  
>overrides normal\_gradient 

Linear gradient over image when it is not being hovered on 

	react_hover_grid = {...
                  , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'} }








### normal\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.normal\_title\_style if none  
Style of first line of text when image is not being hovered on 

	react_hover_grid = {...
                  , normal_title_style: 'font-size: 24px; color: #aabbcc'} 
	react_hover_grid = {...
                  , normal_title_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , normal_title_style: {fontSize: '24px', color: '#aabbcc'} }



### normal\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.normal\_text\_style if none  
Style of second line of text when image is not being hovered on 

	react_hover_grid = {...
                  , normal_text_style: 'font-size: 12px; color: #112233'} 
	react_hover_grid = {...
                  , normal_text_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , normal_text_style: {fontSize: '12px', color: '#112233'} }


### hover\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.hover\_title\_style if none  
Style of first line of text when image is being hovered on 

	react_hover_grid = {...
                  , hover_title_style: 'font-size: 24px; color: #aabbcc'} 
	react_hover_grid = {...
                  , hover_title_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , hover_title_style: {fontSize: '24px', color: '#aabbcc'} }



### hover\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  
>Cascades to PictureTile.hover\_text\_style if none  
Style of second line of text when image is being hovered on

	react_hover_grid = {...
                  , hover_text_style: 'font-size: 12px; color: #112233'} 
	react_hover_grid = {...
                  , hover_text_style: '.css-style-from-file'}
	react_hover_grid = {...
                  , hover_text_style: {fontSize: '12px', color: '#112233'} }


### filter\_normal
>Type: CSS\_FILTER  
>Cascades to PictureTile.filter\_normal if none  
Filter when image is not being hovered on 

	react_hover_grid = {...
                  , filter_normal: 'hue-rotate(150deg)'} 

### filter\_hover
>Type: CSS\_FILTER
>Cascades to PictureTile.filter\_hover if none  
Filter when image is being hovered on 

	react_hover_grid = {...
                  , filter_hover: 'hue-rotate(150deg)'}





### hor\_text\_edge
>Type: number  
Horizontal pixel Padding on text in images

	react_hover_grid = {...
                  , hor_text_edge: 4}

### ver\_text\_edge
>Type: number  
Vertical pixel Padding on text in images

	react_hover_grid = {...
                  , ver_text_edge: 4}


### tile\_edge
>Type: number  
Padding on images

	react_hover_grid = {...
                  , tile_edge: 4}

### shuffle\_seconds
>Type: number  
Number of seconds between random shuffling of tiles

	react_hover_grid = {...
                  , shuffle_seconds: 7}



### google\_font\_link
>Type: STRING\_OR\_ARRAY  
One or more font links

	react_hover_grid = {...
       , google_font_link: 'https://fonts.googleapis.com/css?family=Schoolbell'}

    react_hover_grid = {...
       , google_font_link:  [ 
            'https://fonts.googleapis.com/css?family=Schoolbell'  
	      , '//db.onlinewebfonts.com/c/99f44be299d4608af6fbe99aa38ce446?family=HarmoniaSansW01-Bold'  
	      , 'https://fontlibrary.org/face/unique' ] }





### inject\_css\_rules
>Type: string   
Inject some css styling into component

	react_hover_grid = {...
       , inject_css_rules: 'font-color:blue'}




### max\_rows
>Type: number   
Maximum number of rows being displayed

	react_hover_grid = {...
       , max_rows: 2}


### resize\_nested\_component
>Type: boolean  
Grid is being re-sized via JavaScript events, not changes in browser window size.  
If true then grid must have a resize\_pub\_sub object to drive the changes

	react_hover_grid = {...
       , resize_nested_component: true}

### resize\_pub\_sub
>Type: object  
An object with a subscribeToWidthChange() function and a publishWidthChange() function called by JavaScript events

	react_hover_grid = {...
       , resize_pub_sub: { subscribeToWidthChange: function () {...}
                         , publishWidthChange: function () {...} } }



### server\_render\_ssr
>Type: boolean   
Render the grid isomorphically on the server?

	react_hover_grid = {...
       , server_render_ssr: true }


### init\_shuffle\_ssr
>Type: boolean   
Randomize the images when server side rendering

	react_hover_grid = {...
       , init_shuffle_ssr: true }


### onResize
>Type: function  
Function that is called after grid has been re-sized

	react_hover_grid = {...
       , onResize: function onResize () {...} }




## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
