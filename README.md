# Book App

**Author**: Harry Hayden and Kevin O'Halloran
**Version**: 1.0.0 

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
We are creating an online app with a mobile-first design for collecting books of interest. 

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
Node packages include Express to create a Model View Controller (MVC) application architecture, pg for database connections, and dotenv for abstracting away environment variables. The data store is postgresql. 

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource. -->

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

