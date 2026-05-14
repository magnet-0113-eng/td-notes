# Github Actions / Commit & Push

[GitHub Actions上でgit commitするときにgit userをどうするか #GitHubActions - Qiita](https://qiita.com/thaim/items/3d1a4d09ec4a7d8844ce)

botでのコミットログを残す

```yaml
    - name: Setup Github user
      run: |
        git config user.name "github-actions[bot]"
        git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
```

ファイルを生成してコミットする（権限を付与する必要あり）

```yaml
jobs:
  build:
    permissions:
      contents: write
```

```yaml
    - name: Generate
      run: |
        node generate.js
        git add .
        git diff --staged --quiet || (git commit -m 'ci(changelog): generate file' && git push)
```

[git diffの全オプション一覧 #Git - Qiita](https://qiita.com/rana_kualu/items/09d2dd379019b8ef0335)

> git diff --staged --quiet  

ステージされた変更がなければ終了コード 0、変更があれば終了コード 1

