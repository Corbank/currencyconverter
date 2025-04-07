# Deploying to GitHub Pages

Follow these steps to deploy your Currency Converter to GitHub Pages:

## One-time setup

1. Install the gh-pages package as a dev dependency:

```
npm install --save-dev gh-pages
```

2. Make sure your package.json has the homepage property set correctly. 
   It should match your GitHub username and repository name:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/currencyconverter"
```

3. Ensure you have the deploy scripts in your package.json:

```json
"scripts": {
  // other scripts...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## Deploying the app

After making changes to your code, deploy to GitHub Pages with:

```
npm run deploy
```

This will:
1. Create an optimized production build of your app
2. Push it to a branch called gh-pages in your GitHub repository

## Accessing the live app

After deployment, your app will be available at:
https://YOUR_GITHUB_USERNAME.github.io/currencyconverter

Note: It may take a few minutes for GitHub to publish your site after deployment.

## Troubleshooting

If your app isn't showing correctly:

1. Check if the gh-pages branch was created in your repository
2. Go to your repository Settings > Pages to confirm GitHub Pages is enabled
3. Ensure it's set to deploy from the gh-pages branch
4. Make sure your browser isn't caching an old version (try incognito mode)
