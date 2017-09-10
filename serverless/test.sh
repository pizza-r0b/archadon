#!/bin/bash
echo $1
AWS_PROFILE=archadon \
serverless invoke local \
--function updateUserPassword \
--env dev \
--secrets './secrets-dev.yml' \
--assetUrl 'https://assets.archadon.com' \
--path './functions/user/update/test/updatePw.json'
