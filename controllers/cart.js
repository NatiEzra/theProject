const login=require('./login');
function addToCart()
{
    let logged = login.isLoggedIn(req, res);
    if(logged==null)
    {
        Swal.fire({
            title: 'Error',
            text: 'Please log-in',
            icon: 'error',
            confirmButtonText: 'OK'
          })

    }
}

module.exports = {
addToCart,
}