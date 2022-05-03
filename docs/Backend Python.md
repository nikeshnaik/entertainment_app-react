### Simple CRUD Backend with API Layer

Login: Auth0
Database: Postgres with ORM on Heroku
Framework: Django
Deployment: Heroku


### Login Auth0

Follow Auth0 Sample Example


### Database Schema

![[Database_Schema.svg]]



### Django REST APIs



1. Add all login routes given by Auth0, replicate same no changes

2.  searchAPI [POST]

`{

	category: "movies/tv show/bookmark",
	query: "Beyond the earth"

}`

3. TrendingAPI [GET], fiter by user on session

4. RecommendedAPI [POST],
	` {.  category: "all/movies/tvshow/bookmark"
		}
	`
	all -> get everything, home page 


