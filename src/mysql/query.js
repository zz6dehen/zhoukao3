var mysql = require('mysql')
var opt = {
    user: 'root',
    password: 'root',
    database: 'zhoukao3'
}
var pool = mysql.createPool(opt)

function query(sql, arr, ck) {
    pool.getConnection(function(err, con) {
        if (err) {
            return ck && ck(err)
        }
        con.query(sql, arr, function(err, results) {
            if (err) {
                return ck && ck(err)
            }
            ck && ck(null, results)
            con.release()
        })

    })
}
module.exports = query