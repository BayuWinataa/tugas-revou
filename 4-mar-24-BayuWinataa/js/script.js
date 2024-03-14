function calculateBMI() {
	const berat = document.getElementById('berat').value;
	const tinggi = document.getElementById('tinggi').value;

	if (berat === '' || tinggi === '') {
		alert('Masukan berat badan dan tinggi badan ');
		return;
	}

	const bmi = berat / Math.pow(tinggi / 100, 2);

	let result;
	if (bmi < 18.5) {
		result = 'Kekurangan berat badan';
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		result = 'Normal ';
	} else if (bmi >= 25 && bmi <= 29.9) {
		result = 'Kelebihan berat badan';
	} else {
		result = 'Kegemukan (Obesitas)';
	}

	document.getElementById('result').innerHTML = ` BMI Kamu  ${bmi.toFixed(2)}. Kamu berada di kategori ${result}.`;
}

function reset() {
	document.getElementById('berat').value = '';
	document.getElementById('tinggi').value = '';
	document.getElementById('result').innerHTML = '';
}
