<h1 align="center">
	<a href="https://github.com/etylermoss/youtube-tv-desktop">
		YouTube for TV Desktop
	</a>
</h1>

Electron wrapper for *youtube.com/tv*, a deprecated TV-friendly player that is still accessible with a slight user-agent tweak. The app allows you to control YouTube from your phone (in comparison to the browser version), has controller support, and is generally good for couch viewing (it's the same interface as you may find on a Smart TV).

Note: YouTube for TV is unrelated to YouTube TV, the latter being a confusingly named live TV DVR.

#### Installation

| OS              	| Link                             	|
|-----------------	|----------------------------------	|
| Archlinux       	| AUR                              	|
| Ubuntu / Debian 	| [.deb](https://github.com/etylermoss/youtube-tv-desktop/releases/latest/download/YouTube-TV-Desktop-win.exe)                             	|
| Linux AppImage  	| [.AppImage (x86)](https://github.com/etylermoss/youtube-tv-desktop/releases/latest/download/YouTube-TV-Desktop-linux-x86_64.AppImage), [.AppImage (ARM)](https://github.com/etylermoss/youtube-tv-desktop/releases/latest/download/YouTube-TV-Desktop-linux-armv7l.AppImage) 	|
| Linux Generic   	| [.tar.gz](https://github.com/etylermoss/youtube-tv-desktop/releases/latest/download/YouTube-TV-Desktop-linux-x64.tar.gz)                          	|
| Windows         	| [.exe](https://github.com/etylermoss/youtube-tv-desktop/releases/latest/download/YouTube-TV-Desktop-win.exe)                             	|

#### Building from source

```shell
$> git clone https://github.com/etylermoss/youtube-tv-desktop.git
$> cd youtube-tv-desktop
$> npm i
$> npm run build && npm run dist # packages in dist/
```
	
You can also run `npm run start` to test the app without packaging it, though you will need electron installed.

#### Controls

Aside from the regular controls, this app includes the following keybinds:

| Key             	| Action            	|
|-----------------	|-------------------	|
| F11, Ctrl/Cmd+F 	| Toggle Fullscreen 	|
| Alt             	| Toggle Menu       	|
| Ctrl/Cmd+Q      	| Quit              	|

#### Why?

I know there are browser extensions ([Chrome](https://chrome.google.com/webstore/detail/youtube-for-tv/gmmbpchnelmlmndfnckechknbohhjpge), [Firefox](https://addons.mozilla.org/en-GB/firefox/addon/youtube-for-tv/)), but these don't play nicely as a fullscreen experience given you have to hide/close parts of the browser (inconvenient), and would prefer to have the player as a seperate window. Yes I know it's Electron junk don't @ me, it was a fun quick project for Christmas.
