---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
tags: # set tags
artwork_refs: {{.Name}} # Do not touch unless you know what you are doing
categories: # set categories
artist: #use artist unique artist-name as reference
type-artworks: #define if needed, using following terms "sculpture", "painting", "mixed-media"
credits: # add credits if required
model : "" # provide the url path to the model
---
