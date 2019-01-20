import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  'title': 'Work Example',
  'href': "https://example.com",
  'git': "https://examplegit.com",
  'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  'image': {
    'desc': 'example screenshot of a project involving code',
    'src': 'images/example1.png',
    'comment': ''
  }
}

describe('ExampleWorkModal component', () => {
  let component = shallow(<ExampleWorkModal example={myExample}
  open={false}/>);

  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true}/>);

  let project = component.find('#project-link');

  it('Should contain a single project link', () => {
    expect(project.length).toEqual(1);
  });

  it('Should link to project link', () => {
    expect(project.prop('href')).toEqual(myExample.href);
  });

  let git = component.find('#git-link');

  it('Should contain a single git link', () => {
    expect(git.length).toEqual(1);
  });

  it('Should link to the git link', () => {
    expect(git.prop('href')).toEqual(myExample.git);
  });

  it('Should have the modal class set correctly', () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBeTrue;
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBeTrue;
  })
});