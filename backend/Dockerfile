FROM python:3.8-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app/

COPY requirements.txt ./
RUN set -eux; \
        apk update \
        && apk add --no-cache --virtual .build-deps \
            build-base \
            python3-dev \
            py3-pip \
            # for bcrypt
            libffi-dev \
        && apk add --no-cache \
            libressl-dev \
            openssl-dev \
            # for PostgreSQL
            postgresql-dev \
        && pip install --no-cache-dir -r requirements.txt \
        && apk del --no-network .build-deps

COPY . .

EXPOSE 5000
CMD gunicorn --preload --workers=2 --bind=0.0.0.0:5000 "app:create_app('production')"
