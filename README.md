# Lion Math Website 🦁

This is the official website for Lion Math (Lion Sir), built with React, TypeScript, and Tailwind CSS.

## 📁 Project Structure

- **`components/`**: All the website sections (Hero, About, Courses, etc.).
- **`public/`**: **IMPORTANT** - Put your image files here.
- **`assets.ts`**: The control center for changing images.
- **`App.tsx`**: The main entry point.

---

## 📸 How to Add Your Own Images

1.  **Open the `public` folder**.
2.  **Drag and drop** your photo files into this folder.
3.  **Rename your files** to match these names exactly:
    - `image_1.jpg` (Lion Sir Profile Picture)
    - `image_2.jpg` (Student Studying)
    - `about_academic.jpg` (Certificate)
    - `image_3_notes.jpg` (Notes Feature)
    - `ig_showcase.jpg` (Instagram Screenshot)
    - `image_5.jpg` (Review Photo 1)
    - `review_1.jpg` (Review Photo 2)
    - `review_2.jpg` (Review Photo 3)
    - `review_3.jpg` (Review Photo 4)

4.  **Update the Code**:
    - Open `assets.ts`.
    - Comment out the "Online Placeholder" lines (add `//` at the start).
    - Uncomment the "Your Local File" lines (remove `//` from the start).

---

## 🚀 How to Run Locally

If you want to edit the code on your computer:

1.  Install Node.js.
2.  Open the project folder in VS Code.
3.  Open the terminal and run:
    ```bash
    npm install
    npm run dev
    ```
4.  Open the link shown (usually `http://localhost:5173`).

---

## 🌐 Deploying to GitHub Pages

1.  Create a repo on GitHub.
2.  Push your code.
3.  Go to Settings -> Pages -> Source: GitHub Actions.
