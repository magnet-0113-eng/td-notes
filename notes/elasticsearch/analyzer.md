# Elasticsearch / Analyzer

https://www.elastic.co/docs/reference/elasticsearch/mapping-reference/analyzer

[[Elasticsearch] analyzerを使う前に把握しておきたい内容まとめ #Kibana - Qiita](https://qiita.com/C_HERO/items/094af261db4725b4baa9)

[ElasticsearchのAnalyzer, Tokenizer, Token Filters, Char Filtersの一覧 #Elasticsearch - Qiita](https://qiita.com/wapa5pow/items/a11274d85a0359c423d9)

[【Elasticsearch】Analyzerの基本的なこと #Elasticsearch - Qiita](https://qiita.com/boutan/items/4a4341ad7fcd11205b94)

|名称|内容|
|---|---|
|Character filters|文字列に対し、Tokenizerで分割する前に必要な処理（追加、削除、変更）を行う。<br>前処理的ポジションで、使用は任意。|
|Tokenizer|文字列を単語レベルに分割する役割を持つ。<br>必須項目。|
|Token filters|Tokenizerで分割された内容に対し、必要な処理（追加、削除、変更）を行う。<br>後処理的ポジションで、使用は任意。|


## 分析確認

```sh
curl -sS -X GET localhost:9200/_analyze \
-H "Content-Type: application/json" \
-d '
{
  "char_filter": [
    {
      "type": "pattern_replace",
      "pattern": "\\s+",
      "replacement": ""
    }
  ],
  "tokenizer": "kuromoji_tokenizer",
  "text": "株式会社ｆｕｎ　ｆｕｎｃｔｉｏｎ"
}' | jq .
```

> tokenizer に standard や kuromoji_tokenizer を入れると先に分割されてトークンが分かれてしまうので word_delimiter_graph がちゃんと動かないっぽい

https://www.elastic.co/docs/reference/text-analysis/analysis-word-delimiter-graph-tokenfilter

```sh
# うまく動作しない
curl -sS -X GET localhost:9200/_analyze \
-H "Content-Type: application/json" \
-d '
{
  "tokenizer": "kuromoji_tokenizer",
  "filter": [
    {
      "type": "word_delimiter_graph",
      "catenate_words": true,
      "catenate_all": true
    }
  ],
  "text": ["super-duper-xl"]
}' | jq .

# 動作する
curl -sS -X GET localhost:9200/_analyze \
-H "Content-Type: application/json" \
-d '
{
  "tokenizer": "whitespace",
  "filter": [
    {
      "type": "word_delimiter_graph",
      "catenate_words": true,
      "catenate_all": true
    }
  ],
  "text": ["super-duper-xl"]
}' | jq .
```