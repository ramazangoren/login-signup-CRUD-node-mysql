const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database'
});



exports.register = (req, res) => {
    console.log(req.body);

    const { nameAndlastname, username, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            return res.render('signup', {
                message: 'that email is already in use'
            })
        }
        else if (password !== passwordConfirm) {
            return res.render('signup', {
                message: 'passwords do not match'
            })
        }
        //   const hashedPassword = await bcrypt.hash(password, 8);
        //    console.log(hashedPassword);

        db.query("INSERT INTO users SET ?", { name: nameAndlastname, username: username, email: email, password: password }, (error, results) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(results);
                return res.render('signup', {
                    message: 'user registered'
                })
            }
        })

    })
}






exports.update = (req, res) => {
    console.log(req.body);

    const { email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (!results.length > 0) {
            return res.render('resetpassword', {
                message: 'no such email address'
            })

        }
        else if (password !== passwordConfirm) {
            return res.render('resetpassword', {
                message: 'passwords do not match'
            })
        }
        //   const hashedPassword = await bcrypt.hash(password, 8);
        //    console.log(hashedPassword);

        db.query("UPDATE  users SET password= ? WHERE email = '{email}'", {  password: password}, (error, results) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(results);
                return res.render('resetpassword', {
                    message: 'password updated successfully'
                })
            }
        })

    })
}


//  hashed_password: hashedPassword  