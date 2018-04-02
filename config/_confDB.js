import os from 'os';
export default {
    database: {
        name: "db_hideberg",
        host: 'localhost',
        user: 'root',
        password: os.type() != 'Windows_NT' ? 'root' : "",
        port: os.type() != 'Windows_NT' ? '3306' : "",
    },
    model: {
        "validate": {
            "notEmpty": "Must not be empty"
        }
    }
}