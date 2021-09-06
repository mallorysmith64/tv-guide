data "azuread_client_config" "current" {}

resource "azuread_application" "example" {
  display_name = "example"
  owners       = [data.azuread_client_config.current.object_id]
}


resource "azuread_service_principal" "example" {
  application_id               = azuread_application.example.application_id
  app_role_assignment_required = false
  owners                       = [data.azuread_client_config.current.object_id]

  tags = ["example", "tags", "here"]
}

resource "azuread_service_principal_password" "example" {
  service_principal_id = azuread_service_principal.example.object_id
}