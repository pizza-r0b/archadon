#!/bin/bash

AWS_PROFILE=archadon \
serverless invoke local \
--function updateUserProfile \
--env dev \
--secrets './secrets-dev.yml' \
--assetUrl 'https://assets.archadon.com' \
--path './functions/user/update/test/updateProfile.json'
