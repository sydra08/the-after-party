# Task List
https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
[x] generate Rails api app
[x] create-react-app
[x] generate models: venue, venue_comment, suggestion
  `rails g model`
[x] set up migrations & run them
[x] create seed data
  red rocks
  madison square garden
  brooklyn steel
  irving plaza
  bowery ballroom
[x] set up models
[x] set up controllers
  [x] venues
    [x] index
    [x] show
    [x] update
  [x] suggestions
    [x] index
    [x] create
    [x] update
  [x] reviews
    [x] index
    [x] create
    [x] update
[x] set up routes
  [x] venues
  [x] suggestions (should probably be nested under venues?)
  [x] reviews (should probably be nested under venues?)
[x] set up AMS
[x] set up serializers
  [x] address
  [x] category
  [x] location
  [x] venues list - name, location_id, avg_rating, capacity
    + don't think it needs to have the reviews or suggestions associations listed here, only location
  [x] venue show - name, location_id, avg_rating, capacity with all associations
  [x] suggestion list - all fields
    NAME location avg_price
    Category | Upvotes Downvotes
  [x] review list - all fields
    Rating
    Content
[x] test JSON
[ ] figure out why the timestamp data is showing up for location
[x] update README with proper install and usage instructions
[x] packages
  [x] isomorphic fetch
  [x] es6 promise (?)
  [ ] prop-types
  [x] react-router
  [x] redux thunk
  [x] react-redux
  [x] redux
[ ] React Components
  [ ] homepage
  + Venue
    [ ] VenueListContainer
    [ ] VenueList
    [ ] Venue - contains the venue data 
  + Suggestion
    [ ] SuggestionListContainer
    [ ] SuggestionList
    [ ] Suggestion (is this where the form goes?)
  + Review
    [ ] ReviewListContainer
    [ ] ReviewList
    [ ] Review (is this where the form goes?)
  [ ] App
[ ] ratings (https://www.npmjs.com/package/react-star-rating-component)  
[ ] Redux
  [ ] create store
  [ ] actions
    [ ] addReview
    [ ] addSuggestion
    [ ] updateSuggestion (when voting)
    [ ] updateVenue (rating)
  [ ] reducers
[ ] set up routes in React
[ ] figure out where the props and state stuff goes