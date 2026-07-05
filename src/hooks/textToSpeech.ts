import { useCallback, useEffect, useRef, useState } from 'react';

const PREFERRED_VOICE_NAME = 'Microsoft Clara Online (Natural) - English (Canada)';

function useTextToSpeech() {
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const available = speechSynthesis.getVoices();
      if (available.length > 0) {
        setVoices(available);
      }
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    // Warm up the speech engine to avoid clipped first utterance
    const warmup = new SpeechSynthesisUtterance(' ');
    warmup.volume = 0;
    speechSynthesis.speak(warmup);

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const defaultVoice = voices.find((v) => v.name === PREFERRED_VOICE_NAME);

  const speak = useCallback(
    (text: string, voice?: SpeechSynthesisVoice) => {
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice ?? defaultVoice ?? null;
      utterance.pitch = 1;
      utterance.rate = 0.9;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => {
        setSpeaking(false);
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
    },
    [defaultVoice]
  );

  const cancel = useCallback(() => {
    speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  return { speak, cancel, speaking, voices };
}

export default useTextToSpeech;
