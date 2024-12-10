// useVoiceGuidance.js
import { useState } from "react";

const useVoiceGuidance = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakInstructions = (instructions) => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support voice guidance.");
      return;
    }

    const synth = window.speechSynthesis;
    instructions.forEach((instruction, index) => {
      const utterance = new SpeechSynthesisUtterance(instruction);
      utterance.lang = "en-US";

      // Delay each instruction to prevent overlapping
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        if (index === instructions.length - 1) setIsSpeaking(false);
      };

      synth.speak(utterance);
    });
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return { isSpeaking, speakInstructions, stopSpeaking };
};

export default useVoiceGuidance;
