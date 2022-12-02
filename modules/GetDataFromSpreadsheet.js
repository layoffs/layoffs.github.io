async function GetDataFromSpreadsheet(id, sheet) {
	return await 
		fetch(`https://script.google.com/macros/s/AKfycbwih-5BgPB6ZJFHa32sKfqSab2azL3fqkCejuuQGV4o5RQagz2wsjpaKL3j_zi7gB2xlg/exec?id=${id}&sheet=${sheet}`)
		.then(response => response.json())
}

export default GetDataFromSpreadsheet;