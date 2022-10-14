# Vue知识点

*  vue中使用bus执行函数的话，会有执行多次函数的bug
```JavaScript
this.$eventbus.$off('getFormNowFunc' )
this.$eventbus.$on('getFormNowFunc',function(){  
 
})

```

*  滚动条样式
```JavaScript
 body::-webkit-scrollbar {
    width: 10px;
    height: 8px;
}

body::-webkit-scrollbar-track {
    background-color: #348cb6;
    border-left: 1px solid #ccc;
    border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
    background-color: #6dddef;
    border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
    background-color: #6dddef;
    border-radius: 10px;
}

```

*  vue中表格将选中的行 取消选中
```JavaScript
that.$refs.multipleTable.clearSelection()

```

*  vue中表格鼠标移入行样式
```JavaScript
that.$refs.multipleTable.clearSelection()

```

*  vue中弹出框可以拖拽
```JavaScript
 

```

*  vue中父子组件传值
```JavaScript
 

```

*  ltopo中删除元素
```JavaScript
 

```


*  ltopo中更新节点连接
```JavaScript
 

```
*  JS中Map的使用
```JavaScript
    1) Map 的声明

 var map = new Map();
 2) Map 的赋值

map.set(k1,v1);
3) Map 的取值

Get(): 该方法返回 key 对应的 value，如果不存在，则返回 undefined。

map.get(k1);
4) 判断 Map 中是否有 k 值

Has(): 该方法用于检查 Map 是否有指定 key 对应的 value。

map.has(k1);
5) 删除 k 值

Delete(): 该方法用于删除 map 中指定 key 对应的一组 key-value 元素

map.delete(k1);
注：Java 里 Map 是用 remove () 来删除定 key 对应的一组 key-value 元素

6) 清空 Map

Clear(): 该方法用于清空指定 map 对象中的所有内容。

map.clear();
二.Map 遍历

  接下来，我们将了解如何遍历 Map。 首先需要知道 Map 中的这些方法 : keys , values, entries , 这些方法将在下面的 for 循环遍历中起着重要作用.

1) 准备数据

var map = new Map();
map .set(k1, v1);
map .set(k2, v2);
map .set(k3, v3);
map .set(k4, v4);
map .set(k5, v5);
 2) 使用 keys 方法遍历

该方法返回 Map 对象中每个元素的 key。尤其是你在只需要遍历 Map 集合的键时，更是如此。

for(const k of map.keys()){
   console.log("key值 :" + k );
}

/* 
  key值 : k1
  key值 : k2
  key值 : k3
  key值 : k4
  key值 : k5
*/
3) 使用 values 方法遍历

和 keys 方法对应，values 方法返回的就是 Map 对象中的 value 集合。

for(const v of map.values()){
   console.log("value值 :" + v );
}

/* 
  value值 : v1
  value值 : v2
  value值 : v3
  value值 : v4
  value值 : v5
*/
4) 使用 entries 方法遍历

该方法返回 Map 集合中每个 [key，value] 元素的对象。　　

for (const [key, value] of map.entries()) {
    console.log(key, value);
}

/*
k1,v1
k2,v2
k3,v3
k4,v4
k5,v5
*/

```


 