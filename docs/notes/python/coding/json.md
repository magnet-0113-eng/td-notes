# Python / JSON

https://docs.python.org/ja/3/library/json.html

## dumps

> json.dumps(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)

```python
res = json.dumps(data, default=str, ensure_ascii=False)
```

## loads

> json.loads(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)

```python
res = json.loads(data)
```
