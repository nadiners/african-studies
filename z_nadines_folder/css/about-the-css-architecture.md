#About the css architecture used in the website.

The architecture outlined above includes three directories, all with individual groups of styles. The goal here is to start thinking of websites as systems rather than individual pages, and the code architecture should reflect this mindset. Notice how there aren’t any page specific styles here.

##Base
The base directory includes common styles and variables to be used across the entire website, layout and typography styles for example.

##Components
The components directory includes styles for specific user interface elements which are broken down into different component files such as alerts and buttons.
The component styles are purely interface driven and have nothing to do with the core business logic of the website.

##Modules
The modules directory includes styles for different sections of a page, which are determined by business needs.
Modules then include styles specific to the business logic. When marking up a module in HTML it is common to use different user interface components within it. For example, the sidebar of a page may have list and button styles that are defined within component styles while other styles needed for the sidebar are inherited from the module style.

The separation of style encourages well thought out presets and the ability for styles to be widely shared and reused.

Taken from :
http://learn.shayhowe.com/advanced-html-css/performance-organization/
