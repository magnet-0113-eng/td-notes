# Python / 文字列操作

## trim

https://www.w3schools.com/PYTHON/ref_string_strip.asp

> string.strip([characters])  

引数を省略した場合は「空白」と「改行」が削除されます。

```python
"  abc  ".strip()
```

## 分割

https://www.w3schools.com/PYTHON/ref_string_split.asp

> string.split([separator, maxsplit])

```python
"1 2 3 4".split()
```

## 置換

https://www.w3schools.com/PYTHON/ref_string_replace.asp

> string.replace(oldvalue, newvalue [, count])

```python
"100-1001".replace('-', '')
```

## 正規表現

https://docs.python.org/ja/3.13/library/re.html

### 置換

> re.sub(pattern, repl, string [, count=0, flags=0])

string 中に出現する最も左の重複しない pattern を置換 repl で置換することで得られる文字列を返します。  
パターンが見つからない場合、 string がそのまま返されます。

```python
import re

re.sub('[a-z]+@', 'REP@', 'mail@example.com')
```

### 検索

> re.search(pattern, string [, flags=0])

string 全体を走査して、正規表現 pattern がマッチを発生する最初の位置を探して、対応する Match を返します。

```python
import re

if m := re.search('([a-z]+)@', 'mail@example.com'):
    m.group(0) # The entire match => mail@
    m.group(1) # The first parenthesized subgroup => mail
```
