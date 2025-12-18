function logNumRecursively(num) {
	if (num <= 0) {
		return;
	}
	console.log(num);
	logNumRecursively(num - 1);
}

logNumRecursively(5);
