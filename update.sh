#!/usr/bin/sh
sudo docker stop maa
sudo docker rm maa
sudo docker rmi maa
sudo docker build -t maa .
sudo docker run -d --name maa maa
sudo docker logs -f maa
