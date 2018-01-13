

# Types

### AREA\_PROP\_TYPE
> string

> 'north-west' || north' || 'north-east'
  || 'east'
  || 'south-east'
  || 'south'
  || 'south-west'
  || 'west'
  || 'middle'

### STRING\_OR\_OBJECT\_CSS
> string || object
  
>     'font-size: 24px; color: #aabbcc' 

>     '.my_css_style' 

>     {fontSize: '24px', color: '#aabbcc'}


### STRING\_OR\_ARRAY
> string || array
  
>      'https://fonts.googleapis.com/css?family=Schoolbell'

>     [  'https://fonts.googleapis.com/css?family=Schoolbell'  
>	     , '//db.onlinewebfonts.com/c/99f44be299d4608af6fbe99aa38ce446?family=HarmoniaSansW01-Bold'  
>	     , 'https://fontlibrary.org/face/unique' 
>     ]     


### LINEAR\_GRADIENT
> {clear\_percent: number, gradient\_rgba:string}

>     {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}

### CSS\_FILTER
> string

>     'filter: drop-shadow(16px 16px 20px blue)'


### CSS\_GRADIENT
> string

>     'rgba(0, 255, 0, 0.1)'


## Created by

[Steen Hansen](https://github.com/steenhansen)

## License

MIT © 
