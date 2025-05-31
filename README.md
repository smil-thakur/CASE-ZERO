Case Zero — Multiplayer Detective Game (WIP)

🎯 Concept

Case Zero is an immersive, AI-driven detective game where players solve mysteries by analyzing documents, images, and clues generated dynamically by AI. The gameplay focuses on critical thinking, deduction, and collaboration rather than graphics or action. Players sift through AI-created evidence to identify the culprit and crack the case.

The game supports single-player mode initially, with plans to expand into a multiplayer mode where players collaborate or compete to solve cases in real time.

⸻

🚀 Features (Planned)
	•	AI-generated cases: Each case contains a title, autopsy reports, suspects, and visual clues (documents, photos).
	•	Interactive clue analysis: Players explore and decode documents and images.
	•	Multiplayer gameplay: Real-time sessions with multiple players, sharing clues and making group decisions.
	•	Authentication: Secure login using Supabase + Google OAuth.
	•	Minimalist UI: Clean, document-centric interface with subtle animations.
	•	Responsive web app: Built with Next.js + TailwindCSS for fast, modern UI.
	•	State management: Zustand for simple and scalable state handling.
	•	Animations: Framer Motion for smooth UI transitions and engaging effects.
	•	Backend: Python FastAPI server for AI case generation and game logic.
	•	Real-time features: Supabase real-time subscriptions or WebSockets for multiplayer syncing.

⸻

🛠️ Tech Stack

Layer	Technology	Purpose
Frontend	Next.js + React	UI framework, routing, SSR
Styling	Tailwind CSS	Utility-first CSS framework
State Management	Zustand	Lightweight, simple global state
Animations	Framer Motion	UI animations and effects
Backend API	Python + FastAPI	AI case generation and game API
Database	Supabase (Postgres)	User auth, session, and game state
Authentication	Supabase + Google OAuth	Secure user login
Hosting	Vercel (frontend), Supabase + any cloud for backend	Deployment


⸻

🎮 Gameplay Flow (Single Player)
	1.	Player logs in with Google via Supabase Auth.
	2.	Player selects or starts a new case.
	3.	Frontend requests AI-generated case data from backend:
	•	JSON with case title, autopsy, suspects, documents, image descriptions.
	4.	AI generates document images & clues on the backend (or via integrated AI APIs).
	5.	Player navigates through clues:
	•	Views documents and images.
	•	Analyzes text & hidden hints.
	•	Takes notes or marks suspects.
	6.	Player submits their conclusion (choosing the culprit).
	7.	Backend evaluates and provides feedback (correct/incorrect).
	8.	Player can retry or start a new case.

⸻

🔄 Multiplayer Mode (Future)
	•	Players join the same case lobby.
	•	Clues and findings are shared in real time.
	•	Players discuss and vote on the culprit.
	•	Backend manages game state sync via Supabase realtime or WebSocket.
	•	Competitive or cooperative modes.

⸻

📋 Initial JSON Case Data Structure (Example)

{
  "caseTitle": "The Vanishing Heirloom",
  "autopsyReport": "Victim showed signs of strangulation...",
  "suspects": [
    {"id": "s1", "name": "John Doe", "motive": "Inheritance dispute"},
    {"id": "s2", "name": "Jane Smith", "motive": "Jealousy"}
  ],
  "documents": [
    {
      "id": "doc1",
      "title": "Will Copy",
      "content": "Last will and testament mentioning the heirloom..."
    }
  ],
  "images": [
    {
      "id": "img1",
      "description": "Photo of the crime scene showing broken vase.",
      "url": "generated-image-url"
    }
  ]
}


⸻

🗂️ Project Setup Tasks
	•	Initialize Next.js + TailwindCSS project
	•	Integrate Zustand for frontend state management
	•	Setup Supabase project and enable Google OAuth
	•	Create backend FastAPI service skeleton
	•	Design AI prompt templates for case generation
	•	Implement single-player case flow
	•	Create UI components for document/image viewing
	•	Add animations with Framer Motion
	•	Implement multiplayer game lobby and syncing (Supabase realtime or WebSockets)
	•	Build scoring and feedback system
	•	Polish UI/UX and mobile responsiveness
	•	Write tests and deployment scripts

⸻

📌 Notes
	•	Focus on simple, elegant UI — avoid heavy graphics.
	•	Prioritize modular code for easy future enhancements.
	•	Use environment variables for API keys and secrets.
	•	Start with single-player to solidify core mechanics before adding multiplayer.

⸻

