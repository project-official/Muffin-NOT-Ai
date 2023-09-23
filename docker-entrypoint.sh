#!/bin/bash
dockerize -wait tcp://database:1502 -timeout 20s
yarn start