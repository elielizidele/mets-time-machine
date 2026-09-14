# The Mets Time Machine — Netlify edition

This is the complete Mets Time Machine website converted for Netlify. It uses
Next.js for the site and Netlify Blobs for shared all-time-roster voting.

## Put it on Netlify

Because the site includes live voting, connect the source code to Netlify rather
than using the basic drag-and-drop uploader.

1. Unzip this folder.
2. Upload the folder to a new GitHub repository.
3. In Netlify, choose **Add new project** and then **Import an existing project**.
4. Choose GitHub and select the repository.
5. Netlify should detect Next.js. Keep the build command as `npm run build`.
6. Choose **Deploy**.

No database account or environment variables are required. Netlify creates the
`roster-votes` Blobs store automatically when the first visitor votes.

## Work on it locally

```bash
npm install
npm run dev
```

The pages can be viewed locally. Shared voting is provided by Netlify and is
available after deployment.
