import { useCallback, useEffect, useRef } from 'react';
import type { GridItem } from '../models/GridItem';
import { getSoundPath } from '../utils/getAssetPath';
import useTextToSpeech from './textToSpeech';

type PlayableItem = Pick<GridItem, 'name' | 'sound'>;

function useItemAudio() {
  const { speak, cancel: cancelSpeech, ...speech } = useTextToSpeech();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(
    () => () => {
      audioRef.current?.pause();
    },
    []
  );

  const cancel = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    cancelSpeech();
  }, [cancelSpeech]);

  const playItem = useCallback(
    (item: PlayableItem) => {
      cancel();

      if (!item.sound) {
        speak(item.name);
        return;
      }

      const audio = new Audio(getSoundPath(item.sound));
      audioRef.current = audio;
      void audio.play().catch(() => {
        if (audioRef.current === audio) {
          audioRef.current = null;
          speak(item.name);
        }
      });
    },
    [cancel, speak]
  );

  return { playItem, cancel, ...speech };
}

export default useItemAudio;
