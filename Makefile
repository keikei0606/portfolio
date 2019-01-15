deploy:
	npm run build
	cp -a build/* ../keikei0606.github.io/
	cd ../keikei0606.github.io && git add . && git commit -m "update" && git push origin master
