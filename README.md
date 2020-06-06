# List of planets
Check out this project online at http://listofplanets.s3-website.eu-west-3.amazonaws.com/

Application presents a list of planets. Data come from an
external server. I used this service - https://swapi.py4e.com/api/planets/. 
The application has a search bar located at the top of the list. A user is able
to type a string phrase into the search input, and the planet list is filtered by their
names.
The list contain pagination with an option to navigate to different
pages in addition to another option in order to select the page size (possible values 5, 10, 25, 100).
A user also have an option to view the details of their selected planet. Clicking on a
planet navigate the user to a page where the details of the planet are presented. At
the top of that page is a ‘back’ button that navigates back to the list.

## Preview

![alt text](https://github.com/AndrzejSierocinski/List-of-planets/blob/master/src/assets/images/main.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/List-of-planets/blob/master/src/assets/images/pagination&page-size.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/List-of-planets/blob/master/src/assets/images/details.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/List-of-planets/blob/master/src/assets/images/search.png?raw=true)
![alt text](https://github.com/AndrzejSierocinski/List-of-planets/blob/master/src/assets/images/not-found.png?raw=true)


## Installation

### Clone repository

```bash
git clone https://github.com/AndrzejSierocinski/List-of-planets.git
```

### Install NPM packages

```bash
cd List-of-planets
npm install
```
 
### Run development server

```bash
ng serve
```

Runs a webpack-development server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technology Stacks
  - Angular 8.2.13
  - Bootstrap 4.4.1
  - HTML5
  - SCSS
  - Typescript 3.5.3
  - ng-bootstrap 5.3.0
 
