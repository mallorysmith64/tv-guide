resource "azurerm_container_group" "aci" {
  name                = "tvguide-instance"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  ip_address_type     = "public"
  dns_name_label      = "tv-guide-example"
  os_type             = "Linux"

  container {
    name   = "tv-guide"
    image  = "${var.tv-guide-resource-group}.azurecr.io/tv-guide:${var.tv-guide-version}"
    cpu    = "0.5"
    memory = "1.5"

    ports {
      port     = 80
      protocol = "TCP"
    }
  }

  image_registry_credential {
        server = azurerm_container_registry.acr.login_server
        username = azurerm_container_registry.acr.admin_username
        password = azurerm_container_registry.acr.admin_password
  }

  // identity {
  //   type = "SystemAssigned"
  // }

  tags = {
    environment = "dev"
  }
} 