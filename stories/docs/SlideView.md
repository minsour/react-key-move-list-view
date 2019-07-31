# Story Source

```
<ListView list={data} type="slide">
```

# Prop Types

### "SlideView" Component
|**_property_**|**_propType_**|**_required_**|**_default_**|**_description_**|
|:---------:|:--------:|:--------:|:--------:|:--------:|
|list     |IContent[]|yes      |-        |         |
|type     |"slide" \| "matrix"|yes      |-        |         |
|width     |number|-        |-        |         |
|widthNum     |number|-        |-        |         |
|height     |number|-        |-        |         |
|heightNum     |number|-        |-        |         |
|totalWidthNum     |number|-        |-        |         |
|index     |number|-        |-        |         |
|title     |string|-        |-        |         |
|theme     |"light"\|"dark"|-        |-        |         |

### IContent Type
|**_property_**|**_propType_**|
|:---------:|:--------:|
| _id          | string          |
| index          | number |
| image         | string              |
| title      | string              |
| description      | string              |