'use client';

import { useState, useEffect } from 'react';

export default function VoiceRecorder({ onTranscriptionComplete }) {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined') {
      // Check if browser supports the Web Speech API
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognitionInstance = new SpeechRecognition();
        
        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = true;
        recognitionInstance.lang = 'en-US';
        
        recognitionInstance.onresult = (event) => {
          let interimTranscript = '';
          let finalTranscript = '';
          
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }
          
          setTranscript(finalTranscript || interimTranscript);
        };
        
        recognitionInstance.onerror = (event) => {
          console.error('Speech recognition error', event.error);
          setIsRecording(false);
        };
        
        recognitionInstance.onend = () => {
          setIsRecording(false);
        };
        
        setRecognition(recognitionInstance);
      } else {
        setIsSupported(false);
      }
    }
    
    // Cleanup
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleRecording = () => {
    if (!recognition) return;
    
    if (isRecording) {
      recognition.stop();
      if (onTranscriptionComplete) {
        onTranscriptionComplete(transcript);
      }
    } else {
      setTranscript('');
      recognition.start();
    }
    
    setIsRecording(!isRecording);
  };

  return (
    <div className="voice-recorder">
      {!isSupported ? (
        <div className="text-red-500 text-sm mb-2">
          Voice recording is not supported in your browser. Please try using Chrome, Edge, or Safari.
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={toggleRecording}
            className={`flex items-center justify-center p-3 rounded-full ${
              isRecording ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            disabled={!isSupported}
          >
            {isRecording ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            )}
          </button>
          
          {isRecording && (
            <div className="mt-2 text-sm text-gray-600 flex items-center">
              <span className="inline-block h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Recording... Speak clearly
            </div>
          )}
          
          {transcript && (
            <div className="mt-3">
              <p className="text-sm text-gray-700 font-medium">Transcription:</p>
              <p className="text-sm text-gray-600 italic">{transcript}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
