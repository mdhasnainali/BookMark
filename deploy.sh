echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to to server..."
scp -r dist/* shakib@146.190.160.22:/var/www/146.190.160.22/

echo "Deployed successfully!"
