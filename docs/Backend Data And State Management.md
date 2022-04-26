```

  {
   
    "title": "Beyond Earth",
    "thumbnail": {
      "trending": {
        "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
        "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
      },
      "regular": {
        "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
        "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
      }
    },
    "year": 2019,
    "category": "Movie",
    "rating": "PG",
    "isBookmarked": false,
    "isTrending": true
  }

 
 
 ```

1. A title can be in Grid as well as in Trending section.
2. Trending Section will require seperate state with filter isTrending or ask from backend only trending titles.
3. Grid can have all title without any order.
4. Global State will be done using redux but its relevance will be less. As we dont have much logic in global level expect Login and Page Filters on Categories.

#### Global State

```
state = {
	login: true/false,
	userName: "John Doe",
	page: "home/movies/tv_shows/bookmarks",
	searchText: "beyond Earth"

}
```


### Page State
1. Trending Section is seperate component with its own state
2. Home State will take Global State Page key and filter the Grid Titles
3. Search Component will have own state who is parent of Home state, it input will be used in API hit while fetching Home Grid.
4. useEffect to render data after first render and will use global state to render data.


### Search State

Simple one variable which updates global State.
Only fire the api on space detection or enter

```
searchText = "beyond Earth"
```

### Navbar State

Simple one variable that updates global state page.


#### Title State

```
state = {

	isBookmark: True/False,
	hoverPlay: True/False

}


```

