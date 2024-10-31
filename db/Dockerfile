FROM mariadb:latest

RUN apt update
RUN apt install zip -y

# Grab the latest peq database
ADD http://db.projecteq.net/api/v1/dump/latest /restore.zip
RUN unzip /restore.zip

# Copy init.sql to the entrypoint folder
COPY init.sql  /docker-entrypoint-initdb.d/init.sql

# Append peq scripts to single init.sql
RUN cat /peq-dump/create_tables_login.sql >> /docker-entrypoint-initdb.d/init.sql
RUN cat /peq-dump/create_tables_queryserv.sql >> /docker-entrypoint-initdb.d/init.sql
RUN cat /peq-dump/create_tables_system.sql >> /docker-entrypoint-initdb.d/init.sql
RUN cat /peq-dump/create_tables_content.sql >> /docker-entrypoint-initdb.d/init.sql
RUN cat /peq-dump/create_tables_player.sql >> /docker-entrypoint-initdb.d/init.sql
RUN cat /peq-dump/create_tables_state.sql >> /docker-entrypoint-initdb.d/init.sql