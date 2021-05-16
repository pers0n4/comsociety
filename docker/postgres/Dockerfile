FROM postgres:13-alpine

COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/

EXPOSE 5432
CMD ["postgres"]
