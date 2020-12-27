/* Function to hide the cursor during mouse / key inactivity.
 * Credit : https://stackoverflow.com/questions/3354239
*/
window.addEventListener('DOMContentLoaded', () => {
	(() => {
		let activityTimer: number = null;
		let cursorVisible: boolean = true;
	
		const disappearCursor = (): void =>
		{
			activityTimer = null;
			document.body.style.cursor = 'none';
			cursorVisible = false;
		};

		const setActivity = (): void => {
			if (activityTimer)
			{
				window.clearTimeout(activityTimer);
			}
	
			if (!cursorVisible)
			{
				document.body.style.cursor = 'default';
				cursorVisible = true;
			}
	
			activityTimer = window.setTimeout(disappearCursor, 3000);
		};
	
		document.onmousemove = setActivity;
		document.onkeydown = setActivity;
	})();
});