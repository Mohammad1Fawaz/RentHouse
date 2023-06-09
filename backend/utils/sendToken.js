
const sendToken = (user,statusCode,res) =>{
    const token =user.getJwtToken();
  
    const options = {
        expires :new Date(Date.now() + 90 * 24 * 30 * 90 * 54),
        httpOnly:true
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}

module.exports = sendToken