import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': 'Scoreboard',
    'href': "https://gentle-ravine-75929.herokuapp.com/",
    'desc': "A simple scoreboard app written with react and running on Heroku",
    'image': {
      'desc': 'example screenshot of a project using react',
      'src': 'images/scoreboard.png',
      'comment': ''
    }
  },
  {
    'title': 'Coming Soon',
    'href': "https://example.com",
    'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    'image': {
      'desc': 'example screenshot of a project involving chemistry',
      'src': 'images/example2.png',
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
      https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': 'Coming Soon',
    'href': "https://example.com",
    'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    'image': {
      'desc': 'example screenshot of a project involving cats',
      'src': 'images/example3.png',
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
      https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));