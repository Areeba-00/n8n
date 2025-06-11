const templates = {
  video: [
    { id: 1, title: "AI 3D Documentary", date: "22 May 2025", price: 50 },
    { id: 2, title: "Common Issues", date: "22 May 2025", price: 55 },
    { id: 3, title: "Build a Motion Graphics AI System", date: "22 May 2025", price: 70 },
    { id: 4, title: "$0 POV AI Video Machine", date: "7 May 2025", price: 50 },
    { id: 5, title: "$0 Unlimited Long Form Horror Story", date: "29 Apr 2025", price: 80 },
    { id: 6, title: "AI Faceless Video Editor", date: "24 Apr 2025", price: 60 },
    { id: 7, title: "No-Code AI Avatar Video System", date: "8 Apr 2025", price: 65 },
    { id: 8, title: "AI Bedtime Story", date: "23 Mar 2025", price: 45 },
    { id: 9, title: "Retro-Future Jazz Music Videos", date: "20 Mar 2025", price: 70 },
    { id: 10, title: "Multilingual Faceless Videos", date: "18 Mar 2025", price: 90 },
    { id: 11, title: "$0 to Create 1000+ Videos on Autopilot", date: "12 Mar 2025", price: 100 },
    { id: 12, title: "Viral Animated Cat AI Videos", date: "6 Mar 2025", price: 65 },
    { id: 13, title: "Faceless Video Generator Comparison", date: "3 Mar 2025", price: 85 },
    { id: 14, title: "Faceless Video Research System", date: "15 Feb 2025", price: 60 },
    { id: 15, title: "AI Agent for Animated Faceless V2", date: "7 Feb 2025", price: 75 },
    { id: 16, title: "Create Faceless YouTube Videos", date: "3 Jan 2025", price: 90 },
    { id: 17, title: "Research YouTube Video Ideas", date: "30 Dec 2024", price: 40 }
  ],
  social: [
    { id: 18, title: "Family Guy Dialogue", date: "3 Jun 2025", price: 50 },
    { id: 19, title: "Your AI Marketing Design Team", date: "26 Apr 2025", price: 70 },
    { id: 20, title: "OpenAI's New GPT-Image-1 API", date: "29 Mar 2025", price: 60 },
    { id: 21, title: "OpenAI 4o Image Generation", date: "1 Mar 2025", price: 75 },
    { id: 22, title: "Pinterest Automation", date: "24 Feb 2025", price: 65 }
  ]
};

function getTemplateById(id) {
  id = Number(id);
  for(const group of Object.values(templates)) {
    for(const t of group) {
      if(t.id === id) return t;
    }
  }
  return null;
}