# vite로 모노레포 구축하기

- 목표
  - 구성
    - idea프로젝트는 독립적인 패키지로 존재한다.
    - 기존 프로젝트의 설정을 그대로 해서 관리하면 좋을 것같다.
    - 그리고 점진적으로 공통 로직을 루트로 끌어올린다.
  - 개발
    - 각 패키지의 히스토리 관리는 따로 이뤄진다
    - 저장소도 독립적으로 운영된다.
    - 각 팀에서 패키지 개발은 루트 패키지 + 해당 서브 패키지 이렇게 2개를 clone받아서 진행하는 형태
  - 배포
    - 서브 패키지는 npm에 배포 가능하여 외부 프로젝트에서 npm으로 사용이 가능하다.
    - 서브 패키지 개발은 루트 패키지와 함께 루트 패키지의 서브패키지로써 개발이 진행된다.
    - 서브 패키지 간의 의존성도 루트 패키지의 workspace에 의해 node_modules에 link되어 관리된다.
    - 모든 서브 패키지는 npm에 배포 되어있어야 한다. 그래야 외부 프로젝트에서 문제없이 각 서브 패키지를 사용할 수 있게 된다.
- issue
  - vite에서 dev server로 개발 할 때 서브 패키지를 모듈이 아닌 소스코드로 접근할 수 없다.
    - 서브 패키지를 build하도록 watch설정을 하고 개발해야 하는 불편함이 있다.
  -
