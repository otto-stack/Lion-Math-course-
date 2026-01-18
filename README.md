# Lion Math Website 🦁

This is the official website for Lion Math (Lion Sir), built with React, TypeScript, and Tailwind CSS.

## 📁 Project Structure

- **`components/`**: All the website sections (Hero, About, Courses, etc.).
- **`public/`**: **IMPORTANT** - Put your image files here.
- **`assets.ts`**: The control center for changing images.
- **`App.tsx`**: The main entry point.

---

## 📸 How to Add Your Own Images

### Step 1: Put images in the folder
1.  Open the **`public`** folder on your computer.
2.  Drag and drop your photos here.
3.  **Rename them** to match these filenames exactly:
    - `image_1.jpg` (Lion Sir Profile Picture)
    - `image_2.jpg` (Student Studying)
    - `about_academic.jpg` (Certificate)
    - `image_3_notes.jpg` (Notes Feature)
    - `ig_showcase.jpg` (Instagram Screenshot)
    - `image_5.jpg` (Review Photo 1)
    - `review_1.jpg` (Review Photo 2)
    - `review_2.jpg` (Review Photo 3)
    - `review_3.jpg` (Review Photo 4)

### Step 2: Update the Code
1. Open **`assets.ts`**.
2. Remove the `//` from the lines starting with `export const...` that point to your local files (e.g., `"/image_1.jpg"`).
3. Add `//` to the lines pointing to the online placeholder links.

---

## ☁️ How to Upload to GitHub (Choose one method)

### Method A: The "No Terminal" Way (Easiest)
You can use the buttons inside VS Code.

1.  Look at the **Left Sidebar** in VS Code.
2.  Click the icon that looks like a **Tree Branch** (Source Control).
    *   *It usually has a blue number badge on it.*
3.  Type a message in the text box (e.g. "Added images").
4.  Click the blue **Commit** button.
5.  Click the **Sync Changes** (or Publish) button.

### Method B: The Website Drag & Drop Way
1.  Go to your repository on **GitHub.com**.
2.  Click on the **`public`** folder.
3.  Click **Add file** (top right) -> **Upload files**.
4.  Drag your images from your Mac Finder into the browser window.
5.  Click the green **Commit changes** button.

### Method C: The Terminal Way (Advanced)
Open Terminal in VS Code (`Ctrl + ~`) and type:
```bash
git add .
git commit -m "Update images"
git push
```

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
