# Task List
https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/
[x] generate Rails api app
[ ] create-react-app
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
[ ] set up controllers
  [ ] venues
    [ ] index
    [ ] show
    [ ] update
  [ ] suggestions
    [ ] index
    [ ] create
    [ ] update
  [ ] reviews
    [ ] index
    [ ] create
    [ ] update
[ ] set up routes
  [ ] venues
  [ ] suggestions (should probably be nested under venues?)
  [ ] reviews (should probably be nested under venues?)
[x] set up AMS
[ ] set up serializers
  [ ] location
  [ ] venues list - name, location_id, avg_rating, capacity
    + don't think it needs to have the reviews or suggestions associations listed here, only location
  [ ] venue show - name, location_id, avg_rating, capacity with all associations
  [ ] suggestion list - all fields
    NAME location avg_price
    Category | Upvotes Downvotes
  [ ] review list - all fields
    Rating
    Content
[ ] test JSON
