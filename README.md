# Comsociety

## Table of Contents

- [Prerequisite](#prerequisite)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [Branching](#branching)
  - [Commit Message](#commit-message)
    - [Type](#type)

```text
.
+-- backend/
|   +-- ...
+-- frontend/
|   +-- ...
+-- ...
```

이 Repository는 monorepo 형태로 관리됩니다. README에서는 프로젝트 전반에 관한 내용을 소개하며, 프로젝트 세부 규칙은 각 프로젝트 경로의 README에서 안내합니다.

## Prerequisite

- Node.js v12+
- Python 3.6+

프로젝트를 실행하기 위해서는 Python 3와 Node.js 런타임이 필요합니다. Python의 경우 프로젝트 실행 환경 격리를 위해 `venv` 또는 `virtualenv` 등의 도구를 사용하기를 권장합니다.

### Installation

```shell
git clone https://github.com/pers0n4/yoonyaho.git
cd yoonyaho
pip install -r requirements.txt
pre-commit install

cd frontend
npm install
# 또는
yarn

# 프론트엔드만 개발하는 경우 생략 가능
cd ../backend
poetry install
# 또는
pip install -r requirements.txt
```

이 프로젝트에서는 git hooks를 통해 코드 스타일을 일관적으로 유지할 수 있도록 합니다. git hooks 적용을 위해 hooks에서 사용되는 의존 패키지들을 설치해야 합니다.

## Contributing

1. 처리하려는 작업에 해당하는 issue 생성
2. issue에 해당하는 branch 생성
3. 생성한 branch에 `commit`, `push`
4. 작업이 완료된 working branch는 `main`의 최신 이력을 `rebase` 방식으로 `pull`한 후 `main` branch로 **Pull Request** 요청
5. review 결과에 따라 merge 진행

### Branching

> `{back,front}/ISSUE_NUMBER-description`

- e.g. 백엔드 영역의 유저 인증과 관련된 2번 이슈
  - `back/2-user-authentication`
- e.g. 프론트엔드 영역의 화면 레이아웃 구성과 관련된 16번 이슈
  - `front/16-layout`

```shell
# branch 생성 단계
git switch main
git pull origin main --rebase
git switch -c $BRANCH_NAME

# 작업 단계
git commit ...
git push origin $BRANCH_NAME

# PR 보내기 전
git pull origin main
git rebase main
git push origin $BRANCH_NAME
```

### Commit Message

[Conventional Commits](https://conventionalcommits.org/)및 [Angular Contributing](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)의 내용을 참고해서 작성

```shell
<type>: <short summary>
  │            │
  │            └─⫸ 커밋이 처리하는 내용 요약. 커밋 메시지 마지막에 마침표는 붙이지 않음.
  │

  └─⫸ build|ci|docs|feat|fix|perf|refactor|test 중 하나
```

#### Type

- **build**: 빌드 시스템 및 의존 패키지 수정
- **ci**: 지속적 통합 (CI) 관련
- **docs**: 문서화 내용 수정
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **perf**: 성능 향상 작업
- **reactor**: 새로운 기능을 추가하거나, 버그를 수정하지 않는 코드 개선 작업
- **test**: 테스팅 관련
