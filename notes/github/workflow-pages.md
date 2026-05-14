# Github Actions / Publish Pages

事前に「gh-pages」ブランチを作成しておく。  
Pagesの設定でブランチを「gh-pages」にディレクトリを「Root」に設定する。  

[GitHub ActionsからGitHub Pagesにデプロイする #GitHubActions - Qiita](https://qiita.com/h_tyokinuhata/items/771e7ff9dc216072f9f5)

https://github.com/peaceiris/actions-gh-pages

```yaml
    - name: Push gh-pages branch
      uses: peaceiris/actions-gh-pages@v4.1.0
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
        keep_files: true
        user_name: github-actions[bot]
        user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

publish_dirで指定したディレクトリの中身が gh-pages ブランチのルートに配置される。
