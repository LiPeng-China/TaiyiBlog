查看当前目录和子目录文件/文件夹大小，disk usage

1、查看当前目录总大小

```shell
du -sh
```

2、查看当前目录所有子目录大小

```shell
du -sh *
```

3、查看当前目录和所有子目录大小，最后一行会显示当前目录的总大小，不包括隐藏文件

```shell
du -ach *
```

4、查看某个文件大小 `-h` 表示以 `K M G` 为单位显示

```shell
du -h file_name
```

