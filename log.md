# Log

## General notes
* Files here do not sync with anything. Just a repo to track changes. Everything needs to be done via WP or FTP.
* There appear to be 2 users set up for FTP etc. Both appear to have a copy of the website. However, only the one with the username ending in "...o4" matters.

## 5/28/16 -- Making Newsletter Sign-up Work again
* Moved header, script file, and style.css into github
* script file can only be moved via FTP even though in WP theme folder
* Made button show up 
  * 1) Removed ".js input[type="submit"]" from "visibility: hidden;" in style.css
* 2)Unclear why this was there in the first place
* 3) Left a corresponding note in the style.css
* Fixed emma integration:
* 1) Replaced form with Javascript form
* 2) Fixed the newsletter() in script.js to work correctly with the new emma JS
* 2.a) Hides the header image
* 2.b) Copies the email address from the main page into the popup.
* Set-up software:
* 1) Filezilla
* 2) Sublime
* 3) Github Desktop
