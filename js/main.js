import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': 'Scoreboard',
    'href': "https://gentle-ravine-75929.herokuapp.com/",
    'desc': "A simple scoreboard app written with react and running on Heroku.",
    'image': {
      'desc': 'example screenshot of a project using react',
      'src': 'images/scoreboard.png',
      'comment': ''
    }
  },
  {
    'title': 'RSVP',
    'href': "https://stevemustanski.github.io/rsvp-react/",
    'desc': "A simple RSVP application allowing users to keep track of invitees.",
    'image': {
      'desc': 'example screenshot of an RSVP tracking application built with react',
      'src': 'images/rsvp.png',
      'comment': ''
    }
  },
  {
    'title': 'Friend Finder',
    'href': "https://secret-journey-42090.herokuapp.com/",
    'desc': "A simple survey using Node and Express to match you to a new friend.",
    'image': {
      'desc': 'example screenshot the friend finder survey',
      'src': 'images/friendfinder.png',
      'comment': ''
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));