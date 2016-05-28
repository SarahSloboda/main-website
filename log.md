# Log

## General notes
* Files here do not sync with anything. Just a repo to track changes. Everything needs to be done via WP or FTP.
* There appear to be 2 users set up for FTP etc. Both appear to have a copy of the website. However, only the one with the username ending in "...o4" matters.

## 5/28/16 -- Making Newsletter Sign-up Work again
* Moved header, script file, and style.css into github
* script file can only be moved via FTP even though in WP theme folder
* Made button show up 
** Removed ".js input[type="submit"]" from "visibility: hidden;" in style.css
** Unclear why this was there in the first place
** Left a corresponding note in the style.css
* Fixed emma integration:
** Replaced form with Javascript form
** Fixed the newsletter() in script.js to work correctly with the new emma JS
*** Hides the header image
*** Copies the email address from the main page into the popup.
* Set-up software:
** Filezilla
** Sublime
** Github Desktop
