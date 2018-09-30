import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import SpeechRecognitionStatus from './../src/index';
import _ from 'lodash';

const defaultProps = {
  contextName: '',
  error: '',
  connecting: false,
  recording: true,
  final: false,
  text: 'foo',
  sleeping: false
};

function render(props = {}) {
  const updatedProps = {...defaultProps, ...props};
  return renderer
    .create(<SpeechRecognitionStatus {...updatedProps}/>)
    .toJSON();
}

describe('speech recognition status component', () => {
  it('should render without throwing an error', function() {
    const el = render();
    expect(el).toMatchSnapshot();
  });

  it('should render the context name when is set', function() {
    const el = render({
      contextName: 'bar'
    });
    expect(el).toMatchSnapshot();
  });

  it('should render add the class final to the text speech', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: true,
      final: true,
    });

    expect(el).toMatchSnapshot();
  });

  it('should render connecting icon', function() {
    const el = render({
      error: '',
      connecting: true,
      recording: false,
      final: false
    });

    expect(el).toMatchSnapshot();
  });

  it('should render error icon', function() {
    const el = render({
      error: 'some error',
      connecting: false,
      recording: true,
      final: false
    });

    expect(el).toMatchSnapshot();
  });

  it('should render recording icon', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: true,
      final: false
    });

    expect(el).toMatchSnapshot();
  });

  it('should render recording icon with volume level', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: true,
      final: false,
      volume: 70
    });

    expect(el).toMatchSnapshot();
  });

  it('should render mute icon', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: false,
      final: false
    });

    expect(el).toMatchSnapshot();
  });

  it('should render compact view', function() {
    const el = render({
      compact: true
    });

    expect(el).toMatchSnapshot();
  });

  it('should render sleeping compact view', function() {
    const el = render({
      compact: true,
      sleeping: true
    });

    expect(el).toMatchSnapshot();
  });

});
