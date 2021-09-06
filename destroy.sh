#!/bin/bash -e 
. ./build.vars

cd ./terraform
terraform destroy -auto-approve \
    -var tv-guide-version=${VERSION} \
    -var tv-guide-resource-group=${RESOURCE_GROUP}
