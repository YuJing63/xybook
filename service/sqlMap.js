var sqlMap = {
    user: {
        add: 'insert into user (username, email, password) values (?,?,?)',
        select: 'select * from user'
    },
    book:{
        add:'insert into book (bookid, bookname,booksize, userid,introduction) values (?,?,?,?,?)',
        select: 'select * from book'
    }
}

module.exports = sqlMap;