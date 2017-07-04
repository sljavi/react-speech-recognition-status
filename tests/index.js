import React from 'react';
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
  text: 'foo'
};

function render(props = {}) {
  const updatedProps = {...defaultProps, ...props};
  const component = ReactTestUtils.renderIntoDocument(<SpeechRecognitionStatus {...updatedProps}/>);
  return ReactDOM.findDOMNode(component);
}

describe('speech recognition status component', () => {
  it('should render without throwing an error', function() {
    const el = render();
    expect(el.className).to.equal('speech-recognition-status');
  });

  it('should render the context name when is set', function() {
    let el = render();
    expect(el.querySelector('.context')).to.equal(null);
    el = render({
      contextName: 'bar'
    });
    expect(el.querySelector('.context').innerText).to.equal('bar');
  });

  it('should render the speech when is set', function() {
    let el = render();
    expect(el.querySelector('.current-speech').innerText).to.equal('foo');
  });

  it('should render add the class final to the text speech', function() {
    let el = render();
    expect(el.querySelector('.current-speech.final')).to.equal(null);

    el = render({
      error: '',
      connecting: false,
      recording: true,
      final: true,
    });

    expect(el.querySelector('.current-speech.final').innerText).to.equal('foo');
  });

  it('should render connecting icon', function() {
    const el = render({
      error: '',
      connecting: true,
      recording: false,
      final: false
    });

    expect(_.isElement(el.querySelector('.fa-refresh.fa-spin'))).to.equal(true);
  });

  it('should render error icon', function() {
    const el = render({
      error: 'some error',
      connecting: false,
      recording: true,
      final: false
    });

    expect(_.isElement(el.querySelector('.fa-exclamation-circle'))).to.equal(true);
  });

  it('should render recording icon', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: true,
      final: false
    });

    expect(_.isElement(el.querySelector('.fa-microphone'))).to.equal(true);
  });

  it('should render mute icon', function() {
    const el = render({
      error: '',
      connecting: false,
      recording: false,
      final: false
    });

    expect(_.isElement(el.querySelector('.fa-microphone-slash'))).to.equal(true);
  });

});
