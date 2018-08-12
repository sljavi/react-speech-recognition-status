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
    volume: PropTypes.number,
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

  getVolumeLevel = () => {
    return Math.floor(this.props.volume);
  }

  speechRecognitionIcon = () => {
    let style = {};
    const speechRecognizerStateIcon = classnames('fa', 'fa-fw', {
      'fa-refresh fa-spin': this.props.connecting,
      'fa-exclamation-circle': this.props.error,
      'fa-microphone volume': this.props.recording,
      'fa-microphone-slash': !(this.props.connecting || this.props.error || this.props.recording)
    });
    if (this.props.recording && 'volume' in this.props) {
      const volume = this.getVolumeLevel();
      const background = `linear-gradient(to top, #333333 ${volume}%, #CCCCCC ${volume}%)`;
      style = { background };
    }
    return (
      <span className='status-icon-container'>
        <i className={speechRecognizerStateIcon} style={style}/>
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
    const classes = classnames('status-details', {
      'without-context': !this.props.contextName
    });
    return (
      <div className='speech-recognition-status compact'>
        {this.speechRecognitionIcon()}
        <span className={classes}>
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
