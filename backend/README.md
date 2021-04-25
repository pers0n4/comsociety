# Comsociety Backend

[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black) [![Imports: isort](https://img.shields.io/badge/%20imports-isort-%231674b1?style=flat&labelColor=ef8336)](https://pycqa.github.io/isort/)

---

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
  - [Run server](#run-server)
  - [Run tests](#run-tests)
- [Style Guide](#style-guide)
  - [Naming](#naming)

---

## Installation

```bash
poetry install [--no-root]
# or
pip install -r requirements.txt

```

## Usages

### Run server

```shell
# 데이터베이스 초기화
flask init-db

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

# coverage
coverage run -m pytest
coverage report -m
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
