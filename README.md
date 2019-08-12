# Coffeeburst

Coffeeburst is an app for tracking your favorite coffees, testing your taste buds, and exploring which coffees you enjoy most. 

## Features

Currently:
* Search for coffees or add a coffee
* View details about a coffee
* Add an attribute profile


Coming soon:
* Coffee quizzes
* Verified profiles
* Visualizations for understanding tasting ability and/or preferences
* Test suite

## Production

The app is in production at https://coffeeburst.herokuapp.com/

Main dependencies:

* Ruby version: 2.4.5
* Rails 5
* React 16.8.6
* React-vis ^1.11.7

* Other dependencies: see package.json

* Database creation: run 'bundle exec rake db:create && bundle exec rake db:migrate' 

* Database initialization: run 'bundle exec rake db:seed'
