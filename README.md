# Full-Stack Developer Bootcamp Module 15 - Project 02: Note Taker

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Application Screenshots](#application-screenshots) 


## Description

The Note Taker is a browser-based application that permits Users to enter and store individual Notes, accessible to all Users of the site. As developed, the Notes are accessible through a public web deployment (e.g., Render) and may also be run as a local instance, specific to each accessing computer.

Notes are held as structured data within the a Postgres database and, consequently, may accessible through the Web, if publicly deployed, and through a local instance (using a local Postgres database).

The Note Taker source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Notes are entered through a dedicated  Notes page, while the app Homepage aggregates and presents saved Notes.

The Note Taker features a sequential, timeline-based view of Notes.

Individual Notes may be viewed from the a Note page, and edited or deleted from database storage.

The app utlizes an Handlebars-based Form to ingest User Input, Nodejs Modules (Express) to save (Post) new Notes to a remote or local Postgres database, and Javascript to dynamically update the Notes Homepage with new Notes, and Bootstrap to style to site. 

The Node Module, bcrypt, is used to hash and securely store User login credentials.

Because Notes are stored within a Postgres database, either remote or local, Notes will persist across User sessions on individual, hosting computers and will be visible to all Users of the remote and local App instances.


## Installation

The Note Taker source code may be downloaded from its GitHub repository, and run directly by a hosting computer, or through a Web hosting service (e.g., Render, Heroku).

No Installation of the Note Taker itself is required; the app is fully browser-based, accessed through any modern browser that supports JavaScript (Nodejs).

However, local computers must hold an installation of Node.js and Posgres in order the run local instances of the Note Taker application.


## Usage

The Note Taker is intended for use by one or more Users to record Notes that will be held remotely and locally, and persist across multiple sessions. 

All Users of the Note Taker on a remote or local instance will have full visibility to all Users' Notes.


## Credits and Code Source

Database and Route-management Code was substantively outlined and contributed to by Program Tutors, who provided recommentations on the effectively mapping data returned from the App database to use at the presentation layer (Handlebars), and to manage CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Return value and generated content testing and data evaluation, see archive.js ('archive' Folder)

`console.log` output of specification data specific to User requirements; see server.js, apiRoutes.js, pageRoutes.js.


## GitHub Repository Location (HTTPS)

https://github.com/stephenw987/Project02.git


## Render App Deployment

https://project02-2.onrender.com/


## Application Screenshots

![Note Taker: Node.js App Homepage - Screenshot 01](./assets/images/Note-Taker_Nodejs-App_Screenshot-01_Homepage.png?raw=true "Note Taker: Node.js App Homepage")

![Note Taker: Node.js App Note Creation - Screenshot 02](./assets/images/Note-Taker_Nodejs-App_Screenshot-02_Note-Creation.png?raw=true "Note Taker: Node.js App Note Creation")

![Note Taker: Node.js App Category Management - Screenshot 03](./assets/images/Note-Taker_Nodejs-App_Screenshot-03_Category-Mgt.png?raw=true "Note Taker: Node.js Category Management")

![Note Taker: Node.js App Note Management - Screenshot 04](./assets/images/Note-Taker_Nodejs-App_Screenshot-04_Note-Mgt.png?raw=true "Note Taker: Node.js App Note Management")

![Note Taker: Node.js App User Registration](./assets/images/Note-Taker_Nodejs-App_Screenshot-05_User-Registration.png?raw-true "Note Taker: Node.js App User Registration")