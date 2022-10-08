import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {
	let data = [];
	// connection.query(
	// 	'SELECT * FROM `users` ',
	// 	function(err, results, fields) {			
	// 		results.map((row)=> {
	// 			data.push({
	// 				id: row.id,
	// 				firstName: row.firstName,
	// 				lastName: row.lastName,
	// 				email: row.email
	// 			})
	// 		});
	// 		//return res.render('index.ejs', {dataUser: data})
	// 	}
	// )
	const [rows, fields] = await pool.execute('SELECT * FROM users');
	return res.render('index.ejs', {dataUser: rows})
}

let getDetailPage = async (req, res) => {
	let userId = req.params.id;
	let user = await pool.execute(`select * from users where id = ?`, [userId])

	console.log('Check params: ', user)
	return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    await pool.execute('insert into users (firstName, lastName, email, address) values(?, ?, ?, ?)', 
    [firstName, lastName, email, address]);

    return res.redirect('/');
}

module.exports = {
    getHomepage, getDetailPage, createNewUser
}