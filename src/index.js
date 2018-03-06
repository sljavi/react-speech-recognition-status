import React from 'react';
import classnames from 'classnames';
import './style.scss';
import PropTypes from 'prop-types';

export default class SpeechRecognitionStatus extends React.Component {
  static propTypes = {
    contextName: PropTypes.string,
    error: PropTypes.string,
    connecting: PropTypes.bool.isRequired,
    recording: PropTypes.bool.isRequired,
    final: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    compact: PropTypes.bool
  }

  speechRecognitionContext = () => {
    if (this.props.contextName) {
      return (
        <span className='context'><span>{this.props.contextName}</span></span>
      );
    }
  }

  speechRecognitionText = () => {
    const commandTextClasses = classnames('current-speech', {final: this.props.final});
    return (
      <span className={commandTextClasses}>{this.props.text}</span>
    );
  }

  speechRecognitionIcon = () => {
    const speechRecognizerStateIcon = classnames('fa', 'fa-fw', {
      'fa-refresh fa-spin': this.props.connecting,
      'fa-exclamation-circle': this.props.error,
      'fa-microphone': this.props.recording,
      'fa-microphone-slash': !(this.props.connecting || this.props.error || this.props.recording)
    });
    return (
      <span className='status-icon-container'>
        <i className={speechRecognizerStateIcon}/>
      </span>
    );
  }

  renderExpandedMode = () => {
    return (
      <div className='speech-recognition-status expanded'>
        <div className='status'>
          <div className='speech'>
            {this.speechRecognitionContext()}
            {this.speechRecognitionText()}
          </div>
          {this.speechRecognitionIcon()}
        </div>
      </div>
    );
  }

  renderCompactMode = () => {
    return (
      <div className='speech-recognition-status compact'>
        {this.speechRecognitionIcon()}
        <span className='status-details'>
          {this.speechRecognitionContext()}
          {(this.props.contextName || this.props.text) && this.speechRecognitionText()}
        </span>
      </div>
    );
  }

  render() {
    return this.props.compact ? this.renderCompactMode() : this.renderExpandedMode();
  }
}
