[![Build Status](https://travis-ci.org/sljavi/react-speech-recognition-status.svg?branch=master)](https://travis-ci.org/sljavi/react-speech-recognition-status) [![Coverage Status](https://coveralls.io/repos/github/sljavi/react-speech-recognition-status/badge.svg?branch=master)](https://coveralls.io/github/sljavi/react-speech-recognition-status?branch=master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/6759438331b94413b9a741fbd2c9a01d)](https://www.codacy.com/app/javi-pzv/react-speech-recognition-status?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sljavi/react-speech-recognition-status&amp;utm_campaign=Badge_Grade)

# React Speech Recognition Status

React component useful to display the speech recognition status

![](http://i.imgur.com/OIOiPw4.png)

## Install

```
npm install react-speech-recognition-status
```

## Requirements
`react`, `react-dom` and `font-awesome` have be installed

## Usage

```javascript
import SpeechRecognitionStatus from 'react-speech-recognition-status';

const SpeechRecognitionStatusComponent = <SpeechRecognitionStatus
  contextName='Foo'
  recording
  final
  text='hello world'
/>
```

## Supported Options

`contextName(string)`: Displays a label at the left of the transcription

`error(bool)`: When is `true` displays an error icon

`connecting(bool)`: When is `true` displays a connecting icon

`recording(bool)`: When is `true` displays a mic icon

`final(bool)`: When is `true` adds a classname `'final'` to the text container

`text(string)`: Displays the given transcription into the text container

