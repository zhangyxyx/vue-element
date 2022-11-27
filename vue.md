# Vue知识点

*  vue中使用bus执行函数的话，会有执行多次函数的bug
```JavaScript
this.$eventbus.$off('getFormNowFunc' )
this.$eventbus.$on('getFormNowFunc',function(){  
 
})

```
*  elementui中table的默认选中
```JavaScript
that.multipleSelection=result.data  
that.multipleSelection.forEach(row => {
  this.$refs.multipleTable.toggleRowSelection(
    this.tableData.find(item => { return row.code == item.code;}
  ),true);
});

```

*  vue中引入html文件
```JavaScript
//在public中放静态文件
//创建app.vue
	  
<iframe
style="width: 100%; height: 100%;padding: 0.1rem;box-sizing: border-box;"
ref="tempHtml" 
:src='src' 
frameborder="0" 
></iframe>
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
arr.forEach(row => {  
that.$refs.multipleTableAll.toggleRowSelection(row, false);
});

```

*  vue中表格鼠标移入行样式
```JavaScript
that.$refs.multipleTable.clearSelection()

```


*  vue将获取当前选中
```JavaScript
this.$refs.multipleTableAll.selection
```
 
 
 







 
