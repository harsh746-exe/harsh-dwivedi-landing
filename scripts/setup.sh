#!/bin/bash

# Setup script for Harsh Dwivedi Landing Page
echo "🚀 Setting up Harsh Dwivedi Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public directory if it doesn't exist
mkdir -p public

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Add your resume.pdf to the public/ directory"
echo "2. Update the Plausible domain in app/layout.tsx"
echo "3. Run 'npm run dev' to start development server"
echo "4. Run 'npm run build' to build for production"
echo ""
echo "Happy coding! 🎉"
