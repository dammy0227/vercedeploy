import React from "react";
import useVoiceGuidance from "../../../utils/useVoiceGuidance/useVoiceGuidance";

const VoiceToggle = ({ routeInstructions }) => {
  const { isSpeaking, speakInstructions, stopSpeaking } = useVoiceGuidance();

  const toggleVoice = () => {
    if (!isSpeaking) {
      speakInstructions(routeInstructions);
    } else {
      stopSpeaking();
    }
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <button onClick={toggleVoice} style={{ padding: "5px 10px", background: "#007bff", color: "white" }}>
        {isSpeaking ? "Disable Voice Guidance" : "Enable Voice Guidance"}
      </button>
    </div>
  );
};

export default VoiceToggle;

