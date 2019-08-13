# Summary
This is a sample Node.js project for indy-sdk storage plugin.

Specifically it was tested on postgres_storage plugin:
- https://github.com/hyperledger/indy-sdk/tree/master/experimental/plugins/postgres_storage

This sample is based on indy-sdk sample.


# Motivation
Default SQLite indy-sdk storage is good fit for edge agent purposes. For high availability cloud agent usecases, DB like PostgreSQL is much better fit.

I was not able to find sample Node.js postgres_storage plugin implementation. [Only a Python one](https://github.com/hyperledger/indy-sdk/blob/master/samples/python/src/getting_started.py). So this was a proof of concept test for me. Hopefully it will also help  somebody else. 

# Installing and Testing with Postgres Plug-in
PostgreSQL should be up and running before executing this sample.

You can startup a local Postgres database with the following command:

```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres -c 'log_statement=all' -c 'logging_collector=on' -c 'log_destination=stderr'
```

Note that with the above command (it starts the Postgres database in debug mode) you can monitor database command activity as follows:

```
# first get the id of the Postgres docker container
docker ps
# then connect to the Postgres container and watch the log file:
docker exec -it <container id> bash
# in the Postgres docker container run the following:
cd /var/lib/postgresql/data/log
tail -f <the latest postgres log file>
# you will see each SQL command executed
```

This is useful to see when the application is actually connecting to Postgres.

To build the Postgres plug-in:

- Clone indy-sdk repository
- Build postgres plugin (experimental/plugins/postgres_storage):

```
git clone https://github.com/hyperledger/indy-sdk.git
cd experimental/plugins/postgres_storage
cargo build
```

To run the sample:

- Set LD_LIBRARY_PATH env variable to path, where the plugin was built
- Run the sample using node anoncredsRevocationStorage.js
 

```
LD_LIBRARY_PATH=experimental/plugins/postgres_storage/target/debug/ node anoncredsRevocationStorage.js
```
