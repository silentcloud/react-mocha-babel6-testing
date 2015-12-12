import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import TestUtils from 'react-addons-test-utils';
import Checkbox from '../../src/Checkbox';

describe('Todo-item component', () => {
  let checkboxComponet;
  let checkboxNode;
  let inputEl;

  before('render and locate element', () => {
    checkboxComponet = TestUtils.renderIntoDocument(
      <Checkbox done={false} onChange={} />
    );

    checkboxNode = ReactDOM.findDOMNode(checkboxComponet);

    inputEl = TestUtils.findRenderedDOMComponentWithTag(
      checkboxComponet,
      'input'
    );
  });

  it('<input> should not be checked', () => {
    assert(inputEl.checked === false);
  });

  it('<input> label should be "not checked"', () => {
    assert(checkboxNode.textContent === 'not checked');
  });

  it('<input> label should be "checked" after change', () => {
    TestUtils.Simulate.change(inputEl, {
      target: {
        checked: true
      }
    });
    assert(checkboxNode.textContent === 'checked');
  });

});
