#!/bin/bash -e
VERSION=0.21
RESOURCE_GROUP=tvguide-rg

docker build -t tv-guide:$VERSION .
docker tag tv-guide:$VERSION ${RESOURCE_GROUP}.azurecr.io/tv-guide:$VERSION  
#docker push ${RESOURCE_GROUP}.azurecr.io/tv-guide:$VERSION  

cd ./terraform
terraform init
terraform apply -auto-approve \
    -var tv-guide-version=${VERSION} \
    -var tv-guide-resource-group=${RESOURCE_GROUP}