// ========== AI Generation Functions ==========

// Mock AI responses (simulating AI API calls)
// In production, these would call real AI APIs like OpenAI GPT-4, Google Gemini, etc.

const AIGenerators = {
    generateEmail: (recipient, tone, purpose, context) => {
        const toneMap = {
            formal: { greeting: 'Dear', closing: 'Best regards' },
            informal: { greeting: 'Hi', closing: 'Thanks' },
            persuasive: { greeting: 'Hello', closing: 'Looking forward to your response' }
        };

        const purposeMap = {
            meeting_request: {
                subject: 'Meeting Request',
                body: 'I would like to schedule a meeting to discuss the following matter.'
            },
            project_update: {
                subject: 'Project Update',
                body: 'I wanted to provide you with the latest update on our ongoing project.'
            },
            follow_up: {
                subject: 'Follow-up',
                body: 'I am reaching out as a follow-up to our previous conversation.'
            },
            feedback: {
                subject: 'Feedback',
                body: 'I would like to share some constructive feedback regarding the recent work.'
            },
            proposal: {
                subject: 'Proposal Submission',
                body: 'I am pleased to present the following proposal for your consideration.'
            },
            apology: {
                subject: 'Apology',
                body: 'I sincerely apologize for the inconvenience this may have caused.'
            }
        };

        const recipientGreeting = {
            client: 'Dear Valued Client',
            manager: 'Dear [Manager Name]',
            team: 'Hello Team',
            colleague: 'Hello [Colleague Name]'
        };

        const tone = toneMap[tone] || toneMap.formal;
        const purpose = purposeMap[purpose] || purposeMap.project_update;

        return `Subject: ${purpose.subject}

${tone.greeting} ${recipientGreeting[recipient] || recipientGreeting.colleague},

${purpose.body} Based on the details you provided:

${context}

Key Points:
• Clear and concise communication of your message
• Professional tone appropriate for the recipient
• Actionable next steps and clear call-to-action

Please let me know if you would like me to adjust anything or if you need any additional information.

${tone.closing},
[Your Name]
[Your Title]
[Your Contact Information]`;
    },

    summarizeNotes: (title, date, attendees, content) => {
        const lines = content.split('\n').filter(line => line.trim());
        
        let summary = `MEETING SUMMARY\n`;
        summary += `${'='.repeat(50)}\n\n`;
        
        if (title) summary += `Meeting: ${title}\n`;
        if (date) summary += `Date: ${new Date(date).toLocaleDateString()}\n`;
        if (attendees) summary += `Attendees: ${attendees}\n`;
        
        summary += `\nKEY POINTS:\n`;
        summary += `${'-'.repeat(50)}\n`;
        
        // Extract key points
        let keyPoints = lines.slice(0, Math.min(5, lines.length))
            .map(line => `• ${line.trim().replace(/^[-•*]\s*/, '')}`)
            .join('\n');
        summary += keyPoints + '\n\n';
        
        summary += `DECISIONS MADE:\n`;
        summary += `${'-'.repeat(50)}\n`;
        summary += `• Decision 1: Action item identified\n`;
        summary += `• Decision 2: Follow-up required\n`;
        summary += `• Decision 3: Resource allocation agreed\n\n`;
        
        summary += `ACTION ITEMS:\n`;
        summary += `${'-'.repeat(50)}\n`;
        summary += `1. [Owner]: Complete assigned task\n`;
        summary += `   - Deadline: Within 1 week\n`;
        summary += `   - Status: In Progress\n\n`;
        summary += `2. [Owner]: Follow up on progress\n`;
        summary += `   - Deadline: Within 2 weeks\n`;
        summary += `   - Status: Not Started\n\n`;
        summary += `3. [Owner]: Submit final report\n`;
        summary += `   - Deadline: Before next meeting\n`;
        summary += `   - Status: Not Started\n\n`;
        
        summary += `RESPONSIBILITIES:\n`;
        summary += `${'-'.repeat(50)}\n`;
        summary += `• Owner 1: Primary responsibility for implementation\n`;
        summary += `• Owner 2: Support and coordination role\n`;
        summary += `• Owner 3: Monitoring and reporting\n\n`;
        
        summary += `NEXT MEETING:\n`;
        summary += `${'-'.repeat(50)}\n`;
        summary += `Date: [To be scheduled]\n`;
        summary += `Duration: 1 hour\n`;
        summary += `Purpose: Review action items and progress\n`;
        
        return summary;
    },

    generateTaskPlan: (period, startDate, hoursPerDay, tasks, priorities) => {
        let plan = `AI OPTIMIZED ${period.toUpperCase()} TASK PLAN\n`;
        plan += `${'='.repeat(60)}\n\n`;
        
        plan += `PLAN OVERVIEW:\n`;
        plan += `${'-'.repeat(60)}\n`;
        plan += `Planning Period: ${period === 'daily' ? 'Daily' : 'Weekly'}\n`;
        plan += `Start Date: ${new Date(startDate).toLocaleDateString()}\n`;
        plan += `Available Hours/Day: ${hoursPerDay} hours\n\n`;
        
        plan += `PRIORITIZED TASK LIST:\n`;
        plan += `${'-'.repeat(60)}\n`;
        plan += `Priority 1 (CRITICAL - Must Complete Today):\n`;
        plan += `• Task: High-impact deliverable\n`;
        plan += `  Duration: 2 hours\n`;
        plan += `  Time Slot: 9:00 AM - 11:00 AM\n`;
        plan += `  Impact: Critical for project success\n\n`;
        
        plan += `Priority 2 (HIGH - Important):\n`;
        plan += `• Task: Scheduled meetings & collaboration\n`;
        plan += `  Duration: 1.5 hours\n`;
        plan += `  Time Slot: 2:00 PM - 3:30 PM\n`;
        plan += `  Impact: Stakeholder engagement\n\n`;
        
        plan += `Priority 3 (MEDIUM - Should Complete):\n`;
        plan += `• Task: Administrative tasks & follow-ups\n`;
        plan += `  Duration: 1 hour\n`;
        plan += `  Time Slot: 3:30 PM - 4:30 PM\n`;
        plan += `  Impact: Process efficiency\n\n`;
        
        plan += `Priority 4 (LOW - If Time Permits):\n`;
        plan += `• Task: Professional development & learning\n`;
        plan += `  Duration: 30 minutes\n`;
        plan += `  Time Slot: 4:30 PM - 5:00 PM\n`;
        plan += `  Impact: Skill enhancement\n\n`;
        
        plan += `DAILY TIME OPTIMIZATION STRATEGY:\n`;
        plan += `${'-'.repeat(60)}\n`;
        plan += `1. Morning Boost (9:00 AM - 12:00 PM)\n`;
        plan += `   - Tackle your most critical task when energy is highest\n`;
        plan += `   - No distractions, deep work focus\n`;
        plan += `   - Expected output: 70% of daily value\n\n`;
        
        plan += `2. Collaboration Hours (1:00 PM - 3:30 PM)\n`;
        plan += `   - Attend meetings and team sync-ups\n`;
        plan += `   - Collaborative problem-solving\n`;
        plan += `   - Quick decisions and feedback loops\n\n`;
        
        plan += `3. Administrative Block (3:30 PM - 5:00 PM)\n`;
        plan += `   - Process emails and messages\n`;
        plan += `   - Update documentation\n`;
        plan += `   - Plan tomorrow's priorities\n\n`;
        
        plan += `TIME-BLOCKING SCHEDULE:\n`;
        plan += `${'-'.repeat(60)}\n`;
        plan += `9:00 AM  - 12:00 PM  | Deep Work - Main Deliverable (3 hrs)\n`;
        plan += `12:00 PM - 1:00 PM   | Lunch Break\n`;
        plan += `1:00 PM  - 2:30 PM   | Meetings & Collaboration (1.5 hrs)\n`;
        plan += `2:30 PM  - 3:00 PM   | Quick Task Review (30 mins)\n`;
        plan += `3:00 PM  - 4:00 PM   | Admin & Follow-ups (1 hr)\n`;
        plan += `4:00 PM  - 5:00 PM   | Planning & Learning (1 hr)\n\n`;
        
        plan += `PRODUCTIVITY TIPS:\n`;
        plan += `${'-'.repeat(60)}\n`;
        plan += `✓ Use Pomodoro technique for deep work sessions\n`;
        plan += `✓ Turn off notifications during focus time\n`;
        plan += `✓ Group similar tasks together\n`;
        plan += `✓ Take 5-10 minute breaks between sessions\n`;
        plan += `✓ Review and adjust plan daily based on outcomes\n`;
        plan += `✓ Track completed tasks for motivation\n`;
        plan += `✓ Allocate buffer time for unexpected issues\n`;
        
        return plan;
    }
};

// ========== UI Navigation & Tab Management ==========

const navigateTo = (tabName) => {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (targetTab) {
        targetTab.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

// ========== Event Listeners ==========

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const tabName = link.getAttribute('data-tab');
            navigateTo(tabName);
            navMenu.classList.remove('active');
            e.preventDefault();
        });
    });

    // ========== Email Generator ==========
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const recipient = document.getElementById('emailRecipient').value;
            const tone = document.getElementById('emailTone').value;
            const purpose = document.getElementById('emailPurpose').value;
            const context = document.getElementById('emailContext').value;

            if (!recipient || !tone || !purpose || !context) {
                showToast('Please fill in all required fields', 'warning');
                return;
            }

            const generatedEmail = AIGenerators.generateEmail(recipient, tone, purpose, context);
            const outputBox = document.getElementById('emailOutput');
            const copyBtn = document.getElementById('copyEmailBtn');
            const downloadBtn = document.getElementById('downloadEmailBtn');

            outputBox.textContent = generatedEmail;
            copyBtn.style.display = 'inline-flex';
            downloadBtn.style.display = 'inline-flex';

            showToast('Email generated successfully!', 'success');

            // Copy button
            copyBtn.onclick = () => copyToClipboard(generatedEmail, 'Email');

            // Download button
            downloadBtn.onclick = () => downloadAsFile(generatedEmail, 'email.txt');
        });
    }

    // ========== Notes Summarizer ==========
    const notesForm = document.getElementById('notesForm');
    if (notesForm) {
        notesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const title = document.getElementById('notesTitle').value;
            const date = document.getElementById('notesDate').value;
            const attendees = document.getElementById('notesAttendees').value;
            const content = document.getElementById('notesContent').value;

            if (!content) {
                showToast('Please enter meeting notes', 'warning');
                return;
            }

            const generatedSummary = AIGenerators.summarizeNotes(title, date, attendees, content);
            const outputBox = document.getElementById('notesOutput');
            const copyBtn = document.getElementById('copyNotesBtn');
            const downloadBtn = document.getElementById('downloadNotesBtn');

            outputBox.textContent = generatedSummary;
            copyBtn.style.display = 'inline-flex';
            downloadBtn.style.display = 'inline-flex';

            showToast('Summary generated successfully!', 'success');

            // Copy button
            copyBtn.onclick = () => copyToClipboard(generatedSummary, 'Summary');

            // Download button
            downloadBtn.onclick = () => downloadAsFile(generatedSummary, 'meeting-summary.txt');
        });
    }

    // ========== Task Planner ==========
    const plannerForm = document.getElementById('plannerForm');
    if (plannerForm) {
        plannerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const period = document.getElementById('planPeriod').value;
            const startDate = document.getElementById('planDate').value;
            const hours = document.getElementById('planHours').value;
            const tasks = document.getElementById('planTasks').value;
            const priorities = document.getElementById('planPriorities').value;

            if (!period || !startDate || !hours || !tasks) {
                showToast('Please fill in all required fields', 'warning');
                return;
            }

            const generatedPlan = AIGenerators.generateTaskPlan(period, startDate, hours, tasks, priorities);
            const outputBox = document.getElementById('plannerOutput');
            const copyBtn = document.getElementById('copyPlanBtn');
            const downloadBtn = document.getElementById('downloadPlanBtn');

            outputBox.textContent = generatedPlan;
            copyBtn.style.display = 'inline-flex';
            downloadBtn.style.display = 'inline-flex';

            showToast('Plan generated successfully!', 'success');

            // Copy button
            copyBtn.onclick = () => copyToClipboard(generatedPlan, 'Plan');

            // Download button
            downloadBtn.onclick = () => downloadAsFile(generatedPlan, 'task-plan.txt');
        });
    }
});

// ========== Utility Functions ==========

const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${label} copied to clipboard!`, 'success');
    }).catch(err => {
        showToast('Failed to copy to clipboard', 'error');
    });
};

const downloadAsFile = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    showToast(`${filename} downloaded successfully!`, 'success');
};

const showToast = (message, type = 'info') => {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

// ========== Smooth Scrolling for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});