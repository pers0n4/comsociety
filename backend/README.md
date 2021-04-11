# Comsociety Backend

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black) [![Imports: isort](https://img.shields.io/badge/%20imports-isort-%231674b1?style=flat&labelColor=ef8336)](https://pycqa.github.io/isort/)

---

## Table of Contents

- [Installation](#installation)
  - [Poetry](#poetry)
  - [pip](#pip)
- [Usages](#usages)
  - [Initialize atabase](#initialize-atabase)
  - [Run server](#run-server)
  - [Run tests](#run-tests)
- [Style Guide](#style-guide)
  - [Naming](#naming)

---

## Installation

**_Prerequisites_**

- 이 프로젝트를 실행하기 위해서 3.8 버전 이상의 python 사용을 추천한다
- dependency 간 충돌 등을 방지하기 위해 가상 python 환경 구성을 추천한다
- package 및 dependencies를 관리하기 위해 [Poetry](https://python-poetry.org/) 사용을 추천한다

### Poetry

```shell
poetry install [--no-root]
```

### pip

```shell
pip install -r requirements.txt
```

## Usages

### Initialize atabase

```shell
flask init-db
```

### Run server

```shell
# 개발 환경으로 실행
FLASK_ENV=development flask run

# 배포 환경으로 실행
flask run
```

\* `flask run` 명령어는 배포 환경으로 실행한다는 뜻일뿐, 실제 배포 환경에서 실행하는 명령어라는 뜻은 아님

### Run tests

```shell
pytest
pytest -sv
```

## Style Guide

- Indentation으로 4 spaces 사용
- 같은 statement 내에서 라인이 분리될 때 trailing commas (,) 사용
- Trailing whitespace 허용 안 함
- python 파일 마지막 줄은 공백이어야 한다
- [isort](https://github.com/PyCQA/isort) => [black](https://github.com/psf/black) 순으로 포맷팅을 적용한다
- 명시하지 않은 스타일은 [black](https://github.com/psf/black)에서 적용하는 스타일을 따른다

### Naming

- `variable_name`
- `function_name`
- `ClassName`
- `method_name`
- `module_name`
- `package_name`
- `CONSTANT_NAME`
