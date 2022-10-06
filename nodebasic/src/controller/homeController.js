import connection from '../configs/connectDB'

let getHomepage = (req, res) => {
	let data = [];
	connection.query(
		'SELECT * FROM `users` ',
		function(err, results, fields) {			
			results.map((row)=> {
				data.push({
					id: row.id,
					firstName: row.firstName,
					lastName: row.lastName,
					email: row.email
				})
			});
			return res.render('index.ejs', {dataUser: data})

		})



}

module.exports = {
    getHomepage
}