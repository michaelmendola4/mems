# Mems App Deployment Guide

This guide will walk you through deploying the Mems application to Vercel with secure API key handling.

## Prerequisites

1. An OpenAI account with API access
2. A Vercel account (free tier is sufficient)
3. Git installed on your computer

## Step 1: Prepare Your OpenAI API Key

1. Sign up or log in to your OpenAI account at https://platform.openai.com
2. Navigate to API keys: https://platform.openai.com/api-keys
3. Create a new API key and save it securely (you'll need it for deployment)
4. Make sure your account has sufficient credits for DALL-E image generation

## Step 2: Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to your project directory:
```bash
cd mems-app-nextjs
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy the application:
```bash
vercel
```

5. During deployment, you'll be prompted to set environment variables. Add:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key

### Option 2: Deploy with Vercel Dashboard

1. Push your code to a GitHub repository
2. Log in to Vercel: https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. In the project settings, add an environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
6. Deploy the project

## Step 3: Test Your Deployment

1. Once deployed, Vercel will provide you with a URL for your application
2. Visit the URL and test the memory creation functionality
3. Verify that images are being generated correctly

## Security Considerations

- Your OpenAI API key is stored securely as an environment variable
- The key is never exposed to the client-side code
- All API requests are made server-side through secure API routes
- Consider setting up usage limits in your OpenAI account to control costs

## Troubleshooting

If images aren't generating:
1. Check your OpenAI account has sufficient credits
2. Verify the environment variable is set correctly
3. Check Vercel logs for any error messages

## Updating Your Application

To update your application:
1. Make changes to your code
2. Push to your GitHub repository (if using Option 2)
3. Vercel will automatically redeploy your application

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
