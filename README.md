# Comsociety

## Table of Contents

- [Contributing](#contributing)
  - [Branching](#branching)
  - [Commit Message](#commit-message)
    - [Type](#type)
  - [Commands](#commands)

```text
.
+-- backend/
|   +-- ...
+-- frontend/
|   +-- ...
+-- ...
```

이 Repository는 monorepo 형태로 관리됩니다. README에서는 프로젝트 전반에 관한 워크플로우를 소개하며, 프로젝트 세부 규칙은 각 프로젝트 경로의 README에서 안내합니다.

## Contributing

1. 처리하려는 작업에 해당하는 issue 생성
2. issue에 해당하는 branch 생성
3. 생성한 branch에 `commit`, `push`
4. 작업이 완료된 working branch는 `main`의 최신 이력을 `rebase` 방식으로 `pull`한 후 `main` branch로 **Pull Request** 요청
   - reviewer는 @pers0n4 및 해당 PR이 영향을 미치는 관계자 지정
5. review 결과에 따라 merge 진행
   - Approved PR의 경우 해당 PR을 승인한 reviewer가 merge
   - PR이 반려될 경우 문제 사항을 해결한 후 author가 직접 merge

> - author: issue 및 PR을 생성한 사람
> - reviewer: PR 및 코드를 리뷰하는 사람
> - approved: PR이 리뷰어에 의해 승인(검증)된 상태

### Branching

- `{back,front}/ISSUE_NUMBER-description`
  - e.g. 백엔드 영역의 유저 인증과 관련된 2번 이슈
    - `back/2-user-authentication`
  - e.g. 프론트엔드 영역의 화면 레이아웃 구성과 관련된 16번 이슈
    - `front/16-layout`

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

### Commands

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
