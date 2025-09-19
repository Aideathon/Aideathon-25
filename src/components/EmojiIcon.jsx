import React from "react";

// This component maps a few common emojis to lucide-react icons.
// It gracefully falls back to rendering the raw character if lucide-react is not installed.
let Lucide;
try {
  Lucide = require("lucide-react");
} catch (e) {
  Lucide = null;
}

const mapping = {
  "🔥": "Fire",
  "😎": "Smile",
  "🙂": "Smile",
  "😊": "Smile",
  "✨": "Sparkles",
  "✅": "CheckCircle",
  "📌": "MapPin",
  "🎉": "PartyPopper", // fallback - lucide may not have this; handled below
  "🔔": "Bell",
  "⚙": "Settings",
  "📝": "Edit",
  "📁": "Folder",
  "❗": "AlertCircle",
  "💡": "Lightbulb",
};

export default function EmojiIcon({ char, className = "icon", size = 16, title }) {
  const name = mapping[char];
  if (Lucide && name && Lucide[name]) {
    const Icon = Lucide[name];
    return <Icon size={size} className={className} title={title || char} />;
  }
  // Fallback: simple styled span
  return (
    <span className={className} aria-hidden="true">
      {char}
    </span>
  );
}
