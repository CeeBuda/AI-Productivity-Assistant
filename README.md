# SBU Productivity Assistant 🧠

An AI-powered workplace productivity tool designed to help professionals work smarter, not harder. The SBU Productivity Assistant combines three powerful features to streamline your daily workflow: intelligent email generation, meeting notes summarization, and smart task planning.

## 🚀 Features

### 1. Smart Email Generator
Generate professional, context-based emails in seconds with:
- **Tone Variations**: Choose from formal, informal, or persuasive tones
- **Audience Adaptation**: Tailor content for clients, managers, team members, or colleagues
- **Multiple Purposes**: Support for meeting requests, project updates, follow-ups, feedback, proposals, and apologies
- **Copy & Download**: Easily copy to clipboard or download as a text file

### 2. Meeting Notes Summarizer
Convert lengthy meeting notes into actionable summaries:
- **Automatic Extraction**: Identifies key points, decisions, and action items
- **Deadline Highlighting**: Easily spot important deadlines and responsibilities
- **Meeting Context**: Capture meeting title, date, and attendees
- **Structured Output**: Organized format for quick reference

### 3. AI Task Planner & Scheduler
Generate optimized daily or weekly plans with:
- **Smart Prioritization**: Tasks ranked by urgency and importance
- **Time Blocking**: Structured schedule with time allocation
- **Productivity Strategies**: Evidence-based tips for time optimization
- **Flexible Planning**: Adjust for available hours per day

## 💻 Responsive Design

- ✅ **Desktop**: Full-featured experience on large screens
- ✅ **Tablet**: Optimized layout for iPad and similar devices
- ✅ **Mobile**: Touch-friendly interface for smartphones
- ✅ **Professional UI/UX**: Modern design with smooth animations

## 🎨 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS Variables for easy theming
- **Responsive**: Mobile-first approach with media queries
- **Icons**: Font Awesome 6.4.0
- **Deployment**: GitHub Pages

## 📋 Project Structure

```
AI-Productivity-Assistant/
├── index.html          # Main HTML structure
├── styles.css          # Responsive styling
├── script.js           # AI functionality and interactions
├── README.md           # Project documentation
└── .github/
    └── workflows/      # GitHub Actions (optional)
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CeeBuda/AI-Productivity-Assistant.git
   cd AI-Productivity-Assistant
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No server or dependencies required!

3. **Start using**:
   - Navigate to the feature you want
   - Fill in the required information
   - Click generate and see the magic happen

### Deployed Online

The application is deployed and accessible at:
🔗 **[SBU Productivity Assistant - Live Demo](https://ceebuda.github.io/AI-Productivity-Assistant/)**

## 📱 How to Use

### Email Generator
1. Select the recipient type (Client, Manager, Team, Colleague)
2. Choose your desired tone (Formal, Informal, Persuasive)
3. Select the email purpose (Meeting Request, Update, etc.)
4. Add context and key points
5. Click "Generate Email"
6. Copy or download the generated email

### Meeting Notes Summarizer
1. Enter the meeting title (optional)
2. Add the meeting date (optional)
3. List attendees (optional)
4. Paste your meeting notes
5. Click "Summarize Notes"
6. Review the structured summary
7. Copy or download the summary

### Task Planner
1. Choose planning period (Daily or Weekly)
2. Set your start date
3. Specify available hours per day
4. List your tasks with estimated durations
5. Add any priorities or constraints
6. Click "Generate Plan"
7. Follow the optimized schedule

## 🎯 Key Benefits

- ⏱️ **Save Time**: Generate professional content in seconds
- 📊 **Increase Productivity**: Structured planning and prioritization
- 💼 **Professional Communication**: Tone-adapted emails for any situation
- 🎯 **Better Organization**: Clear meeting notes and action items
- 📱 **Work Anywhere**: Fully responsive, works on any device
- 🔒 **Privacy First**: All processing done locally in your browser

## 🧬 AI Integration

The current version includes simulated AI responses. For production use, you can integrate:
- **OpenAI GPT-4**: For advanced language generation
- **Google Gemini**: For multi-modal AI capabilities
- **Anthropic Claude**: For nuanced conversation understanding
- **Custom ML Models**: For specialized workplace tasks

### Integration Example (OpenAI):
```javascript
const generateEmailWithOpenAI = async (prompt) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }]
        })
    });
    return await response.json();
};
```

## 🔧 Customization

### Change Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #5b21b6;      /* Purple */
    --secondary-color: #0f172a;    /* Dark Blue */
    --accent-color: #06b6d4;       /* Cyan */
    /* ... more colors ... */
}
```

### Add New Email Purposes
Edit the `purposeMap` in `script.js`:
```javascript
newPurpose: {
    subject: 'Your Subject',
    body: 'Your email body template'
}
```

## 📊 Browser Support

- Chrome/Edge: ✅ Full Support
- Firefox: ✅ Full Support
- Safari: ✅ Full Support
- IE 11: ⚠️ Partial Support

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Roadmap

- [ ] Real AI API integration (OpenAI/Google)
- [ ] User authentication and cloud storage
- [ ] Export to PDF/Word formats
- [ ] Email template library
- [ ] Calendar integration
- [ ] Team collaboration features
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Mobile app versions
- [ ] Browser extensions

## 🐛 Known Issues

- Simulated AI responses are templates (integrate real API for production)
- File download uses .txt format (can extend to PDF/DOCX)
- No persistent storage between sessions (add IndexedDB/Firebase)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Sibusiso Chili**
- GitHub: [@CeeBuda](https://github.com/CeeBuda)
- Project: [AI-Productivity-Assistant](https://github.com/CeeBuda/AI-Productivity-Assistant)

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- Inspired by modern productivity tools
- Built with attention to user experience

## 📞 Support

If you encounter any issues or have suggestions:
1. Check existing issues: [GitHub Issues](https://github.com/CeeBuda/AI-Productivity-Assistant/issues)
2. Create a new issue with detailed description
3. Include screenshots or error messages when relevant

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [GitHub Pages Documentation](https://docs.github.com/en/pages) - Deployment guide
- [Font Awesome Icons](https://fontawesome.com/) - Icon library
- [CSS Tricks](https://css-tricks.com/) - CSS techniques and best practices

---

**Made with ❤️ for better workplace productivity**

Last Updated: August 2024
