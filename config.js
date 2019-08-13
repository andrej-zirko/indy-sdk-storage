const config = {}
config.storage = {}
config.storage.lib = "libindystrgpostgres";
config.storage.entrypoint = "postgresstorage_init";

config.storage.walletConfig = {
    "storage_type": "postgres_storage",
    "storage_config": { "url": "127.0.0.1:5432" }
}

config.storage.walletCredentials = {
    "storage_credentials": { "account": "postgres", "password": "mysecretpassword", "admin_account": "postgres", "admin_password": "mysecretpassword" }
}

module.exports = config;