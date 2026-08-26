# Contributing to SBU Productivity Assistant

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome all skill levels
- Provide constructive feedback
- Focus on the code, not the person

## How to Contribute

### 1. Report Bugs

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots or error messages
- Browser and OS information

### 2. Suggest Features

Have an idea for improvement? Open an issue with:
- Clear description of the feature
- Use case or benefit
- Possible implementation approach
- Any relevant mockups or examples

### 3. Submit Code Changes

#### Setup

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR-USERNAME/AI-Productivity-Assistant.git
cd AI-Productivity-Assistant
```

#### Create a Branch

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-bug-fix
```

#### Make Changes

- Follow the existing code style
- Keep changes focused and minimal
- Test thoroughly in browsers
- Update documentation if needed

#### Commit

```bash
# Stage your changes
git add .

# Commit with clear message
git commit -m "Add feature: description of changes"
```

#### Push & Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name
```

Then:
1. Go to the original repository
2. Click "Compare & pull request"
3. Fill in the PR description
4. Submit the PR

### 4. Documentation

- Update README.md if adding features
- Add comments for complex code
- Keep documentation current
- Fix typos and improve clarity

## Development Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Add descriptive IDs and classes
- Include ARIA labels where appropriate

### CSS
- Use CSS variables for colors
- Follow mobile-first approach
- Keep specificity low
- Comment complex sections
- Use meaningful class names

### JavaScript
- Use vanilla JavaScript (no frameworks)
- Write clear, readable code
- Add comments for complex logic
- Follow naming conventions (camelCase)
- Keep functions focused and small

### Git
- Write clear commit messages
- One feature per branch
- Keep PRs focused and reviewable
- Squash commits if requested

## Testing

Before submitting:

- [ ] Test on Chrome/Firefox/Safari
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Verify all forms work
- [ ] Check copy/download functions
- [ ] Verify no console errors

## Pull Request Process

1. Update documentation
2. Add tests if applicable
3. Ensure CI passes
4. Request review
5. Address feedback
6. Get approval
7. Merge when ready

## Project Structure

```
AI-Productivity-Assistant/
├── index.html          # Main HTML
├── styles.css          # Styling
├── script.js           # JavaScript logic
├── README.md           # Documentation
├── CONTRIBUTING.md     # This file
├── DEPLOYMENT.md       # Deployment guide
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## Feature Ideas for Contributors

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Export to PDF/DOCX
- [ ] Local storage for history
- [ ] Real AI API integration
- [ ] Email template library
- [ ] Calendar integration
- [ ] Team collaboration features
- [ ] Browser extension
- [ ] Mobile app

## Questions?

- Check existing issues
- Create a new discussion
- Open a GitHub issue
- Comment on related PRs

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Acknowledged in releases
- Featured in project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making SBU Productivity Assistant better! 🚀
