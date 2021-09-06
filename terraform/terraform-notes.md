--- created by TF: az group create --name tim --location eastus

az acr update -n registry8139008131 --admin-enabled true



docker login registry8139008131.azurecr.io

az acr login --name registry8139008131 --expose-token --output tsv --query accessToken

username is 00000000-0000-0000-0000-000000000000
password is long token acquired from: ``