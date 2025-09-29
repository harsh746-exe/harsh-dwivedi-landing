# Email Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Go to API Keys section
4. Create new API key
5. Copy the key (starts with `re_`)

### Step 2: Add API Key
Create a `.env.local` file in your project root:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 3: Restart Server
```bash
npm run dev
```

## ✅ That's it! Emails will now be sent automatically.

---

## 🔄 Alternative: Keep Current Fallback

If you prefer not to set up email service:
- The form will still work
- Users will see "Resume request received" message
- They can use the "Send Email" button to contact you directly
- No additional setup required

## 📧 Email Template Preview

When working, users will receive:
- **Subject**: "Harsh Dwivedi - Resume & Portfolio"
- **Content**: Professional email with your info and resume attachment
- **Links**: LinkedIn, GitHub, Portfolio links included
