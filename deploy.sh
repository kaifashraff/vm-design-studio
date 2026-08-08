#!/usr/bin/env bash
# Deploy site to GitHub Pages: https://kaifashraff.github.io/vm-design-studio/
set -e
cd "$(dirname "$0")"
TOKEN=$(grep -oP 'https://\K(ghp_[^@]+)(?=@github)' /home/kaif/laqab-v2/.git/config | head -1)
if [ -z "$TOKEN" ]; then echo "token not found"; exit 1; fi
REPO=/tmp/vm-design-studio-deploy
rm -rf "$REPO"
git clone -q "https://${TOKEN}@github.com/kaifashraff/vm-design-studio.git" "$REPO"
rsync -a --delete --exclude='.git' --exclude='deploy.sh' ./ "$REPO/"
cd "$REPO"
git add -A
git -c user.email='kaif@users.noreply.github.com' -c user.name='kaifashraff' commit -q -m "site update $(date -u +%Y-%m-%dT%H:%MZ)" || { echo "nothing to commit"; exit 0; }
git push -q origin main
echo "deployed: $SITE"
