module.exports = (req, res, nest) => {
    res.header('access-control-allow-origin', '*'); 
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); 
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, accept, Authorization'); 

    next()
}
