import React from 'react';
import classnames from 'classnames';

export default class SpeechRecognitionStatus extends React.Component {
  static propTypes = {
    contextName: React.PropTypes.string,
    error: React.PropTypes.string,
    connecting: React.PropTypes.bool.isRequired,
    recording: React.PropTypes.bool.isRequired,
    final: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render() {
    const speechRecognizerStateIcon = classnames('fa', 'fa-fw', {
      'fa-refresh fa-spin': this.props.connecting,
      'fa-exclamation-circle': this.props.error,
      'fa-microphone': this.props.recording,
      'fa-microphone-slash': !(this.props.connecting || this.props.error || this.props.recording)
    });

    const commandTextClasses = classnames('current-speech', {final: this.props.final});

    return (
      <div className='speech-recognition-status'>
        <div className='status'>
          <div className='speech'>
            {this.props.contextName &&
              <span className='context'>{this.props.contextName}</span>}
            <span className={commandTextClasses}>{this.props.text}</span>
          </div>
          <span className='status-icon-container'>
            <i className={speechRecognizerStateIcon}/>
          </span>
        </div>
      </div>
    );
  }
}
