# Nilesh Tharkoti — CV / Portfolio

A polished, responsive developer-style CV website.

## Edit your CV

You normally only need to edit:

```text
data.js
```

Do not edit `index.html` just to change your CV information.

### Add GitHub and LinkedIn

Inside `data.js`:

```js
links: [
  {
    label: "GitHub",
    shortLabel: "GitHub",
    url: "https://github.com/yourusername"
  },
  {
    label: "LinkedIn",
    shortLabel: "LinkedIn",
    url: "https://www.linkedin.com/in/yourusername/"
  }
],
```

### Add projects

```js
projects: [
  {
    title: "FastPay",
    description: "Financial transaction and fraud detection backend.",
    url: "https://github.com/yourusername/FastPay"
  },
  {
    title: "Load Balancer",
    description: "A TCP load balancer built with C++ and POSIX sockets.",
    url: "https://github.com/yourusername/LoadBalancer"
  }
],
```

### Add skills

```js
skills: [
  "C++",
  "Data Structures & Algorithms",
  "DBMS",
  "Linux",
  "Docker"
],
```

## Add your actual CV PDF

Put your PDF in this folder and name it:

```text
CV.pdf
```

The **Download CV** button already points to that filename.

## Run locally

From this directory:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## GitHub Pages

1. Create a repository.
2. Upload all files.
3. Add `CV.pdf`.
4. Go to Settings → Pages.
5. Choose `Deploy from a branch`.
6. Select `main` and `/ (root)`.
7. Save.

Your public website can then be:

```text
https://YOUR-USERNAME.github.io/
```

The repository can be public for GitHub Pages, while only your GitHub account has write access. Do not put secrets or private information in `data.js`.
