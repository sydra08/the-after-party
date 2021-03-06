# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Address.create(street: "18300 W Alameda Pkwy", city: "Morrison", state: "Colorado")
Address.create(street: "319 Frost St", city: "Brooklyn", state: "New York")
Address.create(street: "4 Pennsylvania Plaza", city: "New York", state: "New York")
Address.create(street: "17 Irving Pl", city: "New York", state: "New York")
Address.create(street: "134 Kingsland Ave", city: "Brooklyn", state: "New York")
Address.create(street: "321 E 14th St", city: "New York", state: "New York")
Address.create(street: "307 E 14th St", city: "New York", state: "New York")
Address.create(street: "55 Irving Pl", city: "New York", state: "New York")

Venue.create(name: "Red Rocks Amphitheater", address_id: 1, avg_rating: 5, capacity: 9525)
Venue.create(name: "Brooklyn Steel", address_id: 2, avg_rating: 3.5, capacity: 1800)
Venue.create(name: "Madison Square Garden", address_id: 3, avg_rating: 4, capacity: 20789)
Venue.create(name: "Irving Plaza", address_id: 4, avg_rating: 4, capacity: 1025)

Category.create(name: "Beer Bar", description: "focuses on beer")
Category.create(name: "Cocktail Bar", description: "upscale bar")
Category.create(name: "Wine Bar", description: "focuses on wine")
Category.create(name: "Brewpub", description: "pub style food and drink")
Category.create(name: "Fast Casual", description: "no table service")
Category.create(name: "Fast Food", description: "fast food")
Category.create(name: "Fancy Restaurant", description: "upscale sit down restaurant")



Suggestion.create(venue_id: 2, address_id: 5, name: "One Stop Beer Shop", category_id: 2, upvotes: 25, downvotes: 2)
Suggestion.create(venue_id: 4, address_id: 6, name: "Artichoke Pizza", category_id: 3, upvotes: 100, downvotes: 15)
Suggestion.create(venue_id: 4, address_id: 7, name: "The Halal Guys", category_id: 3, upvotes: 1000, downvotes: 15)
Suggestion.create(venue_id: 4, address_id: 8, name: "Dear Irving", category_id: 1, upvotes: 1000, downvotes: 15)

Review.create(venue_id: 1, content: "Gorgeous venue", rating: 5)
