

#PictureTile

## Types

### AREA\_PROP\_TYPE
> 'north-west' || north' || 'north-east'
  || 'east'
  || 'south-east'
  || 'south'
  || 'south-west'
  || 'west'
  || 'middle'

###STRING\_OR\_OBJECT\_CSS
> string || object

> Examples:
  
>     'font-size: 24px; color: #aabbcc' 

>     {fontSize: '24px', color: '#aabbcc'}

###LINEAR\_GRADIENT
> {clear\_percent: number, gradient\_rgba:string}

> Example: {clear\_percent: 50, gradient\_rgba: 'rgba(255, 255, 255, 0.99)'}

### Image files

	 public/hover-grid-images/my_hover_grid_images/picture_1.jpg
	 public/hover-grid-images/my_hover_grid_images/picture_2.jpg


### my\_hover\_grid\_entry.jsx

	const readme_sample_grid_data = [
		{picture_src: 'picture_1.jpg'}
	  , {picture_src: 'picture_2.jpg'
         , normal_area: 'north-east'
         , hover_area: 'south-west'
         , normal_style: 'font-size: 24px; color: #aabbcc' 
         , hover_style: {fontSize: '24px', color: '#aabbcc'}
		 , hover_gradient: 'rgba(255, 0, 0, 0.1)'
         , normal_gradient: 'rgba(255, 0, 0, 0.1)'
         , hover_linear_gradient: 'rgba(255, 0, 0, 0.1)'
         , normal_linear_gradient: 'rgba(255, 0, 0, 0.1)'
         , normal_title_style: 'font-size: 24px; color: #aabbcc'
         , hover_text_style: {fontSize: '12px', color: '#112233'}
         , filter_normal: 'hue-rotate(150deg)'
         , filter_hover: 'hue-rotate(150deg)'
         , link_url: 'http://www.my-url.com'
         , normal_title: 'First line of normal text'
         , normal_info: 'Second line of normal text'
         , hover_title: 'First line of hover text'
		 , hover_info: 'Second line of hover text'
	}]

	module.exports = {
  		hover_grid_id: 'readme_sample_grid_id'
  	  , hover_grid_row_height: 234
  	  , pictureTile_text: readme_sample_grid_data
  	}




### picture\_src
>*Required*  
Type: `string`

Name of image file

	PictureTile = {picture_src: 'picture_1.jpg'}  






### normal\_area
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'

Location of text when image is not being hovered on 

	PictureTile = {normal_area: 'north-east'}   

### hover\_area
>Type: `AREA_PROP_TYPE`  
>Default: 'middle'

Location of text when image is being hovered on 

	PictureTile = {hover_area: 'south-west'}   





### normal\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of text when image is not being hovered on 

	PictureTile = {normal_style: 'font-size: 24px; color: #aabbcc'} 
	PictureTile = {normal_style: {fontSize: '24px', color: '#aabbcc'} }

### hover\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of text when image is being hovered on 

	PictureTile = {hover_style: 'font-size: 24px; color: #aabbcc'} 
	PictureTile = {hover_style: {fontSize: '24px', color: '#aabbcc'} }


### hover\_gradient
>Type: `string` 

>superseded by hover\_linear\_gradient 

Gradient over image when it is being hovered on 

	PictureTile = {hover_gradient: 'rgba(255, 0, 0, 0.1)' }


### normal\_gradient
>Type: `string` 

>superseded by normal\_linear\_gradient 

Gradient over image when it is not being hovered on 

	PictureTile = {normal_gradient: 'rgba(255, 0, 0, 0.1)' }

### hover\_linear\_gradient
>Type: `string` 

>overrides hover\_gradient 

Linear gradient over image when it is being hovered on 

	PictureTile = {hover_linear_gradient: 'rgba(255, 0, 0, 0.1)' }


### normal\_linear\_gradient
>Type: `string` 

>overrides by normal\_gradient 

Linear gradient over image when it is not being hovered on 

	PictureTile = {normal_linear_gradient: 'rgba(255, 0, 0, 0.1)' }








### normal\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of first line of text when image is not being hovered on 

	PictureTile = {normal_title_style: 'font-size: 24px; color: #aabbcc'} 
	PictureTile = {normal_title_style: {fontSize: '24px', color: '#aabbcc'} }



### normal\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of second line of text when image is not being hovered on 

	PictureTile = {normal_text_style: 'font-size: 12px; color: #112233'} 
	PictureTile = {normal_text_style: {fontSize: '12px', color: '#112233'} }


### hover\_title\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of first line of text when image is being hovered on 

	PictureTile = {hover_title_style: 'font-size: 24px; color: #aabbcc'} 
	PictureTile = {hover_title_style: {fontSize: '24px', color: '#aabbcc'} }



### hover\_text\_style
>Type: `STRING_OR_OBJECT_CSS`  

Style of second line of text when image is being hovered on 

	PictureTile = {hover_text_style: 'font-size: 12px; color: #112233'} 
	PictureTile = {hover_text_style: {fontSize: '12px', color: '#112233'} }


### filter\_normal
>Type: `string`  

Filter when image is not being hovered on 

	PictureTile = {filter_normal: 'hue-rotate(150deg)'} 

### filter\_hover
>Type: `string`  

Filter when image is being hovered on 

	PictureTile = {filter_hover: 'hue-rotate(150deg)'}





### link\_url
>Type: `string`  

Filter when image is being hovered on 

	PictureTile = {link_url: 'http://www.my-url.com'}


### normal\_title
>Type: `string`  

The first line of text when image is not being hovered on

	PictureTile = {normal_title: 'First line of normal text'}

### normal\_info
>Type: `string`  

The second line of text when image is not being hovered on

	PictureTile = {normal_info: 'Second line of normal text'}

 

### hover\_title
>Type: `string`  

The first line of text when image is being hovered on

	PictureTile = {hover_title: 'First line of hover text'}

### hover\_info
>Type: `string`  

The second line of text when image is being hovered on

	PictureTile = {hover_info: 'Second line of hover text'}







## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
