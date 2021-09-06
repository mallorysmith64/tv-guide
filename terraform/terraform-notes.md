--- created by TF: az group create --name tim --location eastus

az acr update -n <resource-group-name> --admin-enabled true



docker login <resource-group-name>.azurecr.io

az acr login --name <resource-group-name> --expose-token --output tsv --query accessToken

username is 00000000-0000-0000-0000-000000000000
password is long token acquired from: ``