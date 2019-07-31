# Story Source

```
const renderListViews = () => (
  <ListView index={0} list={data} type="slide">
  <ListView index={1} list={data} type="slide">
);

<ViewContainer render=(renderListViews) />
```

# Prop Types

### "ViewContainer" Component
|**_property_**|**_propType_**|**_required_**|**_default_**|**_description_**|
|:---------:|:--------:|:--------:|:--------:|:--------:|
|render     |()=>JSX.Element|yes      |-        |         |