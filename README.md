# Text-to-Image Generator - Electron App

A desktop application for generating images from text prompts using DALL-E API.

## Features

- Text-to-image generation using OpenAI DALL-E
- Material-UI based professional interface
- Image download functionality
- Status indicators for API calls
- Error handling and user feedback
- Zustand state management

## Technology Stack

- **Frontend**: Electron + React + TypeScript
- **UI Framework**: Material-UI
- **State Management**: Zustand
- **API Integration**: Axios
- **Build Tool**: Vite + Electron Builder

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example` and add your OpenAI API key:

```
VITE_OPENAI_API_KEY=your_api_key_here
```

### Development

Start the development server:

```bash
npm run dev
```

This will start both the Electron app and the React development server.

### Building

To build the application for production:

```bash
npm run build
```

## Usage

1. Enter a descriptive text prompt
2. Click "Generate Image" or press Enter
3. View the generated images
4. Download images using the download button
5. Clear all images with the "Clear All" button

## Project Structure

```
src/
├── components/      # React components
├── store/           # Zustand stores
├── api/             # API services
├── types/           # TypeScript types
├── App.tsx          # Main app component
└── main.tsx         # React entry point
```

## API Configuration

The application uses OpenAI's DALL-E API. You need to:

1. Sign up for an OpenAI account
2. Get an API key from the OpenAI dashboard
3. Add it to your `.env` file

## Future Enhancements

- Add image editing features
- Support for multiple AI models
- Image history and favorites
- Advanced generation options
- Voice input for prompts

## License

MIT