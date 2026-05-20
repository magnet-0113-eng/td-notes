# Elasticsearch / Token Filters

https://www.elastic.co/docs/reference/text-analysis/token-filter-reference

> トークンフィルタはトークナイザーからトークンストリームを受け取り、トークンの変更（例：小文字化）、トークンの削除（例：ストップワードの削除）、トークンの追加（例：同義語の追加）を行うことができます。


## add token (Shingle token filter)

https://www.elastic.co/docs/reference/text-analysis/analysis-shingle-tokenfilter

> 隣接するトークンを連結することで、シングル（単語nグラム）をトークンストリームに追加します。デフォルトでは、シングルトークンフィルタは2単語のシングルとユニグラムを出力します。
> 
> 例えば、多くのトークナイザーは「the lazy dog」を「[ the, lazy, dog ]」に変換します。シングルフィルタを使用すると、このストリームに2単語のシングルを追加できます。「[ the, the lazy, lazy, lazy dog, dog ]」。

