import React from 'react';
import assert from 'assert';
import TestUtils from 'react-addons-test-utils';
import Checkbox from '../../src/Checkbox';

describe('Todo-item component', () => {
  let renderedComponent;
  let inputEl;

  before('render and locate element', () => {
    renderedComponent = TestUtils.renderIntoDocument(
      <Checkbox done={false} name="Write Tutorial"/>
    );

    inputEl = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'input'
    );
  });

  it('<input> should be of type "checkbox"', () => {
    assert(inputEl.getAttribute('type') === 'checkbox');
  });

  it('<input> should not be checked', () => {
    assert(inputEl.checked === false);
  });

});
