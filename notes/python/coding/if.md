# Python / 条件分岐


## 代入式

[Python3.8の新機能(2) - 代入式の導入 #Python - Qiita](https://qiita.com/ksato9700/items/d37efc6982365e24f6af)

```python
data = "T" if True else "F"
```

### 名前付き式 (Named Expression)

> if <変数> := <式>:

```python
result = match.group(1) if (match := re.match(pattern, data)) else None
```
