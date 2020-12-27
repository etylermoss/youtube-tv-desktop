/* 3rd party imports */
import { join } from 'path';
import { app, BrowserWindow, shell, Menu } from 'electron';
import ElectronLocalshortcut from 'electron-localshortcut';

const address = 'https://www.youtube.com/tv';
const userAgent = 'Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4.0) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.1 TV Safari/538.1';

const windowMenu = Menu.buildFromTemplate([
	{
		label: 'YouTube TV Desktop',
		submenu: [
			{
				role: 'togglefullscreen',
				visible: true,
			},
			{
				role: 'quit',
				visible: true,
				accelerator: 'Ctrl+Q',
			},
			{
				role: 'about',
				visible: true,
				click: () => { shell.openExternal('https://github.com/etylermoss/youtube-tv-desktop') },
			},
		],
	},
]);

const registerShortcuts = (window: BrowserWindow): void => {
	/* Regular Menu accelerator is overwritten for some reason. */
	ElectronLocalshortcut.register(window, ['Ctrl+F', 'F11'], () => {
		window.setFullScreen(!window.fullScreen);
	});
};

const createWindow = (): BrowserWindow => {
	const window = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: join(__dirname, 'preload.js'),
		},
	});

	window.loadURL(address, {userAgent});
	window.setAspectRatio(16/9);
	window.webContents.on('new-window', (event, url) => {
		event.preventDefault();
		shell.openExternal(url);
	});

	window.setMenu(windowMenu);
	window.setAutoHideMenuBar(true);

	registerShortcuts(window);

	!PROD && window.webContents.openDevTools();

	return window;
};

app.on('ready', () => {
	createWindow();
	
	/* On macOS re-create the window when the dock icon is clicked and
	 * there are no other windows open.
	*/
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	/* On MacOS the window can be recreated. */
	if (process.platform !== 'darwin') {
		app.quit();
	}
});