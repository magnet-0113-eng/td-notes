# Elasticsearch / Tokenizer

[ElasticsearchのTokenizerまとめ #Elasticsearch - Qiita](https://qiita.com/TakahashiKat/items/7b7c11d09d83a93098c5)

[How to implement Japanese full-text search in Elasticsearch | Elastic Blog](https://www.elastic.co/jp/blog/how-to-implement-japanese-full-text-search-in-elasticsearch)

> 日本語は単語の切れ目がわかりにくいので、転置インデックスのキーは主に次の2つの手法で作成します。  
>
> ・n-gram: N文字ずつ文章を区切る  
> ・形態素解析: 辞書などを用いて意味のある単語で区切る  
>
> しかしながら、片側の対策のみでは不十分です。具体的には、  
>
> ・n-gram では、インデックス肥大化になりがち。品詞情報に基づく処理が不可能なので、無意味の分割が多い。（検索漏れが少ないが、検索ノイズが多い）  
> ・形態素解析では、新語(未知語)に弱い。また、辞書ベースの場合、辞書にない単語は検出不能。（検索ノイズが少ないが、検索漏れが多い）  


## ngram

https://www.elastic.co/docs/reference/text-analysis/analysis-ngram-tokenizer

## kuromoji tokenizer

https://www.elastic.co/docs/reference/elasticsearch/plugins/analysis-kuromoji-tokenizer

[【Elasticsearch】kuromoji analyzerで出来ることと設定の解説 #Elasticsearch - Qiita](https://qiita.com/hatsu/items/dacbbba02d72947df435)

> mode  
> 複合語(2つ以上の単語が合わさって出来た語)と不明な単語を処理する方法を指定できます。  
>
> normal：通常の分割方法(複合語の分割も不明な単語の分割もない)  
> search：長い名詞を複合語解除する分割する（default）  
> extended：不明な単語のユニグラム(任意の文字列が1文字だけ続いた文字列)に分割する  

### Docker で Plugin インストール

```sh
docker exec -it <container> bash
bin/elasticsearch-plugin install analysis-kuromoji
```
