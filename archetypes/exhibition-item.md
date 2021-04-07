---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
Organiser: #add the organiser if required
artworks: #add all the artworks using their unique ID Name
type: #choose from geolocation, marker, custom-marker, picture
exhibition_year: #give a year the exhibition was published/open, can be different of creation date of this item
exhibition_title: "example_paintings" #provide the title as a custom category so it creates a page for the exhibition

# Set geolocation if set above
long: # set longitude
lat: # set latitude

# Set the marker appropriate for the artworks, selection based on previous types, all other will be ignored
marker_type_sets: #choose from
marker: # use appropriate integers
custom_marker: #use custom marker if set above

# picture selection, not set currently


position_artwork: #set how much it will hover above/beside marker/geolocation. Use "0 0 0" for 3 axes
size_artwork: # set size either relative to itself of to markers

weight: #choose, if required, a weight for the exhibition-item, only integers
date_creation: #choose date when work of art was created (can be just the year)
---
