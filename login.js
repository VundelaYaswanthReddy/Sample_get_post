router.post('/login',async (req,res)=>{
    const {username,password,email}=req.body;
    const userDB= await User.findOne({ $and: [{password},{ email }] });
    if(userDB)
    {
        res.status(400).send({msg: "user already exists"})
    }
    else{
        
        res.send('please go to sign up page');
    };
   

});
