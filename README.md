This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

markdown
# AI Image Generation

A simple Next.js application that allows users to generate random images from a pre-downloaded list. Users can explore images, generate new ones, and manage their profiles using Firebase authentication. The app is rate-limited, allowing users to generate a maximum of 3 images per hour.

## Features

- User authentication with Google using Firebase
- Explore page showcasing available features
- Image generation page that allows users to generate random images
- Profile page to view user information
- Rate limiting for image generation (3 images per hour)
- Edit image section for basic image upload and modification

## Screenshots

![Explore Page]()
![Generate Page]()
![Profile Page]()
![Edit Image Page]()

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Vercel Serverless Functions
- **Database**: Vercel KV for rate limiting and user data
- **Authentication**: Firebase Authentication
- **Image Editing**: HTML5 Canvas (for future enhancements)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Firebase account
- Vercel account for deployment

### Installation

1. Clone the repository:
2. Install the dependencies:
3. Create a `.env.local` file in the root of the project and add your Firebase configuration:
4. Set up Firebase Authentication:
   - Go to the Firebase console, create a new project, and enable Google sign-in in the authentication section.
   - Make sure to add the appropriate redirect URIs in your Firebase project's settings.

5. Set up Vercel KV for rate limiting:
   - Create a Vercel account and set up your project.
   - Add any necessary environment variables in the Vercel dashboard.

### Running the Application

To run the application locally in development mode, use the following command:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

To deploy the application, follow these steps:

1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Connect your repository to Vercel.
3. Follow the prompts to configure your deployment settings.
4. Set your environment variables in the Vercel dashboard.

## Usage

1. Visit the application URL after deployment.
2. Click "Sign In with Google" to authenticate.
3. Explore the features on the Explore page.
4. Go to the Generate page to generate random images (up to 3 per hour).
5. View your profile information on the Profile page.
6. Use the Edit Image section to upload and modify images (future enhancements).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests. Please ensure your code adheres to the existing coding style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Firebase](https://firebase.google.com/) - Backend services for mobile and web
- [Vercel](https://vercel.com/) - Hosting platform for frontend frameworks
