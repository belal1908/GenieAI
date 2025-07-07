Here’s a paraphrased version of your README that keeps all key information intact but uses clearer, more concise, and modern language, suitable for a GitHub project page:

⸻

⚠️ IMPORTANT COMMUNITY NOTICE

This is a free and open-source community project—not a paid service.

Unlike expensive interview prep platforms with premium features like live audio, auto-answering, and voice support, this tool is:
	•	🧡 Non-commercial: Built with no financial gain or portfolio boosting in mind
	•	🌱 Open-source: Entire codebase is available for you to modify or extend
	•	🔌 Extensible: Want Whisper for voice input? Feel free to add it yourself
	•	👥 Community-driven: New features should come from contributors, not just one maintainer
	•	🙅 Not a support service: Feature requests and support must respect the project’s voluntary nature

👉 If you appreciate this tool, contribute—code, docs, or help others. That’s how open-source thrives.

⸻

🔑 API Key Troubleshooting

Both OpenAI and Gemini APIs are confirmed working.

If you’re having API issues:
	•	Delete your key from the config file
	•	Log out and back in
	•	Confirm the key is active and has credits
	•	Make sure the key format is correct (OpenAI keys start with sk-)

🛠 Config file location:
	•	Windows: C:\Users\[USERNAME]\AppData\Roaming\interview-coder-v1\config.json
	•	macOS: /Users/[USERNAME]/Library/Application Support/interview-coder-v1/config.json

⸻

🎓 About This Project

This tool offers core features of premium coding interview assistants—for free, locally, and with your own API key. It’s built to help you:
	•	Run everything privately on your machine
	•	Avoid high subscription fees
	•	Customize for your needs
	•	Learn from a fully transparent codebase

⸻

🧩 Key Features
	•	🔍 Invisible Mode: Bypasses most screen sharing/recording tools
	•	📸 Smart Screenshots: Separates question/code captures
	•	🧠 AI-Powered: Problem analysis, solution generation, debugging
	•	🧰 Real-Time Debugging: Get structured fixes with explanations
	•	🎛 Customizable UI: Move, resize, zoom, and adjust opacity
	•	🤖 Model Switching: Choose GPT-4o or GPT-4o-mini
	•	🔐 Privacy First: Data stays local except for API calls

⸻

⌨️ Global Shortcuts

Action	Shortcut (Windows/Mac)
Toggle visibility	Ctrl/Cmd + B
Move window	Ctrl/Cmd + Arrow keys
Take screenshot	Ctrl/Cmd + H
Delete last screenshot	Ctrl/Cmd + L
Analyze screenshots	Ctrl/Cmd + Enter
Start new problem	Ctrl/Cmd + R
Quit	Ctrl/Cmd + Q
Adjust opacity	Ctrl/Cmd + [ or ]
Zoom	Ctrl/Cmd + = / - / 0


⸻

🕵️ Invisibility Support

The app is undetectable by:
	•	Zoom (below v6.1.6)
	•	All browser screen recorders
	•	Discord
	•	macOS screenshots (Cmd + Shift + 3/4)

🚫 Not invisible to:
	•	Zoom v6.1.6+
	•	macOS screen recording (Cmd + Shift + 5)
🔗 Downgrade Zoom

⸻

🚀 Get Started

1. Clone & Install

git clone https://github.com/greeneu/interview-coder-withoupaywall-opensource.git
cd interview-coder-withoupaywall-opensource
npm install

2. Clean Build (Recommended)

npm run clean

3. Run the App

Windows:

stealth-run.bat

macOS/Linux:

chmod +x stealth-run.sh
./stealth-run.sh

Default state is invisible. Press Ctrl+B (or Cmd+B) to show the window.

⸻

📦 Build Distributables

macOS (DMG):

npm run package-mac

Windows (Installer):

npm run package-win

Files are saved in the release folder.

⸻

🧠 How It Works
	1.	Setup
	•	Launch invisible overlay
	•	Add your OpenAI API key
	•	Select model and language
	2.	Capture
	•	Take screenshots with Ctrl/Cmd + H
	•	Manage them using shortcuts
	3.	Process
	•	Press Ctrl/Cmd + Enter to analyze with GPT-4o
	•	Get solutions + explanations + time/space complexity
	4.	Debug
	•	Screenshot errors, bugs, or failed code
	•	Get actionable feedback
	5.	Window Controls
	•	Move, zoom, resize, and toggle opacity with shortcuts
	6.	Multi-language Support
	•	Switch languages easily
	•	Preferences are saved automatically

⸻

⚙️ Customization

You can modify everything:
	•	🌍 AI Models: Add Claude, Deepseek, LLaMA, etc. via ProcessingHelper.ts
	•	🧑‍💻 UI & Settings: Update SettingsDialog.tsx
	•	🌐 Languages: Add your favorite languages for code generation
	•	🧪 Features: Extend core functionality with your own logic

Basic JavaScript/TypeScript skills are enough.

⸻

🔄 Model Integration

To use alternative LLMs:
	1.	Update electron/ProcessingHelper.ts to support new APIs
	2.	Add options in src/components/Settings/SettingsDialog.tsx
	3.	Enjoy multi-model support

⸻

⚖️ Feature Comparison

Feature	Paid Tools	This Project
Price	$60/month	Free (API only)
AI Solutions	✅	✅
Debug Assistant	✅	✅
Invisibility	✅	✅
Multi-language	✅	✅
Time/Space Analysis	✅	✅
Window Control	✅	✅
Authentication	Required	❌ None
Customization	Limited	✅ Full
Model Options	Few	✅ User’s Choice
Privacy	Cloud-based	✅ 100% Local


⸻

🧰 Tech Stack
	•	Electron
	•	React + TypeScript
	•	TailwindCSS
	•	Vite
	•	Radix UI
	•	OpenAI API

⸻

📜 License

This project is licensed under the GNU AGPLv3.
	•	Free to use, modify, and distribute
	•	Modified versions must also be AGPL
	•	If hosted on a network, users must get source access
🔗 Learn more

⸻

🤝 Contributing

We welcome contributors!
Please read the CONTRIBUTING.md for guidelines.

⸻

🧭 Ethics Disclaimer

This is an educational tool. Use it responsibly:
	•	Don’t cheat in interviews
	•	Use it to learn, not just get answers
	•	Understand the solutions you submit

⸻

📫 Support

Having issues?
Open an issue on GitHub to report bugs or request features.

⸻

🛠 This is a community-powered initiative. If it helps you, help it grow by giving back. That’s the open-source spirit.

⸻

Would you like a short version or a custom banner for the top of your GitHub repo too?