# Postgresql / GEO Location

[18. ジオグラフィ — Introduction to PostGIS](https://postgis.net/workshops/ja/postgis-intro/geography.html)  

> SRIDが4326で地理空間参照系を宣言している

```sql
SELECT
  'SRID=4326;POINT(-118.4079 33.9434)'::geometry, -- Los Angeles (LAX)
  'SRID=4326;POINT(2.5559 49.0083)'::geometry     -- Paris (CDG)
```

https://postgis.net/docs/ja/ST_SetSRID.html

ジオメトリのSRIDを特定の整数値に設定します。クエリのためのバウンディングボックスを生成する際に使います。

> geometry ST_SetSRID(geometry geom, integer srid);

https://postgis.net/docs/ja/ST_MakePoint.html

XY 2次元、XYZ 3次元、XYZM 4次元のポイントジオメトリを生成します。XYM座標のポイントを生成するには ST_MakePointM を使用します。  

地理座標系について、Xは経度(longitude)で、Yは緯度(latitude)です。  

> geometry ST_MakePoint(float x, float y);


```sql
SELECT
  ST_SetSRID(
    ST_MakePoint(2.5559, 49.0083),
    4326
  )
```

## 半径検索

https://postgis.net/docs/ja/ST_DWithin.html

ジオメトリが与えられた距離内にある場合にはTRUEを返します。

> boolean ST_DWithin(geometry g1, geometry g2, double precision distance_of_srid);

```sql
SELECT * 
FROM table
WHERE ST_DWithin(geo, 'SRID=4326;POINT(? ?)'::GEOGRAPHY, 100)
```

## 距離検索

https://postgis.net/docs/ja/ST_Distance.html

geometry型では、二つのジオメトリ間の2次元のデカルト (平面)距離の最小値を返します。単位は投影の単位 (空間参照系の単位)です。

> float ST_Distance(geometry g1, geometry g2);

```sql
SELECT
  ST_Distance(
    'SRID=4326;POINT(-118.4079 33.9434)'::geometry, -- Los Angeles (LAX)
    'SRID=4326;POINT(2.5559 49.0083)'::geometry     -- Paris (CDG)
  )
```

## K-近傍検索 (kNN Gist)

https://postgis.net/workshops/ja/postgis-intro/knn.html

> order by distance ( <-> ) 演算子

[PostgreSQL 9.1 の新機能 | Let's POSTGRES](https://lets.postgresql.jp/documents/technical/9.1/1)  

> 近傍検索に GiST インデックスが利用できるようになりました。point 型には距離を計算する <-> 演算子がありますが、この演算子を使って、特定の位置から近い順にソートする処理が高速化できます。

```sql
SELECT
  osm_id,
  name,
  ST_Distance('SRID=4326;POINT(139.77 35.68)'::GEOGRAPHY, geog)
FROM cs_geog
ORDER BY
  'SRID=4326;POINT(139.77 35.68)'::GEOGRAPHY <-> geog
LIMIT 5;
```