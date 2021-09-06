resource azurerm_user_assigned_identity user_id {
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  name = "registry-uai"
}

#data azurerm_key_vault_key example {
#    name         = "super-secret"
#    key_vault_id = data.azurerm_key_vault.existing.id
#}