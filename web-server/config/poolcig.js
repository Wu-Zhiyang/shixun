const mysql = require("mysql");
const poolCig = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "aliyun"
}

const dbpool = {
    pool: {},
    create() {
        this.pool = mysql.createPool(poolCig);
    },
    connect(sql, arr, fun) {
        this.pool.getConnection(function (err, connection) {
            connection.query(sql, arr, fun);
            connection.release();
        })
    }

}
dbpool.create();
module.exports = dbpool;