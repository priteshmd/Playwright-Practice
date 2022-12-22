set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
call npm install
mkdir ".\node_modules\puppeteer-core\.local-chromium\chromium-1028"
move ".\node_modules\puppeteer-core\.local-chromium\win64-1045629\chrome-win" ".\node_modules\puppeteer-core\.local-chromium\chromium-1028"
SET PLAYWRIGHT_BROWSERS_PATH=.\node_modules\puppeteer-core\.local-chromium\
echo "set path Done %cd%"
call npm run test:chromium