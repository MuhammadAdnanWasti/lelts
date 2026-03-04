# IELTS Preparation Platform

A comprehensive web application designed to help students prepare for the IELTS exam effectively. This platform offers a seamless experience for practicing all four modules: Listening, Reading, Speaking, and Writing, along with subscription management and detailed analytics.

## 🚀 Features

-   **User Authentication**: Secure signup, login, password reset, and profile management using NextAuth.js.
-   **Dashboard**:
    -   **Student Dashboard**: Track progress, manage subscriptions, and access assignments.
    -   **Admin Dashboard**: Manage users, plans, banners, and view platform analytics.
-   **Practice Modules**: Interactive practice environment for Listening, Reading, Speaking, and Writing sections.
-   **Mock Tests**: Full-length simulated exams to gauge readiness.
-   **Subscription Plans**: Integration with **Stripe** for handling payments and premium subscriptions.
-   **Responsive Design**: Modern and responsive UI built with Tailwind CSS and Framer Motion.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
-   **Payment**: [Stripe](https://stripe.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Alerts**: [SweetAlert2](https://sweetalert2.github.io/)

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or higher)
-   npm, yarn, or pnpm
-   MongoDB instance (Local or Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/MuhammadAdnanWasti/lelts.git
    cd lelts
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root directory and configure the following variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000

    # Stripe Configuration
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── app/                  # Application routes and API endpoints
│   ├── (main)/           # Public pages (Landing, Login, Signup)
│   ├── api/              # Backend API routes
│   ├── dashboard/        # Protected dashboard routes
│   └── exam/             # Exam interface
├── components/           # Reusable UI components
├── lib/                  # Utility functions and database configuration
├── models/               # Mongoose schemas
└── types/                # TypeScript interfaces
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
