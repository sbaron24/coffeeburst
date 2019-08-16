## Overview

Visit the live app at https://coffeeburst.herokuapp.com/

Coffeeburst is for people who want to deepen their appreciation for coffee by becoming more knowledgable tasters. It's difficult to track what coffee you enjoy most and why. Beyond just simple light, medium or dark roasts, what regions do you prefer? Roasters? Flavor profiles?

Coffeeburst will allow coffee enthusiasts to learn more about what they're drinking, track favorites, and quiz themselves about attributes of the coffee - flavors, body, and how to describe it - to become better tasters.

Currently users can:
* Add a coffee
* Search for coffees
* View details about a coffee
* Add an attribute profile, including flavor notes, body, and description

In the future users will be able to:
* Image upload for adding a coffee
* Track favorites
* Take coffee quizzes
* View visualizations for understanding tasting ability and/or preferences

## Getting started

After you fork, download or clone the repo locally, run the following commands to install dependencies:
```
bundle install
yarn install
```

Then run the following commands to build the database:
```
rake db:create
rake db:migrate
rake db:seed
```

Finally, boot up the project by running the following commands in two terminal tabs run:
```
rails s
yarn start
```

Now you can open your browser and view the app in development at https://localhost:3000/

## Usage

#### Search For a Coffee

On the homepage, enter terms based on a coffee into a React search bar. Search by coffee name, roaster, roast level (light, medium, dark) or country of origin.

Click to view more details.

![](search_for_coffee.gif)

#### Add an Attribute Profile

From a coffee's show page, click to add an attribute profile for a coffee. If not signed in, do so or create an account before being redirected the new attribute profile page.

![](add_attribute_profile.gif)

Select at least 3 flavors based on taste, choose a description for the body and a more general description for the coffee. Click to save the profile.

## More information

The following technologies were used to build Coffeeburst:

* Ruby/Rails
* JavaScript/React
* PostgreSQL
* [react-vis](https://github.com/uber/react-vis) (by Uber)
* Webpacker

Special thanks to [mistobox.com](mistobox.com) for imagery to seed the app
