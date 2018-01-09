build:
	docker build -t backhand:mornings .

run:
	docker run --rm -v ~/Documents/workspace/playground/mornings/public:/opt/public -p '8081:80' backhand:mornings

deploy:
	scp index.html ubuntu@ec2-1.backhand.dk:/var/sites/backhand-v3/public/mornings
	rsync -avz dist/* ubuntu@ec2-1.backhand.dk:/var/sites/backhand-v3/public/mornings/dist
