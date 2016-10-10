# Log

## General notes
* Files here do not sync with anything. Just a repo to track changes. Everything needs to be done via WP or FTP.
* There appear to be 2 users set up for FTP etc. Both appear to have a copy of the website. However, only the one with the username ending in "...o4" matters.
* The site is hosted on Dreamhost: 
** Domain: https://panel.dreamhost.com/index.cgi?tree=domain.manage
** Users for FTP are managed here: https://panel.dreamhost.com/index.cgi?tree=users.users
* Mobile
** It is unclear where there header.php for the mobile site is located.

## 10/9/16
* Added mobile header.php to git repository
** File needs to be uploaded manually via FTP
** Location: /home/sarslo4/sarahsloboda.com/wp-content/plugins/sloboda-handheld/main_themes/HandHeld
** --> however updating these files does not appear to make a change on the website

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
