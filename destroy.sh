#!/bin/bash -e 
terraform destroy -auto-approve -var tv-guide-version=${VERSION}
