# CloakBoard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform: Cross-Platform](https://img.shields.io/badge/Platform-Cross%20Platform-blue.svg)](https://github.com/0necontroller/cloakboard)

CloakBoard is a lightweight desktop application designed to supercharge your meeting productivity. Create and organize notes for your conferences, then summon a semi-transparent, always-on-top overlay window during calls. The magic? It's completely invisible to screen-sharing tools—keeping your private cues hidden while you shine.

Perfect for remote workers, presenters, and anyone who needs discreet support without distractions.

## Features

- **Seamless Note Management**: Easily create, edit, and categorize notes for different meetings or topics.
- **Ghost Overlay**: Launch a customizable, semi-transparent window that floats above your video call interface.
- **Screen-Share Proof**: Uses advanced window isolation to ensure your notes aren't captured by Zoom, Teams, or any sharing software.
- **Quick Access Shortcuts**: Hotkeys for instant overlay toggle, note switching, and font adjustments.
- **Cross-Platform Support**: Works on Windows, macOS, and Linux.
- **Minimalist Design**: Clean, distraction-free UI with dark/light mode support.
- **Export & Backup**: Save notes as Markdown, PDF, or sync via cloud storage.

## Installation

### Prerequisites
- Node.js (v16 or later) if building from source.
- For pre-built binaries: No additional setup required.

### Quick Start (Pre-Built)
1. Download the latest release from the [Releases page](https://github.com/yourusername/cloakboard/releases).
2. Extract the archive and run the installer for your OS:
   - **Windows**: `CloakBoard-Setup.exe`
   - **macOS**: `CloakBoard.dmg`
   - **Linux**: `CloakBoard.AppImage` (make executable with `chmod +x`).
3. Launch CloakBoard and follow the onboarding wizard to set up your first note set.

### From Source
1. Clone the repo:
   ```
   git clone https://github.com/yourusername/cloakboard.git
   cd cloakboard
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Build and run:
   ```
   npm run build
   npm start
   ```
   (For production builds: `npm run dist`.)

## Usage

1. **Setup Notes**:
   - Open CloakBoard and create a new "Meeting Vault."
   - Add notes via the editor—use bullet points, bold text, or even embed images.

2. **During a Meeting**:
   - Hit `Ctrl+Shift+O` (or your custom hotkey) to summon the overlay.
   - Adjust opacity, size, and position via the toolbar.
   - Switch note sets on-the-fly with `Ctrl+Shift+N`.

3. **Pro Tips**:
   - Pin frequently used notes for one-click access.
   - Enable "Auto-Hide" to fade the overlay when not in focus.
   - Test your setup with a screen share to confirm invisibility.

For detailed guides, check the [Wiki](https://github.com/0necontroller/cloakboard/wiki).

## Roadmap

- [x] Core overlay functionality
- [x] Note organization
- [ ] Mobile companion app
- [ ] AI-powered note suggestions
- [ ] Integration with calendar apps (Google Calendar, Outlook)

See the open issues for a prioritized list.

## Contributing

We welcome contributions! Whether it's bug fixes, new features, or documentation:

1. Fork the repo and create a feature branch (`git checkout -b feature/amazing-idea`).
2. Commit your changes (`git commit -m 'Add amazing idea'`).
3. Push to the branch (`git push origin feature/amazing-idea`).
4. Open a Pull Request.

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ for meeting warriors. Questions? Open an issue or join the discussion.*
