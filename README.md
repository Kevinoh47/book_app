# Book App

**Author**: Harry Hayden and Kevin O'Halloran
**Version**: 1.0.0 

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
We are creating an online app with a mobile-first design for collecting books of interest. The app has the ability to add books manually, or via an API call to the Google Books API. We also implemented the ability to search the local database. 

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
1. install postgressql and create a books_app database with a books table. (Database and database table creation scripts, not to mention a starter data insertion script, do not yet exist in the repo, but we should them add them and refer the user to them.)
2. Clone the GitHub repository
3. Create a .env file and add database connection string and port.
4. Install node.js and run npm install for the dependencies listed in package.json
5. Run node (or if installed, nodemon) from there directory containing server.js
6. In a browser, navigate to http://localhost:port


## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
This application runs on Node.js, and uses EJS for server-side templating, including EJS partials.
Node packages include Express to create a Model View Controller (MVC) application architecture, pg for database connections, and dotenv for abstracting away environment variables. We use SuperAgent to mannage our asynchronous HTTPS calls to the Google Books API. The data store is postgresql. 

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource. -->

commit f02ef5283a3e6ae2c3d8276c9f70274d86a88127 (HEAD -> kevin-harry, origin/kevin-harry)
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Sep 1 11:32:23 2018 -0700

    refactoring out helper functions to make code more readable

commit 56ef66a9c8d03e1a930e20e77088203167b358b7
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Fri Aug 31 22:32:26 2018 -0700

    added ability to search google and add results to our database

commit a415ba8b24572f5a45a6551ad2703d734e552c2e
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 30 15:54:33 2018 -0700

    adding local find view

commit c4db63ce9287550f19c276dc993db91e51a02ac2
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 30 15:44:20 2018 -0700

    local search is now case insensitive

commit 2d81d2ad3ab8f08ebb5d8bbb3497d5be7c60a0b7
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 30 14:40:23 2018 -0700

    added local search functionality

commit 1d29e3fc8cfcffb6e100b80c24b8bcbe46c1d318
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 29 19:51:47 2018 -0700

    fully working

commit da8418a5598a26671702f5880085efcc70e9eb0b
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 29 19:05:56 2018 -0700

    now returning the new book after it is added

commit 89c157535e30ce98e41b761b4f2ac886897b59e8
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 29 14:55:04 2018 -0700

    working, but not returning message or individual books page

commit 092d594c25f988599a313f061b28e84eba6b60b8
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 29 12:09:39 2018 -0700

    moved callbacks out of temporal dead zone

commit e871c30baefa38ca5e41902408abc83d92cf82c6
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Tue Aug 28 22:42:49 2018 -0700

    added form and submitted two records before it stopped working. Was working on the promise response when it stopped working

commit a7e89795e8de4b941a9518e4a8401941c2426a7e
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Mon Aug 27 15:44:59 2018 -0700

    styling for main page done and details page improved

commit eaa4eb2126de47cc03f839ea36be4ebf0f788b9a
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Mon Aug 27 10:41:19 2018 -0700

    updated readme

commit b02fb842978f809e4b7d58f4d7d903ecb7a4ac74
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 16:17:44 2018 -0700

    added font files

commit bf391564130068551d6ae4a429219bd02925c0dd
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 15:16:13 2018 -0700

    refactored head tag into partial and updated css links

commit 82848df55704de8fe4fae49de7ae6cf905ad4687
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 14:22:09 2018 -0700

    refactored callbacks out of routes

commit 9bf6d93a2b3f81b48ec7ced74a4d05e549c469da
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 12:40:53 2018 -0700

    fixing css path

commit c47e2e635feb1765e487bead06c711aaa0e39a38
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 12:31:36 2018 -0700

    fixing connection string

commit 069cee1d94ed4d81c269e73bdf76ec9c7303c9c1
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 12:24:09 2018 -0700

    different go back button

commit d172e111f1f9bc3062faa0c72d85af53b74c2f2a
Merge: 3f0e632 2ff8d09
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 12:15:07 2018 -0700

    Merge branch 'kevin-harry' of github.com:Kevinoh47/book_app into kevin-harry

commit 3f0e6323fc7f57761a711396f6b4c2ce920f6eae
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 12:14:10 2018 -0700

    added book specific route and ejs template

commit 2ff8d092f2e532ea37dd44cc7f7ff0f9d16c5f33
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 12:10:34 2018 -0700

    update folders

commit 756f8a7c013837ac6204110e8dc692aacfd86c96
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 12:08:40 2018 -0700

    update css folder

commit c857e1ab93e1d7941f5c651c0ed103f48167ecab
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 11:56:35 2018 -0700

    add css folder

commit f4de7c990aee315f2b234f421e0b97913d9479d2
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 11:40:20 2018 -0700

    update reset.css

commit b1d1512379afb257da85770751a19a1e58ba4764
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 11:33:53 2018 -0700

    update css files

commit 55d16ee5d2c2f690b4d9778812169ed8d8d90529
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 11:26:17 2018 -0700

    update css style css folder

commit 42c17abce223b9caf27e0639a8c0036dd965a465
Author: Harry Hayden <1adventhorizon@gmail.com>
Date:   Sat Aug 25 11:09:58 2018 -0700

    update postgres for pc

commit cfa24063f53965f8b641053b820ccbe4eaaeddfa
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Sat Aug 25 09:28:35 2018 -0700

    moved port to below express app setup in server.js

commit ba56fbf08fb4d88bc3b2fb446d95e2f905f04013
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 23 20:58:00 2018 -0700

    minor changes

commit d7566a6162450cea9ae412afa439ad69b6159613
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 23 20:04:13 2018 -0700

    minor tweaks

commit 605bddfb95d91ac194e5cd371d8b8cb6d5ce4ce1
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Thu Aug 23 19:28:21 2018 -0700

    added express as a dependency in package.json

commit 7ba94c012a582358a436629847eefd4a8644c10a
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 22 21:26:29 2018 -0700

    tweaks

commit e33d1c26f9b212dd896dca1ce93bacaff408c89e
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 22 21:12:04 2018 -0700

    added ejs partials

commit ff515192679dc130fce12c62544756bef1842ad4
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 22 20:51:21 2018 -0700

    fixed a small error

commit 91e6652470b9ff89723573e8e558a999490dd28b
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Wed Aug 22 20:37:30 2018 -0700

    first two requirements basically working

commit c9b619eb3b9057fe4ccf6f65cde75a8b96a67cf6
Author: Kevinoh47 <kohok47@gmail.com>
Date:   Tue Aug 21 19:49:56 2018 -0700

    first commit

commit f3a2dce3727ef0e899114bee23ee903a4590f7cd (master)
Author: Kevinoh47 <Kevinoh47@users.noreply.github.com>
Date:   Tue Aug 21 18:43:46 2018 -0700

    Initial commit
## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
We could not have figured out the Google API stuff should be organized without studying https://github.com/codefellows/seattle-301n11/tree/master/14-book-app-4/solution-review


